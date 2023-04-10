import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'

export const panel = new GUI({ width: 310 })

export const obj = {
    showTag: true,
    name: "风力发电机",
    speed: 2,
    apply: function() { alert("应用成功") }
}