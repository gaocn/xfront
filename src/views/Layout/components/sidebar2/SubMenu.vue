<template>
  <div class="sub-menu-list" :class="mode === 'vertical' ? 'flex-col' : 'flex-row'">
    <template v-for="(item, index) in subMenuList">
      <el-sub-menu v-if="item.children && item.children.length > 0" :key="index + 'el-sub-menu'" :index="item.path">
        <template #title>
          <el-icon-wrapper v-if="item.icon" :name="item.icon" />
          <span>{{ item.name }}</span>
        </template>
        <sub-menu :subMenuList="item.children" :mode="mode"></sub-menu>
      </el-sub-menu>
      <el-menu-item v-else :key="index + item.path" :index="item.path">
        <template #title>
          <el-icon-wrapper v-if="item.icon" :name="item.icon" />
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { NavMenuItem } from '@/typings/nav';
import ElIconWrapper from '@/components/ElIconWrapper.vue';
export default defineComponent({
  components: { ElIconWrapper },
  name: 'SubMenu',
  props: {
    subMenuList: {
      type: Array as () => Array<NavMenuItem>,
      default: () => []
    },
    mode: {
      // horizontal\vertical
      type: String,
      default: 'horizontal'
    }
  }
});
</script>
<style lang="less">
.flex-row {
  display: flex;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>
