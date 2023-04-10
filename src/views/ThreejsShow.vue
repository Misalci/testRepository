<template>
    <el-row>
        <el-col
        v-for="(o, index) in 2"
        :key="o"
        :span="8"
        :offset="index > 0 ? 2 : 0"
        >
        <el-card :body-style="{ padding: '0px' }">
            <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            />
            <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
                <router-link to="/HelloWorld">HelloWorld</router-link>
            </div>
            </div>
        </el-card>
        </el-col>
    </el-row>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'ThreejsShow',

    components: {
        HelloWorld
    }
}

</script>

<style>
</style>