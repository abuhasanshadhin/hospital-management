<template>
  <div class="d-inline">
    <button @click="isModalShow = true" class="btn btn-info btn-sm">
      <i class="fa fa-edit"></i>
    </button>

    <transition name="scale">
      <div class="custom-modal" v-if="isModalShow">
        <div class="custom-modal-body col-md-7">
          <div class="custom-modal-header">
            <div class="clearfix">
              <div class="custom-modal-title">Edit Document</div>
              <div @click="isModalShow = false" class="custom-close">
                <i class="fa fa-times"></i>
              </div>
            </div>
          </div>

          <div class="custom-modal-content text-left">
            <div class="form-group row">
              <label for="" class="col-md-2">Attach Files</label>
              <div class="col-md-10">
                <input
                  type="file"
                  name=""
                  id=""
                  multiple
                  class="form-control"
                />
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-2">Doctor</label>
              <div class="col-md-10">
                <v-select label="name" :options="doctors"></v-select>
              </div>
            </div>

            <div class="form-group row">
              <label for="" class="col-md-2">Description</label>
              <div class="col-md-10">
                <vue-editor></vue-editor>
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
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      isModalShow: false,
      doctors: [],
    };
  },
  created() {
    for (let i = 0; i < 5; i++) {
      this.doctors.push({
        id: i + 1,
        name: `Doctor ${i + 1} Name`,
      });
    }
  },
  methods: {},
};
</script>

<style scoped>
</style>