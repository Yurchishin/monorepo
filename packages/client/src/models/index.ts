export * from './BorderRadius'
export * from './BoxShadows'
export * from './Indents'
export * from './MediaQuery'


const EERIE_BLACK = '#210F21' // 'rgba(28, 13, 28, 1)'
const DARK_SIENNA = '#430929' // 'rgba(61, 9, 37, 1)'
const SEA_BLUE = '#005A88' // 'rgba(0, 90, 136, 1)'
const CARMINE_PINK = '#EE4540' // 'rgba(238, 69, 64, 1)'
const SUNGLOW = '#FFD141' // 'rgba(255, 209, 65, 1)'

//function LightenDarkenColor(col, amt) {
//
//    let usePound = false
//
//    if (col[0] == '#') {
//        col = col.slice(1)
//        usePound = true
//    }
//
//    let num = parseInt(col,16)
//
//    let r = (num >> 16) + amt
//
//    if (r > 255) r = 255
//    else if  (r < 0) r = 0
//
//    let b = ((num >> 8) & 0x00FF) + amt
//
//    if (b > 255) b = 255
//    else if  (b < 0) b = 0
//
//    let g = (num & 0x0000FF) + amt
//
//    if (g > 255) g = 255
//    else if (g < 0) g = 0
//
//    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
//
//}
