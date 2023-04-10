<template>
  <div class="three-canvas" ref="threeTarget">
  </div>
</template>

<script>
import { ThreeEngin } from '@/js/TEngine';
import { allBaseObject, allGenerators } from "../js/TBaseObject";
import { allLights } from "../js/TLight"
import { allHelper } from '@/js/THelper';
import { onMouseDblClick } from '@/js/TMouseClick';

export default {
  name: 'HelloWorld',
  data() {
    return {
      ThreeEngin: null,
    }
  },

  mounted() {
    this.ThreeEngin = new ThreeEngin(this.$refs.threeTarget)
    this.ThreeEngin.addObject(...allBaseObject)   // 添加基础模型
    this.ThreeEngin.addObject(...allLights)   // 添加光线
    this.ThreeEngin.addObject(...allHelper)   // 添加辅助线

    // const div = document.getElementById('tag')
    // this.ThreeEngin.addTag(div)

    this.createTagDiv(allGenerators)

    // allBaseObject.forEach(elem => {
    //   console.log(elem)
    // })
  },

  methods: {
    createTagDiv(allGenerators) {
      let index = 0
      allGenerators.forEach(elem => {
        const divElement = document.createElement("div")

        divElement.id = 'tag' + index
        divElement.innerText = '发电机' + index + '号'
        divElement.style.backgroundColor = 'green'

        this.ThreeEngin.addTag(divElement, index)
        index++
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.three-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: aqua;
}
</style>
