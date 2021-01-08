export default {
    namespaced: true,

    state: () => ({
        days: [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
        ],
        schedules: [],
        loading: false,
    }),

    getters: {
        days: state => state.days,
        schedules: state => state.schedules,
        loading: state => state.loading,
    },

    mutations: {
        populateSchedules: (state, payload) => state.schedules = payload,
        changeLoadingStatus: (state, status) => state.loading = status,
    },

    actions: {
        async getSchedules(context, payload) {
            context.commit('changeLoadingStatus', true)
            await axios.post(`get_doctor_schedules`, payload).then(res => {
                context.commit('populateSchedules', res.data.doctor_schedules)
            }).catch(e => snackbar.error(e.response.statusText))
            context.commit('changeLoadingStatus', false)
        },

        async processSchedule(context, payload) {
            let isSuccess = false
            await axios.post(payload.url, payload.data).then(res => {
                isSuccess = true
                context.dispatch('getSchedules', { doctor_id: res.data.doctor_id })
                snackbar.success(res.data.message)
            }).catch(e => snackbar.error(e.response.data.message))
            return isSuccess
        },
    }
}
