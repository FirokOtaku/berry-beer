
import { defineAsyncComponent } from 'vue'

function load(path)
{
    return defineAsyncComponent(() => import(/* @vite-ignore */ path))
}

export const BbInput = load('./components/BerryBeerInput.vue')
export const BbButton = load('./components/BerryBeerButton.vue')
export const BbSelect = load('./components/BerryBeerSelect.vue')
export const BbCheckbox = load('./components/BerryBeerCheckbox.vue')
export const BbChip = load('./components/BerryBeerChip.vue')
export const BbDialog = load('./components/BerryBeerDialog.vue')
export const BbPage = load('./components/BerryBeerPage.vue')

export const BbTheme = load('./components/BerryBeerTheme.vue')
