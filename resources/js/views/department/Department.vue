<template>
    <div class="d-inline-block">
        <button
            type="button"
            @click.prevent="isModalShow = true"
            :class="[
                edit
                    ? 'btn-action text-primary'
                    : 'btn btn-sm btn-primary text-center',
                small ? 'rounded-circle' : '',
            ]"
        >
            <template v-if="edit"> <i class="fa fa-edit"></i> </template>
            <template v-else>
                <i class="fa fa-plus"></i>
                <template v-if="!small">Add New</template>
            </template>
        </button>

        <transition name="scale">
            <div class="custom-modal" v-if="isModalShow">
                <div class="custom-modal-body col-md-4">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">
                                <template v-if="edit">Edit Department</template>
                                <template v-else>Add New Department</template>
                            </div>
                            <div
                                @click="isModalShow = false"
                                class="custom-close"
                            >
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                    </div>

                    <form @submit.prevent="saveDepartment" method="post">
                        <div class="custom-modal-content">
                            <div class="form-group">
                                <label for="name"
                                    >Name
                                    <span class="text-danger">*</span></label
                                >
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
                                    rows="2"
                                    class="form-control"
                                ></textarea>
                            </div>

                            <div class="form-group">
                                <label class="mr-3">Status</label>
                                <div
                                    class="custom-control custom-radio d-inline-block mr-2"
                                >
                                    <input
                                        type="radio"
                                        v-model="department.status"
                                        value="1"
                                        id="ds1"
                                        class="custom-control-input"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="ds1"
                                        >Active</label
                                    >
                                </div>
                                <div
                                    class="custom-control custom-radio d-inline-block"
                                >
                                    <input
                                        type="radio"
                                        v-model="department.status"
                                        value="0"
                                        id="ds2"
                                        class="custom-control-input"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="ds2"
                                        >Inactive</label
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="custom-modal-footer">
                            <button
                                type="button"
                                @click="resetForm"
                                v-if="!edit"
                                class="btn btn-dark"
                                :disabled="btnDisabled"
                            >
                                <i class="fa fa-undo"></i> Reset
                            </button>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                :disabled="btnDisabled"
                            >
                                <i
                                    v-if="loading"
                                    class="fa fa-spin fa-spinner"
                                ></i>
                                <span v-else>
                                    <i class="fa fa-save"></i> Save
                                    <template v-if="edit">Changes</template>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        small: Boolean,
        edit: Boolean,
        data: Object,
    },
    data() {
        return {
            isModalShow: false,
            department: {
                name: "",
                description: "",
                status: 1,
            },
            loading: false,
            btnDisabled: false,
            editId: null,
        };
    },
    created() {
        if (this.data != null) {
            Object.keys(this.department).map(
                (k) => (this.department[k] = this.data[k])
            );
            this.editId = this.data.id;
        }
    },
    methods: {
        resetForm() {
            Object.keys(this.department).map((k) => (this.department[k] = ""));
            this.department.status = 1;
            this.editId = null;
        },
        async saveDepartment() {
            if (!this.department.name) {
                snackbar.warning("Department name is required", "topRight");
            } else {
                this.btnDisabled = this.loading = true;
                if (this.editId == null) {
                    let res = await this.$store.dispatch(
                        "department/processDepartment",
                        {
                            url: "add_department",
                            data: this.department,
                        }
                    );
                    if (res) {
                        this.resetForm();
                        this.isModalShow = false;
                    }
                } else {
                    let department = this.department;
                    department.id = this.editId;
                    let res = await this.$store.dispatch(
                        "department/processDepartment",
                        {
                            url: "update_department",
                            data: department,
                        }
                    );
                    if (res) {
                        this.resetForm();
                        this.isModalShow = false;
                    }
                }
                this.btnDisabled = this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
</style>
