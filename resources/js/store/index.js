import Vue from 'vue'
import Vuex from 'vuex'

import department from './department'
import doctor from './doctor'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        department,
        doctor,
    }
})

export default store
