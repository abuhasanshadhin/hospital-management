export default {
    namespaced: true,

    state: () => ({
        patients: [],
        loading: false,
    }),

    getters: {
        patients: state => state.patients,
        loading: state => state.loading,
    },

    mutations: {
        populatePatients: (state, payload) => state.patients = payload,
        changeLoadingStatus: (state, status) => state.loading = status,
    },

    actions: {
        async getPatients(context, payload) {
            context.commit('changeLoadingStatus', true)
            await axios.post(`get_patients`, payload).then(res => {
                context.commit('populatePatients', res.data.patients)
            }).catch(e => snackbar.error(e.response.statusText))
            context.commit('changeLoadingStatus', false)
        },

        async getPatient(context, id) {
            let patient = null
            await axios.get(`get_patient/${id}`)
                .then(res => patient = res.data.patient)
                .catch(e => snackbar.error(e.response.statusText))
            return patient
        },

        async processPatient(context, payload) {
            let isSuccess = false
            await axios.post(payload.url, payload.data).then(res => {
                isSuccess = true
                context.dispatch('getPatients')
                snackbar.success(res.data.message)
            }).catch(e => snackbar.error(e.response.data.message))
            return isSuccess
        },
    }
}
