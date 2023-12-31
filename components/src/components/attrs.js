
/**
 * 驼峰转横杠
 * @param {string} raw
 * @return {string}
 * */
function convert2line(raw)
{
    return raw.replace(/([A-Z])/g, "-$1").toLowerCase()
}
/**
 * 横杠转驼峰
 * @param {string} raw
 * @return {string}
 * */
function convert2hump(raw)
{
    return raw.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
}

/**
 * @param {string[]} keys
 * @param {BooleanConstructor | StringConstructor | NumberConstructor} cons
 * @return {Map<string, BooleanConstructor | StringConstructor | NumberConstructor>}
 * */
function pack(keys, cons = Boolean)
{
    const ret = {}
    for(const key of keys)
    {
        ret[convert2hump(key)] = cons
    }
    return ret
}

const disabled = [
    'disabled',
]
export const Disabled = pack(disabled)

const readonly = [
    'readonly',
]
export const Readonly = pack(readonly)

const loading = [
    'loading',
]
export const Loading = pack(loading)

const invalid = [
    'invalid',
]
export const Invalid = pack(invalid)

const helpers = [

    // alignments

    'middle-align',
    'bottom-align',
    'top-align',
    'left-align',
    'right-align',
    'center-align',

    // blurs

    'blur',
    'small-blur',
    'medium-blur',
    'large-blur',

    // colors

    'primary',
    'primary-container',
    'primary-border',
    'primary-text',

    'secondary',
    'secondary-container',
    'secondary-border',
    'secondary-text',

    'tertiary',
    'tertiary-container',
    'tertiary-border',
    'tertiary-text',

    'error',
    'error-container',
    'error-border',
    'error-text',
    'surface-dim',

    'surface-dim',
    'surface-bright',
    'surface-variant',
    'inverse-surface',
    'surface-container-lowest',
    'surface-container-low',
    'surface-container',
    'surface-container-high',
    'surface-container-highest',
    'surface',
    'background',

    'inverse-primary',
    'inverse-primary-border',
    'inverse-primary-text',

    'red1',
    'red2',
    'red3',
    'red4',
    'red5',
    'red6',
    'red',
    'red7',
    'red8',
    'red9',
    'red10',
    'red-border',
    'red-text',

    'pink1',
    'pink2',
    'pink3',
    'pink4',
    'pink5',
    'pink6',
    'pink',
    'pink7',
    'pink8',
    'pink9',
    'pink10',
    'pink-border',
    'pink-text',

    'purple1',
    'purple2',
    'purple3',
    'purple4',
    'purple5',
    'purple6',
    'purple',
    'purple7',
    'purple8',
    'purple9',
    'purple10',
    'purple-border',
    'purple-text',

    'deep-purple1',
    'deep-purple2',
    'deep-purple3',
    'deep-purple4',
    'deep-purple5',
    'deep-purple6',
    'deep-purple',
    'deep-purple7',
    'deep-purple8',
    'deep-purple9',
    'deep-purple10',
    'deep-purple-border',
    'deep-purple-text',

    'indigo1',
    'indigo2',
    'indigo3',
    'indigo4',
    'indigo5',
    'indigo6',
    'indigo',
    'indigo7',
    'indigo8',
    'indigo9',
    'indigo10',
    'indigo-border',
    'indigo-text',

    'blue1',
    'blue2',
    'blue3',
    'blue4',
    'blue5',
    'blue6',
    'blue',
    'blue7',
    'blue8',
    'blue9',
    'blue10',
    'blue-border',
    'blue-text',

    'light-blue1',
    'light-blue2',
    'light-blue3',
    'light-blue4',
    'light-blue5',
    'light-blue6',
    'light-blue',
    'light-blue7',
    'light-blue8',
    'light-blue9',
    'light-blue10',
    'light-blue-border',
    'light-blue-text',

    'cyan1',
    'cyan2',
    'cyan3',
    'cyan4',
    'cyan5',
    'cyan6',
    'cyan',
    'cyan7',
    'cyan8',
    'cyan9',
    'cyan10',
    'cyan-border',
    'cyan-text',

    'teal1',
    'teal2',
    'teal3',
    'teal4',
    'teal5',
    'teal6',
    'teal',
    'teal7',
    'teal8',
    'teal9',
    'teal10',
    'teal-border',
    'teal-text',

    'green1',
    'green2',
    'green3',
    'green4',
    'green5',
    'green6',
    'green',
    'green7',
    'green8',
    'green9',
    'green10',
    'green-border',
    'green-text',

    'light-green1',
    'light-green2',
    'light-green3',
    'light-green4',
    'light-green5',
    'light-green6',
    'light-green',
    'light-green7',
    'light-green8',
    'light-green9',
    'light-green10',
    'light-green-border',
    'light-green-text',

    'lime1',
    'lime2',
    'lime3',
    'lime4',
    'lime5',
    'lime6',
    'lime',
    'lime7',
    'lime8',
    'lime9',
    'lime10',
    'lime-border',
    'lime-text',

    'yellow1',
    'yellow2',
    'yellow3',
    'yellow4',
    'yellow5',
    'yellow6',
    'yellow',
    'yellow7',
    'yellow8',
    'yellow9',
    'yellow10',
    'yellow-border',
    'yellow-text',

    'amber1',
    'amber2',
    'amber3',
    'amber4',
    'amber5',
    'amber6',
    'amber',
    'amber7',
    'amber8',
    'amber9',
    'amber10',
    'amber-border',
    'amber-text',

    'orange1',
    'orange2',
    'orange3',
    'orange4',
    'orange5',
    'orange6',
    'orange',
    'orange7',
    'orange8',
    'orange9',
    'orange10',
    'orange-border',
    'orange-text',

    'deep-orange1',
    'deep-orange2',
    'deep-orange3',
    'deep-orange4',
    'deep-orange5',
    'deep-orange6',
    'deep-orange',
    'deep-orange7',
    'deep-orange8',
    'deep-orange9',
    'deep-orange10',
    'deep-orange-border',
    'deep-orange-text',

    'brown1',
    'brown2',
    'brown3',
    'brown4',
    'brown5',
    'brown6',
    'brown',
    'brown7',
    'brown8',
    'brown9',
    'brown10',
    'brown-border',
    'brown-text',

    'grey1',
    'grey2',
    'grey3',
    'grey4',
    'grey5',
    'grey6',
    'grey',
    'grey7',
    'grey8',
    'grey9',
    'grey10',
    'grey-border',
    'grey-text',

    'blue-grey1',
    'blue-grey2',
    'blue-grey3',
    'blue-grey4',
    'blue-grey5',
    'blue-grey6',
    'blue-grey',
    'blue-grey7',
    'blue-grey8',
    'blue-grey9',
    'blue-grey10',
    'blue-grey-border',
    'blue-grey-text',

    'black',
    'black-border',
    'black-text',

    'white',
    'white-border',
    'white-text',

    'transparent',
    'transparent-border',
    'transparent-text',

    // dividers

    'divider',
    'small-divider',
    'medium-divider',
    'large-divider',

    // elevates

    'no-elevate',
    'elevate',
    'small-elevate',
    'medium-elevate',
    'large-elevate',

    // forms

    'no-round',
    'small-round',
    'medium-round',
    'round',
    'large-round',

    'top-round',
    'left-round',
    'right-round',
    'bottom-round',

    'circle',
    'square',

    'border',
    'no-border',

    'tiny',
    'small',
    'medium',
    'large',
    'extra',

    // margins

    'no-margin',
    'tiny-margin',
    'small-margin',
    'medium-margin',
    'margin',
    'large-margin',
    'left-margin',
    'right-margin',
    'top-margin',
    'bottom-margin',
    'horizontal-margin',
    'vertical-margin',
    'auto-margin',

    // opacities

    'no-opacity',
    'opacity',
    'small-opacity',
    'medium-opacity',
    'large-opacity',

    // paddings

    'no-padding',
    'tiny-padding',
    'small-padding',
    'medium-padding',
    'padding',
    'large-padding',
    'left-padding',
    'right-padding',
    'top-padding',
    'bottom-padding',
    'horizontal-padding',
    'vertical-padding',
    'auto-padding',

    // positions

    'front',
    'back',
    'left',
    'right',
    'top',
    'bottom',
    'center',
    'middle',

    // responsive

    'responsive',

    // scrolls

    'scroll',
    'no-scroll',

    // shadows

    'shadow',
    'left-shadow',
    'right-shadow',
    'bottom-shadow',
    'top-shadow',

    // sizes

    'small-width',
    'medium-width',
    'large-width',
    'small-height',
    'medium-height',
    'large-height',
    'wrap',
    'no-wrap',

    // spaces

    'tiny-space',
    'space',
    'medium-space',
    'large-space',

    // typography

    'link',
    'inverse-link',
    'truncate',
    'small-text',
    'medium-text',
    'large-text',
    'upper',
    'lower',
    'capitalize',
    'bold',
    'overline',
    'underline',
    'italic',

    'no-line',
    'tiny-line',
    'small-line',
    'medium-line',
    'large-line',
    'extra-line',

    // waves

    'wave',
    'no-wave',
]
export const Helpers = pack(helpers)

const affix = [
    'prefix',
    'suffix',
]
export const Affix = pack(affix, String)

export const ModelValue = {
    modelValue: { required: false },
}

const Keys = [
    ...Object.keys(Invalid),
    ...Object.keys(Helpers),
    ...Object.keys(Affix),
]

export function combine(props = {})
{
    const ret = []
    for(const [key, value] of Object.entries(props))
    {
        if(value && Keys.includes(key))
        {
            ret.push(convert2line(key))
        }
    }
    return ret.join(' ')
    // return Object.entries(props)
    //     .filter(([key, value]) => value && Keys.includes(key))
    //     .map(([key, value]) => convert2line(key))
    //     .join(' ')
}
