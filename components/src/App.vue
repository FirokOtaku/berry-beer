
<style scoped>
</style>

<template>
  <bb-theme color="#447722" class="left-margin" >
    <bb-button @click="checked = !checked">123</bb-button>
    <bb-checkbox margin v-model="checked" />
    <bb-checkbox label="123"></bb-checkbox>
    <bb-checkbox icon="search" icon-selected="calendar_month"></bb-checkbox>
    <bb-select border :options="{ a: 1, b: 2 }" v-model="item" margin />

    <bb-dialog active modal>
      123
    </bb-dialog>

    <bb-page active right>
      123
    </bb-page>

    <bb-snackbar></bb-snackbar>

	  <bb-switch icon v-model="checked">
		  <i>calendar_month</i>
		  <i>search</i>
	  </bb-switch>

	  <bb-radio icon v-model="checked">
		  <i>search</i>
		  <i>map</i>
	  </bb-radio>

  </bb-theme>
</template>

<script setup>
import { ref } from 'vue'

const item = ref(1)
const checked = ref(false)

</script>

