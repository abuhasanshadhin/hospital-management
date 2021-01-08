import Vue from 'vue'
import Vuex from 'vuex'

import department from './department'
import doctor from './doctor'
import doctorSchedule from './doctor_schedule'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        department,
        doctor,
        doctorSchedule,
    }
})

export default store
