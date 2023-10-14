<style scoped>

</style>

<template>
<div>
  snackbar base
  <div>
    <bb-button>serve top</bb-button>
  </div>
</div>
<div class="snackbar primary top active">
  <slot></slot>
</div>
</template>

<script setup>
import { ref, computed, defineProps, defineExpose, defineEmits, } from 'vue'

const bufferTop = ref([]), bufferBottom = ref([])

function serve({
    title,
    prefix,
    suffix,
    position,
    timeout,

})
{
  ;
}


</script>
