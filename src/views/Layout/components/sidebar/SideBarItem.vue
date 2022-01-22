<template>
  <div v-if="!item.hidden && item.children">
    <template v-if="hasOneShowChildren(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowChildren)">
      <router-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <template #title>
            <el-icon-wrapper v-if="item.icon" :name="item.icon" />
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </router-link>
      <app-link :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
          <template #title>
            <el-icon-wrapper v-if="item.icon" :name="item.icon" />
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </app-link>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <el-icon-wrapper v-if="item.icon" :name="item.icon" />
        <span>{{ item.name }}</span>
      </template>

      <template v-for="(child, index) in item.children">
        <div v-if="!child.hidden" :key="index">
          <sidebar-item
            v-if="child.children && child.children.length > 0"
            :is-nest="false"
            :item="child"
            :key="child.path"
            :base-path="resolvePath(child.path)"
            class="nest-menu"
          />

          <router-link v-else :to="resolvePath(child.path)">
            <el-menu-item :index="resolvePath(child.path)">
              <template #title>
                <el-icon-wrapper v-if="child.icon" :name="child.icon" />
                <span>{{ child.name }}</span>
              </template>
            </el-menu-item>
          </router-link>
        </div>
      </template>
    </el-sub-menu>
  </div>
</template>

<script lang="ts">
import path from 'path';
import { isExternal } from '@/utils';
import { defineComponent, PropType, reactive } from 'vue';
import ElIconWrapper from '@/components/ElIconWrapper.vue';
import { NavMenuItem } from '@/typings/nav';
import AppLink from './Link.vue';
export default defineComponent({
  name: 'SidebarItem',
  components: { AppLink, ElIconWrapper },
  props: {
    item: {
      type: Object as PropType<NavMenuItem>,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let onlyOneChild: NavMenuItem = reactive({ path: '' });

    const hasOneShowChildren = (children: Array<NavMenuItem>, parent: NavMenuItem) => {
      const showingChildren = children.filter((child) => {
        if (child.hidden) {
          return false;
        } else {
          onlyOneChild = { ...child };
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }
      if (showingChildren.length === 0) {
        onlyOneChild = { ...parent, path: '', noShowChildren: true };
        return true;
      }
      return false;
    };

    const resolvePath = (routePath: string) => {
      // 若是外部链接，则直接返回，否则进行拼接
      if (isExternal(routePath)) {
        return routePath;
      }
      //path.resolve([from ...], to)
      // 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。
      return path.resolve(props.basePath, routePath);
    };

    return { onlyOneChild, hasOneShowChildren, resolvePath };
  }
});
</script>

<style>
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
