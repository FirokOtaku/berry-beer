<style scoped>

</style>

<template>
<label class="switch" :class="cssClasses">
  <input type="checkbox" :checked="modelValue" @input="$emit('update:modelValue', $event.target.checked)">
  <span>
    <slot>
      <template v-if="label">{{ label }}</template>
      <template v-else>
        <i v-if="icon">{{ icon }}</i>
        <i v-if="iconSelected">{{ iconSelected }}</i>
      </template>
    </slot>
  </span>
</label>
</template>

<script setup>
import { computed, defineProps, defineEmits, } from 'vue'
import { combine, Helpers, ModelValue, } from './attrs.js'
import { Input, } from './events.js'

const props = defineProps({
  ...Helpers,
  ...ModelValue,
  label: { type: String, default: null },
  icon: { type: [String, Boolean], default: null },
  iconSelected: { type: String, default: null },
})

const emits = defineEmits([
  ...Input,
])

const cssClasses = computed(() => combine(props) + (!props.label || props.icon ? ' icon' : ''))

</script>
