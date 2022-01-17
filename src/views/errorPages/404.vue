<template>
  <div class="container">
    <el-row :gutter="1">
      <el-col :span="12">
        <img :src="errGif" class="not-found" alt="404" />
      </el-col>
      <el-col :span="12" style="position: relative">
        <h1>Oops!</h1>
        <h2>没有找到该页面</h2>
        <el-button class="btn" type="primary" @click="backToHome">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import errGif from '@/assets/images/404.png';
import { useRouter } from 'vue-router';
const router = useRouter();

const backToHome = () => {
  router.push({ path: '/' });
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  transform: translateY(30%);

  .not-found {
    float: right;
    width: 60%;
  }

  .btn {
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>
