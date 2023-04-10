import { AmbientLight, PointLight } from "three"

export const allLights = []

// 添加环境光
export const ambientLight = new AmbientLight('rgb(255, 255, 255)', 0.8)

// 点光源
export const pointLight = new PointLight(
    'rgb(255, 255, 255)',
    0.5,
    600,
    0.2,
)
pointLight.position.set(0, 100, 200)

allLights.push(ambientLight)
allLights.push(pointLight)