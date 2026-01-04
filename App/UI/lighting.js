import * as THREE from 'three'
import {neutraColors} from "./colors";

export function initLighting(scene) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight);

// Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(2, 2, - 1)
    scene.add(directionalLight)

    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    directionalLight.shadow.camera.near = 1
    directionalLight.shadow.camera.far = 6
    directionalLight.shadow.camera.left = 2
    directionalLight.shadow.camera.top = 2
    directionalLight.shadow.camera.right = -2
    directionalLight.shadow.camera.bottom = -2

    const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
    directionalLightCameraHelper.visible = false
    scene.add(directionalLightCameraHelper)
}