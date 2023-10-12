<style scoped>

</style>

<template>
<div class="page" :class="cssClasses">
  <slot />
</div>
</template>

<script setup>
import { computed, defineProps, } from 'vue'
import { combine, Helpers, } from './attrs.js'

const props = defineProps({
  ...Helpers,
  active: { type: Boolean, default: false },
})

const cssClasses = computed(() => combine(props) + (props.active ? ' active' : ''))
</script>
