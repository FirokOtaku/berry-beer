<style scoped>

</style>

<template>
<div class="overlay"
     :class="active ? 'active' : ''"
     v-if="overlay"
     @click="$emit('close')"></div>
<dialog :class="cssClasses" :data-ui="dataUi">
  <slot />
</dialog>
</template>

<script setup>
import { computed, defineProps, defineEmits, } from 'vue'
import { combine, Helpers, } from './attrs.js'

const props = defineProps({
  ...Helpers,
  active: { type: Boolean, default: false },
  modal: { type: Boolean, default: false },
  fullscreen: { type: Boolean, default: false },
  dataUi: { type: String, default: null },
  overlay: { type: Boolean, default: false },
})
const emits = defineEmits([
    'close',
])

const cssClasses = computed(() => combine(props) + (props.active ? ' active' : '') + (props.modal ? ' modal' : '') + (props.fullscreen ? ' max' : ''))
</script>
