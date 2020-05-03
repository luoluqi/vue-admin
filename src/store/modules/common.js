import router from '@/router'
const common = {
    namespaced: true,
    state: {
        collapse: false
    },
    getters: {
        
    },
    mutations: { 
        setCollapse (state, val) {
            state.collapse = val;
        }
    },
    actions: {

    }
}
export default common
