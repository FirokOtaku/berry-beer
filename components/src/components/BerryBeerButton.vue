<style scoped>

</style>

<template>
<button :disabled="disabled"
        :class="cssClasses"
        @click="$emit('click', $event)">
  <progress class="circle" v-if="loading"></progress>
  <slot v-else>
    <slot name="prefix">
      <i v-if="prefix">{{ prefix }}</i>
    </slot>

    <span v-if="text">{{ text }}</span>

    <slot name="suffix">
      <i v-if=" suffix">{{ suffix }}</i>
    </slot>
  </slot>

</button>
</template>

<script setup>
import { defineProps, defineEmits, computed, } from 'vue'
import { combine, Disabled, Loading, Round, Size, Elevate, Direction, Colors, } from './attrs.js'
import { Mouse, } from './events.js'

const props = defineProps({
  ...Disabled,
  ...Loading,
  ...Round,
  ...Size,
  ...Elevate,
  ...Direction,
  ...Colors,
  prefix: { type: String, default: null },
  suffix: { type: String, default: null },

})
const emits = defineEmits([
    ...Mouse,
])

const cssClasses = computed(() => combine(props))

</script>
