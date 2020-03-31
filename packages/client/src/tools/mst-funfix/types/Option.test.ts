/* tslint:disable */
import { Option as FOption, Some, None } from '@chat/ramda'
import { types } from 'mobx-state-tree'
import Option from './Option'

describe('Option', () => {
    it('number', () => {
        const TestStore = types.model({
            x: Option(types.number),
        })

        let store;

        store = TestStore.create({ x: Some(0) })
        expect(store.x.orUndefined()).toBe(0)

        store = TestStore.create({ x: None })
        expect(store.x.orUndefined()).toBeUndefined()
    })

    it('array', () => {
        const TestStore = types.model({
            x: Option(types.array(types.string)),
        })

        let store;

        store = TestStore.create({ x: None })
        expect(store.x.orUndefined()).toBeUndefined()

        store = TestStore.create({ x: Some(['0']) })
        expect(store.x.orUndefined()).toEqual(['0'])
    })
})
