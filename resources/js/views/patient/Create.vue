<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div class="clearfix">
          <div class="float-left">
            <h4 class="m-0 font-weight-bold text-primary">Add New Patient</h4>
          </div>
          <div class="float-right">
            <router-link to="/patient" class="btn btn-sm btn-dark">
              <i class="fa fa-arrow-left"></i> Back
            </router-link>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="form-group row">
              <label for="" class="col-md-3"
                >Full Name <span class="text-danger">*</span></label
              >
              <div class="col-md-9">
                <input type="text" name="" id="" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3"
                >Email Address <span class="text-danger">*</span></label
              >
              <div class="col-md-9">
                <input type="email" name="" id="" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3"
                >Password <span class="text-danger">*</span></label
              >
              <div class="col-md-9">
                <input type="password" name="" id="" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3"
                >Phone No <span class="text-danger">*</span></label
              >
              <div class="col-md-9">
                <input type="text" name="" id="" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Blood Group</label>
              <div class="col-md-9">
                <v-select
                  :options="['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']"
                ></v-select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3"
                >Gender <span class="text-danger">*</span></label
              >
              <div class="col-md-9">
                <div class="custom-control custom-radio d-inline-block mr-3">
                  <input
                    type="radio"
                    value="Male"
                    id="cr1"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="cr1">Male</label>
                </div>
                <div class="custom-control custom-radio d-inline-block">
                  <input
                    type="radio"
                    value="Female"
                    id="cr2"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="cr2">Female</label>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Date of Birth</label>
              <div class="col-md-9">
                <date-picker v-model="dateOfBirth"></date-picker>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3">Photo</label>
              <div class="col-md-9">
                <input type="file" name="" id="" class="form-control" />
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-3"
                >Address <span class="text-danger">*</span></label
              >
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
              <label for="" class="col-md-3"
                >Status <span class="text-danger">*</span></label
              >
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
      dateOfBirth: new Date("2020-10-31"),
    };
  },
  watch: {
    dateOfBirth: function (val) {
      console.log(new Date(val).toISOString().slice(0, 10));
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>