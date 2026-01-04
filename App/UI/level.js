import * as THREE from 'three'
import {mathMaterials} from "./materials";

const floorWidth = 10;
const floorThickness = 0.5;
const geoSegments = 16;
const wallHeight = floorWidth / 2;


export function initLevel(scene) {

    let floor;
    function createWall(width, thickness, height) {
        let floor = new THREE.BoxGeometry(width,
            thickness,
            height);
        const floorMesh = new THREE.Mesh(floor, mathMaterials.threeMaterial);
        floor = floorMesh;
        floor.receiveShadow = true;
        return floor;
    }

    const bottomFloor = createWall(floorWidth, floorThickness, floorWidth);
    bottomFloor.position.y = 0
    bottomFloor.position.z = 0;
    bottomFloor.receiveShadow = true
    scene.add(bottomFloor);

    const leftWall = createWall(floorWidth, floorThickness, wallHeight);
    leftWall.rotation.x = Math.PI / 2;
    leftWall.position.y = wallHeight / 2 - floorThickness / 2;
    leftWall.position.z = (floorWidth / 2) + floorThickness / 2;
    scene.add(leftWall);

    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        mathMaterials.floorMaterial
    )
    sphere.castShadow = true



}