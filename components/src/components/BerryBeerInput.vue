<style scoped>

</style>

<template>
  <div class="field" :class="cssClasses">
    <i v-if="prefix">{{ prefix }}</i>

    <input :type="type"
           :value="modelValue"
           :disabled="!!disabled"
           :readonly="!!readonly"
           :placeholder="placeholder != null ? placeholder : undefined"
           @input="$emit('update:modelValue', $event.target.value)"
           @change="$emit('change', $event)"
           @focus="$emit('focus', $event)"
           @keydown="$emit('keydown', $event)"
           @keyup="$emit('keyup', $event)"
           @keypress="$emit('keypress', $event)"
    >
    <input type="text" v-if="type === 'color'"/>

    <label v-if="label">{{ label }}</label>
    <span v-if="helper" class="helper">{{ helper }}</span>

    <progress class="circle" v-if="loading"></progress>
    <i v-else-if="suffix">{{ suffix }}</i>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, } from 'vue'
import { combine, Disabled, Loading, Helpers, Affix, Invalid, ModelValue, Readonly, } from './attrs.js'
import {Input, Keyboard, Mouse} from "./events.js";
import { BeerInputType } from './constants.js'

const props = defineProps({
  ...Affix,
  ...Loading,
  ...Disabled,
  ...Helpers,
  ...Invalid,
  ...Readonly,
  label: { type: String, default: null },
  helper: { type: String, default: null },
  placeholder: { type: String, default: null },
  type: { type: String, default: 'text', validator: v => BeerInputType.includes(v) },

  ...ModelValue,
})
const emits = defineEmits([
  'focus',
  ...Input,
  ...Mouse,
  ...Keyboard,
])
const cssClasses = computed(() => {
  let ret = combine(props)
  ret += props.label ? ' label' : ''
  ret += props.helper ? ' helper' : ''
  return ret
})

</script>
