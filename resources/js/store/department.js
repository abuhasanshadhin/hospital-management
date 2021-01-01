export default {
    namespaced: true,

    state: () => ({
        departments: [],
        loading: false,
    }),

    getters: {
        departments: state => state.departments,
        loading: state => state.loading,
    },

    mutations: {
        populateDepartments: (state, payload) => state.departments = payload,
        changeLoadingStatus: (state, status) => state.loading = status,
    },

    actions: {
        async getDepartments(context, payload) {
            context.commit('changeLoadingStatus', true)
            await axios.post(`get_departments`, payload).then(res => {
                context.commit('populateDepartments', res.data.departments)
            }).catch(e => snackbar.error(e.response.statusText))
            context.commit('changeLoadingStatus', false)
        },

        async processDepartment(context, payload) {
            let isSuccess = false
            await axios.post(payload.url, payload.data).then(res => {
                isSuccess = true
                context.dispatch('getDepartments')
                snackbar.success(res.data.message)
            }).catch(e => snackbar.error(e.response.data.message))
            return isSuccess
        },
    }
}
