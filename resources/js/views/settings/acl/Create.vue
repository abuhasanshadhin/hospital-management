<template>
  <div>
    <button
      @click="isModalShow = true"
      :class="{ 'btn-icon': circleBtn }"
      class="btn btn-primary btn-sm text-center"
    >
      <i class="fa fa-plus"></i> <template v-if="!circleBtn">Add New</template>
    </button>

    <transition name="scale">
      <div class="custom-modal" v-if="isModalShow">
        <div class="custom-modal-body col-md-10">
          <div class="custom-modal-header">
            <div class="clearfix">
              <div class="custom-modal-title">Add New Role</div>
              <div @click="isModalShow = false" class="custom-close">
                <i class="fa fa-times"></i>
              </div>
            </div>
          </div>

          <div class="custom-modal-content">
            <div class="form-group">
              <label for="name">Role Name</label>
              <input
                type="text"
                v-model="department.name"
                id="name"
                class="form-control"
              />
            </div>

            <div class="form-group">
              <label>Permissions</label>
              <div class="custom-control custom-checkbox ml-2 mb-2">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="select-all`"
                />
                <label
                  class="custom-control-label font-weight-bold"
                  for="select-all`"
                  >Select All</label
                >
              </div>
              <div class="row ml-3">
                <div v-for="(pp, i) in 12" :key="i" class="col-md-3 mb-2">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      :id="`pp-${i}`"
                    />
                    <label
                      class="custom-control-label font-weight-bold"
                      :for="`pp-${i}`"
                      >Patient</label
                    >
                  </div>
                  <div class="ml-4">
                    <div
                      v-for="(p, j) in 3"
                      :key="j"
                      class="custom-control custom-checkbox"
                    >
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        :id="`p-${j}`"
                        :value="i + j + pp"
                        v-model="selectedPermission"
                      />
                      <label class="custom-control-label" :for="`p-${j}`"
                        >Add Patient</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {{ selectedPermission }}

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
            <button @click="resetForm" class="btn btn-secondary">Reset</button>
            <button @click="saveDepartment" class="btn btn-primary">
              <i v-if="loading" class="fa fa-spin fa-spinner"></i>
              <span v-else>Save</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["circleBtn"],
  data() {
    return {
      isModalShow: false,
      department: {
        name: "",
        description: "",
        status: 1,
      },
      loading: false,
      selectedPermission: [],
      permissions: [],
    };
  },
  methods: {
    resetForm() {
      Object.keys(this.department).map((k) => (this.department[k] = ""));
    },
    async saveDepartment() {
      if (!this.department.name) {
        snackbar.error("Department name is required");
      } else if (!this.department.status) {
        snackbar.error("Department status is required");
      } else {
        this.loading = true;
        let res = await this.$store.dispatch(
          "department/addDepartment",
          this.department
        );
        this.loading = false;
        if (res) {
          this.resetForm();
          this.isModalShow = false;
        }
      }
    },
  },
};
</script>

<style scoped>
</style>