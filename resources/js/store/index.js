import Vue from 'vue'
import Vuex from 'vuex'

import department from './department'
import doctor from './doctor'
import doctorSchedule from './doctor_schedule'
import patient from './patient'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        department,
        doctor,
        doctorSchedule,
        patient,
    }
})

export default store
