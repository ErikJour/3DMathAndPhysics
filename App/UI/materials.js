import * as THREE from 'three'
import {neutraColors} from "./colors";

export const mathMaterials = {
            floorMaterial: new THREE.MeshStandardMaterial({
            color: neutraColors.neutraBeige
         }),
            threeMaterial: new THREE.MeshStandardMaterial({
                roughness: 0.7,
                color: neutraColors.charcoalGray
            })
}