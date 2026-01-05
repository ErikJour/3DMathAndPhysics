import * as THREE from 'three'
import {initLighting} from "./lighting";
import {initLevel} from "./level";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {initializeObjects} from "./objects";
import {animateSpeed} from "./basicMotion";

//Canvas
const canvas = document.querySelector('canvas.webgl');

//Scene Setup
const scene = new THREE.Scene();

//Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

//Camera
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 3
camera.position.z = -10
scene.add(camera)

//Initialize Objects
initLighting(scene);
initLevel(scene);
const testSphere = initializeObjects(scene);

scene.add(testSphere);
// Controls
const movementControls = new OrbitControls(camera, canvas);
movementControls.enableDamping = true
movementControls.enableZoom = true;
movementControls.enableRotate = true;
movementControls.enablePan = true;
movementControls.enableDamping = true;
movementControls.dampingFactor = 0.9;
movementControls.panSpeed = 0.65;
movementControls.enabled = true;


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

//Movement Bounds
const movementBounds = {
    minZ: -20,
    maxZ:   5,
    minY: 0,
    maxY: 10
};

//Clock
const clock = new THREE.Clock()

let time = null;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    camera.position.z = THREE.MathUtils.clamp(camera.position.z, movementBounds.minZ, movementBounds.maxZ);
    camera.position.y = THREE.MathUtils.clamp(camera.position.y, movementBounds.minY, movementBounds.maxY);

    // Update controls
    movementControls.update()
    time = animateSpeed(testSphere, -3.5, 3.5, elapsedTime);
    console.log(time);

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()


