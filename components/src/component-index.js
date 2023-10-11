
import { defineAsyncComponent } from 'vue'

function load(path)
{
    return () => import(path)
}

export const BbInput = defineAsyncComponent(load('./components/BerryBeerInput.vue'))

