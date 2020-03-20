import types from 'mst-types'
import { breakpointFactory } from './MediaQuery.utils'
import { MEDIA_QUERY_COLUMNS, MEDIA_QUERY_GUTTER } from './MediaQuery.constants'

const MediaQuery = types.model({
    unit: types.styleUnit,
    size: types.positiveInt,
})
    .views(self => ({
        get breakpointUnitFactory() {
            return breakpointFactory(self.unit)
        },
    }))
    .views(self => ({
        get COLUMNS() {
            return MEDIA_QUERY_COLUMNS
        },
        get BREAKPOINTS() {
            return self.breakpointUnitFactory(self.size)
        },
        get GUTTER() {
            return MEDIA_QUERY_GUTTER
        },
    }))

export default MediaQuery
