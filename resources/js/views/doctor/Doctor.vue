<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-2">
                <div class="clearfix">
                    <div class="float-left">
                        <h5 class="m-0 font-weight-bold text-primary">
                            <template v-if="doctorEditId">
                                Edit Doctor
                            </template>
                            <template v-else> Add New Doctor </template>
                        </h5>
                    </div>
                    <div class="float-right">
                        <router-link to="/doctors" class="btn btn-sm btn-dark">
                            <i class="fa fa-arrow-left"></i> Back
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="saveDoctor" method="POST">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Full Name
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="doctor.name"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Phone No
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="doctor.phone"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right">Email</label>
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="doctor.email"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Date of Birth</label
                                >
                                <div class="col-md-8">
                                    <date-picker
                                        v-model.trim="doctor.date_of_birth"
                                    ></date-picker>
                                </div>
                            </div>

                            <div class="form-group row mb-1">
                                <label class="col-md-4 text-right"
                                    >Gender
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <div
                                        class="custom-control custom-radio d-inline-block mr-3"
                                    >
                                        <input
                                            type="radio"
                                            value="Male"
                                            id="cr1"
                                            class="custom-control-input"
                                            v-model="doctor.gender"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="cr1"
                                            >Male</label
                                        >
                                    </div>
                                    <div
                                        class="custom-control custom-radio d-inline-block"
                                    >
                                        <input
                                            type="radio"
                                            value="Female"
                                            id="cr2"
                                            class="custom-control-input"
                                            v-model="doctor.gender"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="cr2"
                                            >Female</label
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Blood Group</label
                                >
                                <div class="col-md-8">
                                    <v-select
                                        :options="[
                                            'A+',
                                            'A-',
                                            'B+',
                                            'B-',
                                            'O+',
                                            'O-',
                                            'AB+',
                                            'AB-',
                                        ]"
                                        v-model="doctor.blood_group"
                                    ></v-select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Address
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="doctor.address"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5">
                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Department
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-7 pr-1">
                                    <v-select
                                        @search:focus="
                                            $store.dispatch(
                                                'department/getDepartments',
                                                { status: true }
                                            )
                                        "
                                        :options="
                                            $store.getters[
                                                'department/departments'
                                            ]
                                        "
                                        label="name"
                                        v-model="selectedDepartment"
                                    ></v-select>
                                    <div
                                        v-if="
                                            $store.getters['department/loading']
                                        "
                                        class="slider slider-sm"
                                    >
                                        <div class="line"></div>
                                        <div class="sub-line inc"></div>
                                        <div class="sub-line dec"></div>
                                    </div>
                                </div>
                                <div class="col-md-1 pl-0">
                                    <department-modal small></department-modal>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Specialization
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="doctor.specialization"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Education</label
                                >
                                <div class="col-md-8">
                                    <textarea
                                        v-model.trim="doctor.education"
                                        class="form-control"
                                        style="height: 60px"
                                    ></textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right">Photo</label>
                                <div class="col-md-8">
                                    <input
                                        type="file"
                                        @change="onPhotoChange"
                                        class="form-control"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label class="col-md-4 text-right"
                                    >Status</label
                                >
                                <div class="col-md-8">
                                    <div
                                        class="custom-control custom-radio d-inline-block mr-3"
                                    >
                                        <input
                                            type="radio"
                                            value="1"
                                            id="s1"
                                            class="custom-control-input"
                                            v-model="doctor.status"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="s1"
                                            >Active</label
                                        >
                                    </div>
                                    <div
                                        class="custom-control custom-radio d-inline-block"
                                    >
                                        <input
                                            type="radio"
                                            value="0"
                                            id="s2"
                                            class="custom-control-input"
                                            v-model="doctor.status"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="s2"
                                            >Inactive</label
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-8 offset-md-4 text-right">
                                    <button
                                        type="button"
                                        @click.prevent="resetForm"
                                        class="btn btn-dark c-btn"
                                        :disabled="btnDisabled"
                                        v-if="!doctorEditId"
                                    >
                                        <i class="fa fa-undo"></i> Reset
                                    </button>
                                    <button
                                        type="submit"
                                        class="btn btn-primary c-btn"
                                        :disabled="btnDisabled"
                                    >
                                        <i
                                            v-if="loading"
                                            class="fa fa-spinner fa-spin"
                                        ></i>
                                        <template v-else
                                            ><i class="fa fa-save"></i> Save
                                            <template v-if="doctorEditId"
                                                >Changes</template
                                            >
                                        </template>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <img
                                :src="
                                    photoPreview ? photoPreview : notFoundImage
                                "
                                alt="Doctor Photo Preview"
                                class="doctor-image-preview"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import DepartmentModal from "../department/Department";

