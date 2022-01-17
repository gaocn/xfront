<template>
  <div class="container">
    <el-row>
      <el-button type="primary" @click="back">返回</el-button>
    </el-row>
    <el-row :gutter="4">
      <el-col :span="12">
        <h1>Oops!</h1>
        <h2>你没有权限访问此页面</h2>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream." />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import errGif from '@/assets/images/401.gif';
import { useRouter } from 'vue-router';
const router = useRouter();

const back = () => {
  router.go(-1);
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 0 auto;
  transform: translateY(20%);
}
</style>
