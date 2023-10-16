
import 'beercss'
import 'material-dynamic-colors'

import BeeryBeerInput from './components/BerryBeerInput.vue'
import BeeryBeerButton from './components/BerryBeerButton.vue'
import BeeryBeerSelect from './components/BerryBeerSelect.vue'
import BeeryBeerCheckbox from './components/BerryBeerCheckbox.vue'
import BeeryBeerChip from './components/BerryBeerChip.vue'
import BeeryBeerDialog from './components/BerryBeerDialog.vue'
import BeeryBeerPage from './components/BerryBeerPage.vue'
import BeeryBeerSnackbar from './components/BerryBeerSnackbar.vue'
import BeeryBeerSwitch from './components/BerryBeerSwitch.vue'
import BeeryBeerRadio from './components/BerryBeerRadio.vue'
import BeeryBeerTheme from './components/BerryBeerTheme.vue'

export const BbInput = BeeryBeerInput
export const BbButton = BeeryBeerButton
export const BbSelect = BeeryBeerSelect
export const BbCheckbox = BeeryBeerCheckbox
export const BbChip = BeeryBeerChip
export const BbDialog = BeeryBeerDialog
export const BbPage = BeeryBeerPage
export const BbSnackbar = BeeryBeerSnackbar
export const BbSwitch = BeeryBeerSwitch
export const BbRadio = BeeryBeerRadio

export const BbTheme = BeeryBeerTheme

/**
 * @param {import('vue').App} app
 * */
export function cheers(app)
{
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
    console.log('cheers!')
}
