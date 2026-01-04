import * as THREE from "Three";

//Scene Setup
const scene = new THREE.Scene();

const sizes = {
    width: 1080,
    height: 596
};

const camera = new THREE.PerspectiveCamera(75, sizes.width, sizes.height);
scene.add(camera);
camera.position.set(0, 0, 0);

const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate()