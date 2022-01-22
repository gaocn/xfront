<template>
  <!-- eslint-disable vue/require-component-is-->
  <component v-bind:is="name">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Link',
  props: {
    to: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'router-link'
    }
  }
});
</script>

<style></style>
