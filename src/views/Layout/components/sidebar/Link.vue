<template>
  <!-- 
    eslint-disable vue/require-component-is
    !!不起作用
  -->
  <component v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal } from '@/utils';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Link',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  setup() {
    const linkProps = (url: string) => {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        };
      }
      return {
        is: 'router-link',
        to: url
      };
    };
    return { linkProps };
  }
});
</script>

<style></style>
