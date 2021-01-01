export default {
    namespaced: true,

    state: () => ({
        doctors: [],
        loading: false,
    }),

    getters: {
        doctors: state => state.doctors,
        loading: state => state.loading,
    },

    mutations: {
        populateDoctors: (state, payload) => state.doctors = payload,
        changeLoadingStatus: (state, status) => state.loading = status,
    },

    actions: {
        async getDoctors(context, payload) {
            context.commit('changeLoadingStatus', true)
            await axios.post(`get_doctors`, payload).then(res => {
                context.commit('populateDoctors', res.data.doctors)
            }).catch(e => snackbar.error(e.response.statusText))
            context.commit('changeLoadingStatus', false)
        },

        async getDoctor(context, id) {
            let doctor = null
            await axios.get(`get_doctor/${id}`)
                .then(res => doctor = res.data.doctor)
                .catch(e => snackbar.error(e.response.statusText))
            return doctor
        },

        async processDoctor(context, payload) {
            let isSuccess = false
            await axios.post(payload.url, payload.data).then(res => {
                isSuccess = true
                context.dispatch('getDoctors')
                snackbar.success(res.data.message)
            }).catch(e => snackbar.error(e.response.data.message))
            return isSuccess
        },
    }
}
