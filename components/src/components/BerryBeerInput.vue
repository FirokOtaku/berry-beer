<style scoped>

</style>

<template>
  <div :class="cssClasses">
    <slot name="prefix">
      <i v-if="prefix">{{ prefix }}</i>
    </slot>

    <input :type="type"
           :value="modelValue"
           :disabled="disabled"
           :readonly="readonly"
           :placeholder="placeholder != null ? placeholder : undefined"
           @input="$emit('update:modelValue', $event.target.value)"
           @change="$emit('change', $event)"
           @focus="$emit('focus', $event)"
           @keydown="$emit('keydown', $event)"
           @keyup="$emit('keyup', $event)"
           @keypress="$emit('keypress', $event)"
    >

    <label v-if="label">{{ label }}</label>
    <span v-if="helper" class="helper">{{ helper }}</span>

    <slot name="suffix">
      <i v-if="!loading && suffix">{{ suffix }}</i>
      <progress class="circle" v-else-if="loading"></progress>
    </slot>

    <slot name="tooltip" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, } from 'vue'
import { BeerInputType, BeerSize, } from './consts.js'

const props = defineProps({
  border: { type: Boolean, default: false },
  round: { type: Boolean, default: false },
  fill: { type: Boolean, default: false },
  label: { type: String, default: null },
  helper: { type: String, default: null },
  placeholder: { type: String, default: null },
  invalid: { type: Boolean, default: false },
  prefix: { type: String, default: null },
  suffix: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },

  size: { type: String, default: '', validator: (v) => BeerSize.includes(v) },
  type: { type: String, default: 'text', validator: (v) => BeerInputType.includes(v) },

  modelValue: { type: Object, required: false },
})
const emits = defineEmits([
  'update:modelValue',
  'change',
  'focus',
  'keydown',
  'keyup',
  'keypress',
])

const cssClasses = computed(() => {
  let ret = 'field'
  if(props.label) ret += ' label'
  if(props.helper) ret += ' helper'
  if(props.fill) ret += ' fill'
  if(props.border) ret += ' border'
  if(props.round) ret += ' round'
  if(props.invalid) ret += ' invalid'
  if(props.prefix) ret += ' prefix'
  if(props.suffix || props.loading) ret += ' suffix'

  ret += props.size

  return ret.trim()
})

</script>
