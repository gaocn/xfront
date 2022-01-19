<template>
  <div class="nav-bar">
    <el-scrollbar>
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened
        router
        :mode="mode"
        :collapse="isCollapse"
      >
        <sub-menu :subMenuList="menuData" :mode="mode" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { NavMenuItem } from '@/typings/nav';
import { defineProps } from 'vue';
import SubMenu from './SubMenu.vue';
defineProps({
  mode: {
    type: String,
    default: 'vertical'
  },
  isCollapse: {
    type: Boolean,
    default: false
  }
});
const menuData: Array<NavMenuItem> = [
  { name: '导航一', icon: 'location', path: '/home1', children: null },
  {
    name: '导航二',
    icon: 'location',
    path: '/home2',
    children: [
      { name: '2-1', icon: 'location', path: '/home3', children: null },
      { name: '2-2', icon: 'location', path: '/home4', children: null }
    ]
  },
  {
    name: '导航三',
    icon: 'location',
    path: '/home5',
    children: [
      { name: '3-1', icon: 'location', path: '/home6', children: null },
      {
        name: '3-2',
        icon: 'location',
        path: '/home7',
        children: [
          { name: '3-1-1', icon: 'location', path: '/home8', children: null },
          { name: '3-1-2', icon: 'location', path: '/home9', children: null }
        ]
      }
    ]
  }
];
</script>
<style lang="less" scoped>
.nav-bar {
  height: 100vh;
}
</style>
