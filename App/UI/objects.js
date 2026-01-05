import * as THREE from 'three'
import {mathMaterials} from "./materials";
import {animateSpeed} from "./basicMotion";

let testHeight = 3;
let positionBegin = -3.5;
let endPosition = 3.5;

export function initializeObjects(scene) {
    const sphereObject = new THREE.SphereGeometry(1, 32, 32 );
    const sphereMesh = new THREE.Mesh(sphereObject, mathMaterials.floorMaterial)
    sphereMesh.position.set(positionBegin, testHeight, 1);
    scene.add(sphereMesh);
    return sphereMesh;
}

