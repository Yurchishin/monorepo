import types from 'mst-types'
import {
    simpleParser,
    indentsFactory,
    indentSimpleParser,
    indentSquishParser,
    indentStretchParser,
} from './Indents.utils'
import { INDENT_INITIAL_VALUE } from './Indents.constants'

const Indents = types.model('Indents', {
    unit: types.styleUnit,
    size: types.positiveInt,
})
    .views(self => ({
        get indentsUnitFactory() {
            return indentsFactory(self.unit)
        },
    }))
    .views(self => ({
        get indentSimpleFactory() {
            return self.indentsUnitFactory(indentSimpleParser)
        },
        get indentSquishFactory() {
            return self.indentsUnitFactory(indentSquishParser)
        },
        get indentStretchFactory() {
            return self.indentsUnitFactory(indentStretchParser)
        },
    }))
    .views(self => ({
        get SIMPLE() {
            return self.indentSimpleFactory(self.size)
        },
        get SQUISH() {
            return self.indentSquishFactory(self.size)
        },
        get STRETCH() {
            return self.indentStretchFactory(self.size)
        },
        get ZERO() {
            return simpleParser(self.unit, self.size)
        },
    }))

export default Indents
