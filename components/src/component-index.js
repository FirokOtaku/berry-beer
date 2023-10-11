
import { defineAsyncComponent } from 'vue'

function load(path)
{
    return defineAsyncComponent(() => import(path))
}

export const BbInput = load('./components/BerryBeerInput.vue')
export const BbButton = load('./components/BerryBeerButton.vue')
