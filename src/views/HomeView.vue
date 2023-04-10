<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      
      <el-container>
        <!-- <el-header>
          <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/threejsShow">ThreejsShow</router-link>
          </nav>
        </el-header> -->
        <el-main>
          <!-- <router-view/> -->
          <div class="home">
            <Swiper :modules="modules" 
                    :pagination="{ clickable: true }"
                    :slides-per-view="2"
                    :space-between="100"
                    navigation
                    :scrollbar="{ draggable: true }"
                    @swiper="onSwiper"
                    @slideChange="onSlideChange"
            >
              <SwiperSlide>
                <img src="../assets/beach.jpg" alt="">
              </SwiperSlide>
              <SwiperSlide>
                <img src="../assets/city.jpg" alt="">
              </SwiperSlide>
              <SwiperSlide>
                <img src="../assets/plain.jpg" alt="">
              </SwiperSlide>
              <SwiperSlide>
                <img src="../assets/road.jpeg" alt="">
              </SwiperSlide><SwiperSlide>
                <img src="../assets/mountain.jpg" alt="">
              </SwiperSlide>
            </Swiper>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

export default {
  name: 'HomeView',

  components: {
    // HelloWorld
    Swiper,
    SwiperSlide
  },

  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  }
}
</script>

<style scoped>
/* 设置轮播图大小 */
img{
  width: 600px;
  height: 400px;
}

.common-layout .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.common-layout .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.common-layout .el-main {
  padding: 0;
}

.common-layout .el-menu {
  border-right: none;
  background: var(--el-color-primary-light-8);
}
</style>
