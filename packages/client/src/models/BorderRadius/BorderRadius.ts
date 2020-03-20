import types from 'mst-types'
import {
    simpleParser,
    roundParser,
    borderRadiusFactory,
    borderRadiusSimpleParser,
} from './BorderRadius.utils'

const BorderRadius = types.model('BorderRadius', {
    unit: types.styleUnit,
    size: types.positiveInt,
})
    .views(self => ({
        get borderRadiusUnitFactory() {
            return borderRadiusFactory(self.unit)
        },
    }))
    .views(self => ({
        get borderRadiusSimpleFactory() {
            return self.borderRadiusUnitFactory(borderRadiusSimpleParser)
        },
    }))
    .views(self => ({
        get SIMPLE() {
            return self.borderRadiusSimpleFactory(self.size)
        },
        get ZERO() {
            return simpleParser(self.unit, self.size)
        },
        get ROUND() {
            return roundParser(self.unit, self.size)
        },
    }))

export default BorderRadius
