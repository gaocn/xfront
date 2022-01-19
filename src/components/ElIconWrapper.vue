<template>
  <el-icon :size="size" :color="color">
    <!-- vue 动态组件用于实现在指定位置上，动态加载不同的组件 -->
    <component :is="name"></component>
  </el-icon>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import * as Icons from '@element-plus/icons-vue';
export default defineComponent({
  name: 'ElIconWrapper',
  components: Icons,
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
});
</script>
