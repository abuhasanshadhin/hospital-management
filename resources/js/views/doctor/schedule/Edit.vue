<template>
  <div class="d-inline">
    <button @click="isModalShow = true" class="btn btn-info btn-sm">
      <i class="fa fa-edit"></i>
    </button>

    <transition name="scale">
      <div class="custom-modal" v-if="isModalShow">
        <div class="custom-modal-body col-md-4">
          <div class="custom-modal-header">
            <div class="clearfix">
              <div class="custom-modal-title">Edit Schedule</div>
              <div @click="isModalShow = false" class="custom-close">
                <i class="fa fa-times"></i>
              </div>
            </div>
          </div>

          <div class="custom-modal-content text-left">
            <div class="form-group">
              <label for="">Available Day</label>
              <v-select
                :options="['Sunday', 'Monday', 'Tuesday', 'Wednesday']"
              ></v-select>
            </div>

            <div class="form-group">
              <label for="">Available Time</label>
              <div class="row">
                <div class="col">
                  <vue-timepicker
                    v-model="availableTimeFrom"
                    format="hh:mm A"
                    :minute-interval="5"
                    close-on-complete
                  ></vue-timepicker>
                </div>
                <div class="col">
                  <vue-timepicker
                    format="hh:mm A"
                    :minute-interval="5"
                    close-on-complete
                  ></vue-timepicker>
                </div>
              </div>
            </div>
          </div>

          <div class="custom-modal-footer">
            <button class="btn btn-secondary">Reset</button>
            <button class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
  components: {
    VueTimepicker,
  },
  data() {
    return {
      isModalShow: false,
      availableTimeFrom: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>