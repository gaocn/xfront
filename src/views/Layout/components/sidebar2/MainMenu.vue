<template>
  <div class="nav-bar">
    <el-scrollbar>
      <el-menu
        :show-timeout="200"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        unique-opened
        router
        mode="vertical"
        :collapse="isCollapse"
      >
        <sub-menu :subMenuList="menuData" mode="vertical" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import menuData from '@/mock/menuData';
import SubMenu from './SubMenu.vue';
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
});
</script>
<style lang="less" scoped>
.nav-bar {
  height: 100vh;
}
</style>
