import * as THREE from 'three'
import {mathMaterials} from "./materials";

const floorWidth = 500;
const floorThickness = 30;
const geoSegments = 16;


export function initLevel(scene) {

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        mathMaterials.floorMaterial
    )
    sphere.castShadow = true

    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(5, 5),
        mathMaterials.threeMaterial
    )
    plane.rotation.x = - Math.PI * 0.5
    plane.position.y = - 2
    plane.position.z = -5;
    sphere.position.z = -5;
    plane.receiveShadow = true
    scene.add(sphere, plane)
}