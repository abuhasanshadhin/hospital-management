<template>
  <div class="d-inline">
    <button @click="isModalShow = true" class="btn btn-sm btn-info">
      <i class="fa fa-edit"></i>
    </button>

    <transition name="scale">
      <div class="custom-modal" v-if="isModalShow">
        <div class="custom-modal-body col-md-6">
          <div class="custom-modal-header">
            <div class="clearfix">
              <div class="custom-modal-title">Edit Department</div>
              <div @click="isModalShow = false" class="custom-close">
                <i class="fa fa-times"></i>
              </div>
            </div>
          </div>

          <div class="custom-modal-content">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                v-model="department.name"
                id="name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                v-model="department.description"
                id="description"
                rows="4"
                class="form-control"
              ></textarea>
            </div>
            <div class="form-group">
              <label class="mr-3">Status</label>
              <div class="custom-control custom-radio d-inline-block mr-2">
                <input
                  type="radio"
                  v-model="department.status"
                  value="1"
                  id="cr1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="cr1">Active</label>
              </div>
              <div class="custom-control custom-radio d-inline-block">
                <input
                  type="radio"
                  v-model="department.status"
                  value="0"
                  id="cr2"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="cr2">Inactive</label>
              </div>
            </div>
          </div>

          <div class="custom-modal-footer">
            <button @click="updateDepartment" class="btn btn-primary">
              <i v-if="loading" class="fa fa-spin fa-spinner"></i>
              <span v-else>Update</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      isModalShow: false,
      department: {
        id: "",
        name: "",
        description: "",
        status: "",
      },
      loading: false,
    };
  },
  created() {
    Object.keys(this.department).map(
      (k) => (this.department[k] = this.data[k])
    );
  },
  methods: {
    async updateDepartment() {
      if (!this.department.name) {
        snackbar.error("Department name is required");
      } else if (this.department.status === "") {
        snackbar.error("Department status is required");
      } else {
        this.loading = true;
        let res = await this.$store.dispatch(
          "department/updateDepartment",
          this.department
        );
        this.loading = false;
        console.log(res);
        if (res) this.isModalShow = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
