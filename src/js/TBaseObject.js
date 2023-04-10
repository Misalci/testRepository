import { MeshStandardMaterial, Mesh, PlaneGeometry, 
    ConeGeometry, CylinderGeometry, Shape, 
    ExtrudeGeometry } from "three"

import { insMesh } from "./generateObjs"

export const  allBaseObject = []    // 返回基础模型
export const allGenerators = []     // 发电机数组

/**
 * 创建地面
 */
export const ground = new Mesh(
    new PlaneGeometry(1000, 1000),
    new MeshStandardMaterial({
        color: 0x088A29,
        roughness: 0.8,
        metalness: 0  // 金属度
    })
)

ground.userData = {
    name: '地面',
    area: '500*500'
}

ground.rotateX(-Math.PI/2)

/**
 * 风力发电机
 */
// 基座
export const baseCylinder = new Mesh(
    new CylinderGeometry(1.5, 3, 100, 8),  // (顶部半径、底部半径、高度、侧面分段数)
    new MeshStandardMaterial({
        color: 'rgb(220, 220, 220)',
        roughness: 1,
    })
)
baseCylinder.userData = {
    name: '发电机基座',
    speed: 2    // 扇叶旋转速度
}

// 电机
export const generator = new Mesh(
    new CylinderGeometry(3, 5, 10, 4),
    new MeshStandardMaterial({
        color: 'rgb(220, 220, 220)',
        roughness: 0.5,
    })
)
generator.userData = {
    name: '发电机'
}

// 扇叶中心
export const fanCenter = new Mesh(
    new ConeGeometry(2, 4, 8),      // 底部半径， 高度， 分段数
    new MeshStandardMaterial({
        color: 'rgb(220, 220, 220)',
        roughness: 0.5,
    })
)

// 风扇叶片
const fanShape = new Shape();
fanShape.moveTo( -1, 0 );
fanShape.lineTo(0, 40)
fanShape.lineTo(1, 0)
const extrudeSettings = { depth: 0.5 };     // 挤出的配置

export const fan = new Mesh(
    new ExtrudeGeometry( fanShape, extrudeSettings ),    // 由二维的shape挤出三维geometry
    new MeshStandardMaterial({
        color: 'rgb(220, 220, 220)',
        roughness: 0.5,
    })
);
// 克隆剩余的两个叶片
const fan1 = fan.clone()
const fan2 = fan.clone()
// 将叶片合在一起
fan.add(fan1)
fan.add(fan2)
fan1.rotateZ(Math.PI * 2 / 3)
fan2.rotateZ(Math.PI * 4 / 3)

// 组合
// 将电机加入到基座上
// add方法，将generator作为baseCylinder的子组件
baseCylinder.add(generator)
// 子组件在父组件中的相对位置
generator.position.y = 50
generator.rotateX(Math.PI / 2)
generator.rotateY(Math.PI / 4)
// fanCenter作为generator的子组件
generator.add(fanCenter)
fanCenter.position.y = 8
// 扇叶作为baseCylinder的子组件
baseCylinder.add(fan)
fan.position.set(0, 50, 5)

baseCylinder.name = 'baseCylinder0'
// 生成其他发电机
const baseCylinder1 = baseCylinder.clone()
baseCylinder.name = 'baseCylinder1'

const baseCylinder2 = baseCylinder.clone()
baseCylinder.name = 'baseCylinder2'

const baseCylinder3 = baseCylinder.clone()
baseCylinder.name = 'baseCylinder3'

// 位置
baseCylinder.position.set(-100, 50, 100)
baseCylinder1.position.set(100, 50, 100)
baseCylinder2.position.set(100, 50, -100)
baseCylinder3.position.set(-100, 50, -100)

// 将发电机加入一个组
allGenerators.push(baseCylinder)
allGenerators.push(baseCylinder1)
allGenerators.push(baseCylinder2)
allGenerators.push(baseCylinder3)



// 将需要添加到场景中的物体添加到数组中
allBaseObject.push(ground)
allBaseObject.push(insMesh)
allGenerators.forEach(elem => {allBaseObject.push(elem)})