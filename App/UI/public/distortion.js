export const distortionVertexChunk = `
uniform float uDistortion;
uniform float uTubeRadius;
uniform float uResonance;
uniform float uWidth;
uniform float uPeakHeight;

vec3 applyResonance(vec3 position) {
    if (uResonance < 0.01) return position;
    
    float t = (position.x + uWidth * 0.5) / uWidth;
    
    // Gaussian curve - smooth bell shape
    float peakCenter = 0.85;
    float peakWidth = 0.35;
    float dist = (t - peakCenter) / peakWidth;
    float peak = exp(-dist * dist);
    
    float yOffset = peak * uResonance * uPeakHeight;
    
    return vec3(position.x, position.y + yOffset, position.z);
}

vec3 applyDistortion(vec3 position, vec3 normal) {
    if (uDistortion < 0.001) return position;
    
    float distortionScale = uDistortion * uTubeRadius * 0.5;
    float frequency = 5.0 + uDistortion * 20.0;
    
    float noise = sin(position.x * frequency) * 
                  cos(position.y * frequency * 1.3) * 
                  sin(position.z * frequency * 0.7 + position.x * 2.0);
    
    float detail = sin(position.x * frequency * 3.7) * 
                   cos(position.z * frequency * 2.9) * 0.3;
    
    float displacement = (noise + detail) * distortionScale;
    
    return position + normal * displacement;
}
`;

export function createDistortableMaterial(baseMaterial) {
    const mat = baseMaterial.clone();

    mat.uniforms = {
        uDistortion: { value: 0 },
        uTubeRadius: { value: 0.1 },
        uResonance: { value: 0 },
        uWidth: { value: 1 },
        uPeakHeight: { value: 1 }
    };

    mat.onBeforeCompile = (shader) => {
        shader.uniforms.uDistortion = mat.uniforms.uDistortion;
        shader.uniforms.uTubeRadius = mat.uniforms.uTubeRadius;
        shader.uniforms.uResonance = mat.uniforms.uResonance;
        shader.uniforms.uWidth = mat.uniforms.uWidth;
        shader.uniforms.uPeakHeight = mat.uniforms.uPeakHeight;

        shader.vertexShader = shader.vertexShader.replace(
            '#include <common>',
            `#include <common>
            ${distortionVertexChunk}`
        );

        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `#include <begin_vertex>
            transformed = applyResonance(transformed);
            transformed = applyDistortion(transformed, objectNormal);`
        );
    };

    mat.customProgramCacheKey = () => 'distortable-matcap';

    return mat;
}