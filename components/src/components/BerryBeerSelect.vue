<style scoped>

</style>

<template>
  <div class="field" :class="cssClasses">
    <i v-if="prefix">{{ prefix }}</i>

    <select :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :disabled="!!disabled"
            :multiple="!!multiple">
      <slot name="options">
        <option v-for="option in optionItems" :value="option.value">{{ option.name }}</option>
      </slot>
    </select>

    <progress class="circle" v-if="loading"></progress>
    <i v-else-if="suffix">{{ suffix }}</i>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, } from 'vue'
import {combine, Disabled, Loading, Helpers, Invalid, ModelValue, } from './attrs.js'
import { Input, Keyboard, Mouse, } from './events.js'

const props = defineProps({
  ...Disabled,
  ...Loading,
  ...Helpers,
  prefix: { type: String, required: false },
  suffix: { type: String, default: 'arrow_drop_down' },
  ...Invalid,
  ...ModelValue,
  options: { required: true, validator: v => typeof(v) === 'object' || v[Symbol.iterator] },
  /**
   * @deprecated Beer.css 目前并不支持这个属性的显示
   * */
  multiple: { type: Boolean, default: false },
})
const emits = defineEmits([
  ...Input,
  ...Mouse,
  ...Keyboard,
])

const optionItems = computed(() => {
  const items = []
  if(props.options[Symbol.iterator]) for(const { name, value } of props.options)
  {
    items.push({ name, value })
  }
  else if(typeof props.options === 'object')
  {
    for(const [ name, value ] of Object.entries(props.options))
    {
      items.push({ name, value })
    }
  }
  return items
})

const cssClasses = computed(() => combine(props))

</script>
