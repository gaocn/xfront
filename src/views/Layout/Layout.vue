<template>
  <el-container class="container">
    <el-aside class="container-aside">
      <el-scrollbar>
        <sidebar :is-collapse="isCollapse" />
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-header class="container-header">
        <tags-view />
      </el-header>
      <el-main class="container-main">
        <el-scrollbar>
          <main-app />
          <el-button @click="collapse">collapse</el-button>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import MainApp from './components/Main.vue';
import TagsView from './components/TagsView.vue';
import Sidebar from './components/sidebar/index.vue';
import { ref } from 'vue';
const isCollapse = ref(false);
const collapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="less">
body {
  margin: 0px;
  padding: 0px;
}
</style>

<style lang="less" scoped>
.container {
  background-color: white;
  .container-aside {
    width: 300px;
    margin-right: 5px;
    background-color: #f2f2f2;
  }

  .container-header {
    padding: 0px;
    margin-bottom: 5px;
    height: 30px;
    line-height: 30px;
    background-color: #f2f2f2;
  }

  .container-main {
    padding: 0px;
    height: 100vh - 30px;
    background-color: #f2f2f2;
  }
}
</style>
