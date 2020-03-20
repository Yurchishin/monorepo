import types from 'mst-types'
import { flow } from 'mobx-state-tree'
import { Indents, BorderRadius, MediaQuery } from '@client/models'
import { createAntdTheme } from './ThemeStore.utils'

const ThemeStore = types.model({
    INDENTS: Indents,
    BORDER_RADIUS: BorderRadius,
    MEDIA_QUERY: MediaQuery,
})
    .views(self => ({
        get antdTheme() {
            return createAntdTheme(self)
        },
    }))
    .actions(self => {
        const updateAntdTheme = flow(function* updateAntdTheme() {
            try {
//                yield window.less.modifyVars(self.antdTheme)
            } catch (e) {
                console.log(e)
            }
        })

        return {
            updateAntdTheme,
        }
    })
    .actions(self => {
        const afterCreate = () => {
            self.updateAntdTheme()
        }

        return {
            afterCreate,
        }
    })

export default ThemeStore
