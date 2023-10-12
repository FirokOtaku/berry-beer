<style scoped>

</style>

<template>
<div :style="colorUsed">
  <slot/>
</div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref, watch, onMounted, } from 'vue'
import materialDynamicColors from 'material-dynamic-colors'
const props = defineProps({
  color: { type: [String, File, Blob ], required: true },
  dark: { type: Boolean, default: false },
})

const colors = ref(null)

async function compute(color)
{
  try
  {
    console.log('compute', color)
    let result = await materialDynamicColors(color)
    console.log('result', result)
    colors.value = result
    console.log('colors', colors.value)
  }
  catch (ignored) { }
}
watch(props, async (newColor, oldColor) => await compute(newColor.color))
onMounted(async () => await compute(props.color))

const colorUsed = computed(() => {
  const ret = {}
  for(const [key, value] of Object.entries(colors.value !== null ? colors.value[props.dark ? 'dark' : 'light'] : {}))
  {
    ret['--' + key] = value
  }
  return ret
})

</script>
