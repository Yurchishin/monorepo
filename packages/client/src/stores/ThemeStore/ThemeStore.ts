import types from 'mst-types'
import { flow } from 'mobx-state-tree'
import { Instance } from 'mobx-state-tree/dist/core/type/type'
import { Indents, BorderRadius, MediaQuery, BoxShadow } from '@client/models'
import { createAntdTheme } from './ThemeStore.utils'

const ThemeStore = types.model({
    INDENTS: Indents,
    BORDER_RADIUS: BorderRadius,
    BOX_SHADOWS: BoxShadow,
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

export type TThemeStore = Instance<typeof ThemeStore>

export default ThemeStore