export default {
    components: {
        DepartmentModal,
    },
    data() {
        return {
            selectedDepartment: null,
            doctor: {
                name: "",
                phone: "",
                email: "",
                date_of_birth: new Date(),
                gender: "",
                blood_group: "",
                address: "",
                department_id: null,
                specialization: "",
                education: "",
                photo: null,
                status: 1,
            },
            photoPreview: null,
            notFoundImage: `${window.publicPath}/images/doctor-image-not-available.png`,
            loading: false,
            btnDisabled: false,
            doctorEditId: null,
        };
    },
    watch: {
        selectedDepartment(department) {
            if (department == null) return;
            this.doctor.department_id = department.id;
        },
    },
    created() {
        let doctorEditId = this.$route.params.id;
        if (doctorEditId != undefined) this.editDoctor(doctorEditId);
    },
    methods: {
        onPhotoChange() {
            if (event.target.files.length == 0) return;
            let file = event.target.files[0];
            this.photoPreview = URL.createObjectURL(file);
            this.doctor.photo = file;
        },
        async saveDoctor() {
            if (this.validate()) return;

            this.loading = this.btnDisabled = true;
            let doctorData = { ...this.doctor };

            if (doctorData.date_of_birth) {
                doctorData.date_of_birth = moment(
                    doctorData.date_of_birth
                ).format("YYYY-MM-DD");
            }

            let doctorForm = new FormData();
            Object.keys(doctorData).map((k) => {
                if (doctorData[k]) doctorForm.append(k, doctorData[k]);
            });

            if (this.doctorEditId) {
                doctorForm.append("id", this.doctorEditId);
                await this.$store.dispatch("doctor/processDoctor", {
                    url: "update_doctor",
                    data: doctorForm,
                });
            } else {
                let res = await this.$store.dispatch("doctor/processDoctor", {
                    url: "add_doctor",
                    data: doctorForm,
                });
                if (res) this.resetForm();
            }

            this.loading = this.btnDisabled = false;
        },
        validate() {
            let props = [
                "name",
                "phone",
                "gender",
                "address",
                "department_id",
                "specialization",
            ];

            let errorCount = 0;

            props.forEach((prop) => {
                if (!this.doctor[prop]) {
                    errorCount++;
                    let propName = prop.replace("_id", "");
                    let message = `The ${propName} field is required`;
                    snackbar.warning(message, "topRight");
                }
            });

            return errorCount ? true : false;
        },
        resetForm() {
            Object.keys(this.doctor).map((k) => (this.doctor[k] = ""));
            this.selectedDepartment = this.doctor.department_id = null;
            this.doctor.photo = this.photoPreview = null;
            this.doctor.date_of_birth = new Date();
            this.doctor.status = 1;
        },
        async editDoctor(doctor_id) {
            this.doctorEditId = doctor_id;
            await this.$store.dispatch("department/getDepartments");

            let doctor = await this.$store.dispatch(
                "doctor/getDoctor",
                doctor_id
            );

            Object.keys(this.doctor).map((k) => (this.doctor[k] = doctor[k]));

            if (this.doctor.photo) {
                this.photoPreview = `${window.publicPath}/${this.doctor.photo}`;
                this.doctor.photo = null;
            }

            this.$store.getters["department/departments"].forEach((dept) => {
                if (dept.id == doctor.department_id)
                    this.selectedDepartment = dept;
            });

            if (doctor.date_of_birth) {
                this.doctor.date_of_birth = new Date(doctor.date_of_birth);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.doctor-image-preview {
    height: 150px;
    width: 150px;
    margin-top: 40px;
    object-fit: contain;
}
</style>
