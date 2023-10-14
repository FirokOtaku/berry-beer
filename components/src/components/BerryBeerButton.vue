<style scoped>

</style>

<template>
<button :disabled="disabled"
        :class="cssClasses"
        @click="$emit('click', $event)">
  <slot>
    <progress class="circle" v-if="loading"></progress>
    <template v-else>
      <i v-if="prefix">{{ prefix }}</i>
      <span v-if="text">{{ text }}</span>
      <i v-if=" suffix">{{ suffix }}</i>
    </template>
  </slot>
</button>
</template>

<script setup>
import { defineProps, defineEmits, computed, } from 'vue'
import { combine, Disabled, Loading, Helpers, Affix, } from './attrs.js'
import { Mouse, } from './events.js'

const props = defineProps({
  ...Disabled,
  ...Loading,
  ...Helpers,
  ...Affix,
  extend: { type: Boolean, default: false },
})
const emits = defineEmits([
    ...Mouse,
])

const cssClasses = computed(() => combine(props) + (props.extend ? ' extend' : ''))

</script>
