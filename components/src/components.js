
import { defineAsyncComponent, } from 'vue'

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
export const BbSnackbar = load('./components/BerryBeerSnackbar.vue')
export const BbSwitch = load('./components/BerryBeerSwitch.vue')
export const BbRadio = load('./components/BerryBeerRadio.vue')

export const BbTheme = load('./components/BerryBeerTheme.vue')

/**
 * @param {import('vue').App} app
 * */
export function cheers(app)
{
    console.log('cheers!')
    for(const [name, component] of Object.entries({
        BbInput,
        BbButton,
        BbSelect,
        BbCheckbox,
        BbChip,
        BbDialog,
        BbPage,
        BbSnackbar,
        BbSwitch,
        BbRadio,

        BbTheme,
    })) app.component(name, component)
}
