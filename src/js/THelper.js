import { AxesHelper, GridHelper, PointLightHelper } from "three";
import { pointLight } from "./TLight"; 

export const allHelper = []

// 500为辅助线长度
export const axesHelper = new AxesHelper(500)

// 创建地面网格辅助
export const gridHelper = new GridHelper(100, 10, 'red', 'rgb(222, 225, 230)')

// 光线辅助
const sphereSize = 10
const pointLightHelper = new PointLightHelper(pointLight, sphereSize, 'green')

allHelper.push(axesHelper)
allHelper.push(gridHelper)
allHelper.push(pointLightHelper)