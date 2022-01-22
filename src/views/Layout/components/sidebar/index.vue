<template>
  <el-scrollbar class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="menu in menuData" :key="menu.path" :item="menu" :base-path="menu.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import SidebarItem from './SideBarItem.vue';
import menuData from '@/mock/menuData';
export default defineComponent({
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const router = useRouter();
    console.log('router: ', router);
    return { router, menuData };
  }
});
</script>

<style></style>
