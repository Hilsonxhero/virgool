export const namespaced = true
export const state = () => ({
    user: window.user,
    isLoggedIn: !!window.user
})
export const mutations = {
    LOGOUT(state) {
        state.isLoggedIn = false
        state.user = null
    }
    ,

    LOGIN(state, payload) {
        state.isLoggedIn = true
        state.user = {
            name: payload.name,
            email: payload.email
        }
    }
    ,

    REGISTER(state, payload) {
        state.isLoggedIn = true
        state.user = {
            name: payload.name,
            email: payload.email
        }
    }
}
export const actions = {
    logout({commit}) {
        axios.post('/logout')
            .then(() => {
                commit('LOGOUT')
            })
    }
    ,
    login({commit}, payload) {
        return axios.post('/login', payload)
            .then(({data}) => {
                commit('LOGIN', data.data)
            })
    }
    ,
    register({commit}, payload) {
        return axios.post('/register', payload)
            .then(({data}) => {
                commit('REGISTER', data.data)
            })
    }
}


