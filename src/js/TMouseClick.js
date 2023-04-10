import { Mesh, Raycaster, Vector2 } from "three";
import { obj, panel } from "./TGui";

// 鼠标双击触发的方法
export function onMouseDblClick(event,camera, scene, renderer) {
    // 获取raycaster和所有模型相交的数组
    let intersects = getIntersects(event, camera, scene, renderer)

    // 获取选中最近的mesh对象
    let selectObject
    if(intersects.length != 0 && intersects[0].object instanceof Mesh) {
        selectObject = intersects[0].object
        console.log(selectObject)
        DblClickHandler(selectObject)
    } else {
        alert("未选中mesh")
    }
}

// 获取与射线相交的对象数组
export function getIntersects(event, camera, scene, renderer) {
    event.preventDefault()

    let raycaster = new Raycaster()
    let mouse = new Vector2

    // 通过鼠标点击的位置，计算出 raycaster 所需的点的位置，以屏幕为中心，范围 -1 到 1

    // event.offsetX 以html元素的左上角为原点，event.clientX 以窗口的左上角为原点
    // 由于我们的画布不是全屏显示的，故这里用event.offsetX

    // renderer.domElement.getBoundingClientRect().width :获取渲染区域的宽度
    // 这里用 dom.getBoundingClientRect().width 也是一样的，但不能用window.innerWidth，因为我们的渲染区域不是全屏的
    mouse.x = (event.offsetX / renderer.domElement.getBoundingClientRect().width) * 2 - 1
    mouse.y = -(event.offsetY / renderer.domElement.getBoundingClientRect().height) * 2 + 1

    // 通过鼠标点击的位置（二维坐标）和当前相机的矩阵计算出射线位置
    raycaster.setFromCamera(mouse, camera)

    // 获取与射线相交的对象数组，其中的元素按照距离排序，越近的越靠前
    let intersects = raycaster.intersectObjects(scene.children)

    // 返回选中的对象
    return intersects
}

export function DblClickHandler(selectObject) {
    if (selectObject.userData.name == "发电机基座") {
        console.log("name = ", selectObject.userData.name)
        console.log("speed = ", selectObject.userData.speed)
        
        panel.add(obj, "showTag")
        panel.add(obj, "name")
        panel.add(obj, "speed")
        panel.add(obj, "apply")
    }
    else if(selectObject.userData.name == "发电机") {
        console.log("name = ", selectObject.parent.userData.name)
        console.log("speed = ", selectObject.parent.userData.speed)

        panel.add(obj, "showTag")
        panel.add(obj, "name")
        panel.add(obj, "speed")
        panel.add(obj, "apply")
    }
}