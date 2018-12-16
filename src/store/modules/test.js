import * as MUTATION_TYPES from '../mutation_types'
const state = {
    HelloWorld: ''
}

const mutations = {
    [MUTATION_TYPES.SET_HELLO_WORLD](state, {data}) {
        state.HelloWorld = `${data.name}, ${data.value}`
    }
}

const actions = {
    async getHelloWorld({commit, dispatch}) {
        let data = await this._vm.$api.test.sayHelloWorld()
        commit({
            type: 'SET_HELLO_WORLD', data
        })
    }
}

export default {
    state, mutations, actions
}
