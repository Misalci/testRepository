import { WebGLRenderer, Scene, PerspectiveCamera, Vector3, MOUSE } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { allGenerators } from "./TBaseObject";
import { panel } from "./TGui";
import { onMouseDblClick } from "./TMouseClick";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js"


export class ThreeEngin {
    dom = null;

    constructor(dom) {
        // 创建渲染器
        let renderer = new WebGLRenderer({
            antialias: true,    // 开启抗锯齿
        })
        // 将画布插入到页面的dom元素中
        dom.appendChild(renderer.domElement)
        renderer.setSize(dom.offsetWidth, dom.offsetHeight, true)

        let scene = new Scene()

        let camera = new PerspectiveCamera(45, dom.offsetWidth/dom.offsetHeight, 1, 1000)
        camera.position.set(200,200,200)
        camera.lookAt(new Vector3(0, 0, 0))
        camera.up = new Vector3(0, 1, 0)

        renderer.render(scene, camera)
        // 设置背景色
        renderer.setClearColor('rgb(239, 70, 1)')

        // 标签tag渲染器
        let css2DRenderer = new CSS2DRenderer()
        css2DRenderer.setSize(dom.offsetWidth, dom.offsetHeight)
        // HTML标签<div id="tag"></div>外面父元素叠加到canvas画布上且重合
        // 必须要有，否则显示不出来
        css2DRenderer.domElement.style.position = 'absolute'
        css2DRenderer.domElement.style.top = '0px'
        //设置.pointerEvents=none，解决HTML元素标签对threejs canvas画布鼠标事件的遮挡
        css2DRenderer.domElement.style.pointerEvents = 'none'
        dom.appendChild(css2DRenderer.domElement)

        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.dom = dom

        // 逐帧渲染
        let animate = () => {
            renderer.render(scene, camera)
            allGenerators.forEach(elem => {
                elem.children[1].rotation.z += elem.userData.speed / 100
            })
            css2DRenderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()

        // 添加轨道控制器
        let orbitControls = new OrbitControls(camera, renderer.domElement)
        // 设置鼠标按键功能
        // MOUSE需引入
        // orbitControls.mouseButtons = {
        //     LEFT: null,     // 左键无功能
        //     MIDDLE: MOUSE.DOLLY,    // 中键缩放
        //     RIGHT: MOUSE.ROTATE     // 右键旋转
        // }

        // 实时更新canvas画布的宽高
        window.onresize = function() {
            renderer.setSize(dom.offsetWidth, dom.offsetHeight)
            camera.aspect = dom.offsetWidth / dom.offsetHeight
            camera.updateProjectionMatrix()
        }

        // 添加右上角gui
        // 显示在HelloWorld中的div中
        dom.appendChild(panel.domElement)

        // 鼠标双击事件
        // true 表示该元素在事件的"捕获阶段"（由外往内传递时）响应事件；
        // false 表示该元素在事件的"冒泡阶段"（由内向外传递时）响应事件。
        addEventListener('dblclick', function(event){onMouseDblClick(event, camera, scene, renderer)}, false)
    }

    /**
     * 向场景中添加模型
     * @param   {...any} object 模型列表
     */
    addObject(...object) {
        object.forEach(elem =>{
            this.scene.add(elem)
        })
    }

    // 添加标签
    addTag(div, index) {
        // 把html元素转化成CSS2模型对象
        const tag = new CSS2DObject(div)
        tag.position.set(0, allGenerators[index].position.y + 50, 0)
        allGenerators[index].add(tag)
        // this.scene.add(tag)
    }
}

