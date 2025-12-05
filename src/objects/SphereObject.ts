import * as THREE from 'three';
import { DemoObject } from './DemoObject';

export class SphereObject extends DemoObject {
    protected createMesh(): THREE.Mesh {
        const radius = 1.0;
        const geometry = new THREE.SphereGeometry(radius, 24, 16);
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color(Math.random() * 0xffffff),
            metalness: 0.2,
            roughness: 0.7
        });
        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.x = (Math.random() - 0.5) * 10;
        sphere.position.y = radius;
        sphere.position.z = (Math.random() - 0.5) * 10;

        return sphere;
    }
}
