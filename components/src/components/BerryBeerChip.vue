<style scoped>

</style>

<template>
<a class="chip" :class="cssClasses">
  <slot />
</a>
</template>

<script setup>
import { computed, defineProps, } from 'vue'
import { combine, Helpers, } from './attrs.js'

const props = defineProps({
  ...Helpers,
})

const cssClasses = computed(() => combine(props))

</script>
