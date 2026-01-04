import * as THREE from 'Three'
import {neutraColors} from "./colors";

export const mathMaterials = {
            floorMaterial: new THREE.MeshStandardMaterial({
            color: neutraColors.terracotta
         }),
            threeMaterial: new THREE.MeshStandardMaterial({
                roughness: 0.7
            })
}