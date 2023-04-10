import { ConeGeometry, InstancedMesh, MeshStandardMaterial, Object3D } from "three";


// instance批量实例化几何体节省资源
export const insMesh = new InstancedMesh(
    new ConeGeometry(5, 20, 32),
    new MeshStandardMaterial({
        color: 0x3a9857,
        roughness: 0.5,
    }),
    120     // 个数
)

// 修改位置
let transform = new Object3D();
for(let index = 0; index < 120; index++) {
    transform.position.set(Math.random()*500 - 250, 10, Math.random()*500 - 250)    // 在x:[-250, 250),z:[-250, 250)范围内生成
    transform.scale.set(1, 1, 1)
    transform.updateMatrix();

    insMesh.setMatrixAt(index, transform.matrix)
}