<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div class="clearfix">
          <div class="float-left">
            <h4 class="m-0 font-weight-bold text-primary">
              Add New Appointment
            </h4>
          </div>
          <div class="float-right">
            <router-link to="/appointment" class="btn btn-sm btn-dark">
              <i class="fa fa-arrow-left"></i> Back
            </router-link>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="form-group row">
              <label for="" class="col-md-3">Patient</label>
              <div class="col-md-9">
                <v-select
                  :options="['P0001 - Rakib Islam - 01345678901']"
                ></v-select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Department</label>
              <div class="col-md-9">
                <v-select
                  :options="['Pathology', 'Gynocology', 'Medicine']"
                ></v-select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Doctor</label>
              <div class="col-md-9">
                <v-select
                  :options="[
                    'Dr. Abul Fazal',
                    'Dr. Irfan Habib',
                    'Dr. Nasir Uddin',
                  ]"
                ></v-select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Apt. Date</label>
              <div class="col-md-9">
                <date-picker v-model="date"></date-picker>
              </div>
            </div>

            <div class="row">
              <label for="" class="col-md-3">Serial No</label>
              <div class="col-md-9">
                <button
                  v-for="i in 20"
                  :key="i"
                  type="button"
                  class="btn btn-sm mr-1 mb-1"
                  @click="aptSerialNo = i"
                  :class="aptSerialNo == i ? 'btn-danger' : 'btn-success'"
                  :disabled="existSerialsNumbers.find((sl) => sl == i)"
                >
                  {{ i < 10 ? "0" + i : i }}
                </button>
              </div>
            </div>

            <div class="form-group row mt-2">
              <label for="" class="col-md-3">Problem</label>
              <div class="col-md-9">
                <textarea
                  name=""
                  id=""
                  rows="2"
                  class="form-control"
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Status</label>
              <div class="col-md-9">
                <div class="custom-control custom-radio d-inline-block mr-3">
                  <input
                    type="radio"
                    value="1"
                    id="cr1"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="cr1">Active</label>
                </div>
                <div class="custom-control custom-radio d-inline-block">
                  <input
                    type="radio"
                    value="0"
                    id="cr2"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="cr2">Inactive</label>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-md-9 offset-md-3">
                <button class="btn btn-primary c-btn">
                  <i class="fa fa-save"></i> Save
                </button>
                <button class="btn btn-dark c-btn">
                  <i class="fa fa-undo"></i> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date("2020-10-31"),
      aptSerialNo: null,
      existSerialsNumbers: ["01", "05", "20", "03", "05"],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.btn-success.disabled,
.btn-success:disabled {
  cursor: not-allowed;
}
</style>