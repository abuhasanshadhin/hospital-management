<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="clearfix">
                    <div class="float-left">
                        <h4 class="m-0 font-weight-bold text-primary">
                            <template v-if="patientEditId"
                                >Edit Patient</template
                            >
                            <template v-else>Add New Patient</template>
                        </h4>
                    </div>
                    <div class="float-right">
                        <router-link to="/patients" class="btn btn-sm btn-dark">
                            <i class="fa fa-arrow-left"></i> Back
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <form @submit.prevent="savePatient" method="POST">
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
                                        v-model.trim="patient.name"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    for=""
                                    class="col-md-4 text-right"
                                    style="margin-bottom: 3px"
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
                                            v-model.trim="patient.gender"
                                            id="g1"
                                            class="custom-control-input"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="g1"
                                            >Male</label
                                        >
                                    </div>
                                    <div
                                        class="custom-control custom-radio d-inline-block"
                                    >
                                        <input
                                            type="radio"
                                            value="Female"
                                            v-model.trim="patient.gender"
                                            id="g2"
                                            class="custom-control-input"
                                        />
                                        <label
                                            class="custom-control-label"
                                            for="g2"
                                            >Female</label
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Date of Birth</label
                                >
                                <div class="col-md-8">
                                    <date-picker
                                        v-model.trim="patient.date_of_birth"
                                        :disabled-date="disabledAfterToday"
                                        :editable="false"
                                    ></date-picker>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Age
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8 d-flex">
                                    <div class="mr-1">Y</div>
                                    <input
                                        type="number"
                                        v-model.number="patient.age_years"
                                        class="form-control text-center"
                                        min="0"
                                    />
                                    <div class="ml-1">M</div>
                                    <input
                                        type="number"
                                        v-model.number="patient.age_months"
                                        class="form-control text-center ml-1"
                                        min="0"
                                    />
                                    <div class="ml-1">D</div>
                                    <input
                                        type="number"
                                        v-model.number="patient.age_days"
                                        class="form-control text-center ml-1"
                                        min="0"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
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
                                        v-model.trim="patient.blood_group"
                                    ></v-select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Phone No
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="patient.phone_number"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Phone No 2</label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="text"
                                        v-model.trim="patient.phone_number_2"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Email</label
                                >
                                <div class="col-md-8">
                                    <input
                                        type="email"
                                        v-model.trim="patient.email"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Address
                                    <span class="text-danger">*</span></label
                                >
                                <div class="col-md-8">
                                    <textarea
                                        v-model.trim="patient.address"
                                        rows="2"
                                        class="form-control"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-4 text-right">Photo</label>
                                <div class="col-md-6 pr-0">
                                    <input
                                        @change="onPhotoChange"
                                        ref="patientPhoto"
                                        type="file"
                                        class="form-control"
                                    />
                                </div>
                                <div class="col-md-2">
                                    <button
                                        @click.prevent="webCamEnable"
                                        type="button"
                                        class="btn-webcam"
                                    >
                                        <i class="fa fa-camera fa-2x"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Note</label
                                >
                                <div class="col-md-8">
                                    <textarea
                                        v-model.trim="patient.note"
                                        rows="3"
                                        class="form-control"
                                    ></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="" class="col-md-4 text-right"
                                    >Status</label
                                >
                                <div class="col-md-8">
                                    <div
                                        class="custom-control custom-radio d-inline-block mr-3"
                                    >
                                        <input
                                            type="radio"
                                            value="1"
                                            v-model="patient.status"
                                            id="s1"
                                            class="custom-control-input"
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
                                            v-model="patient.status"
                                            id="s2"
                                            class="custom-control-input"
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
                                        v-if="!patientEditId"
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
                                            <template v-if="patientEditId"
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
                                alt="Patient Photo Preview"
                                class="patient-image-preview"
                            />
                        </div>
                    </div>
                </form>

                <webcam ref="webCam"></webcam>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";
import Webcam from "../../components/Webcam";
import V from "../../utils/validation";

export default {
    components: { Webcam },
    data() {
        return {
            patient: {
                name: "",
                gender: "",
                date_of_birth: "",
                age_years: 0,
                age_months: 0,
                age_days: 0,
                blood_group: "",
                phone_number: "",
                phone_number_2: "",
                address: "",
                email: "",
                note: "",
                status: 1,
            },
            photo: null,
            photoPreview: null,
            notFoundImage: `${window.publicPath}/images/image-not-available.png`,
            loading: false,
            btnDisabled: false,
            patientEditId: null,
        };
    },
    watch: {
        "patient.date_of_birth": function (val) {
            if (!val) return;
            let dob = moment(val).format("YYYY-MM-DD");
            let ageObj = this.getAge(dob);
            this.patient.age_years = ageObj.years;
            this.patient.age_months = ageObj.months;
            this.patient.age_days = ageObj.days;
        },
    },
    created() {
        let patientId = this.$route.params.id;
        if (patientId != undefined) this.editPatient(patientId);
    },
    methods: {
        async savePatient() {
            let props = ["name", "gender", "phone_number", "address"];
            if (V.empty(props, this.patient)) return;
            if (this.patient.age_years) {
            }

            this.loading = this.btnDisabled = true;
            let patientInfo = { ...this.patient };

            if (patientInfo.date_of_birth) {
                patientInfo.date_of_birth = moment(
                    patientInfo.date_of_birth
                ).format("YYYY-MM-DD");
            }

            let patientForm = new FormData();
            Object.keys(patientInfo).map((k) => {
                if (patientInfo[k] == null) {
                    patientForm.append(k, "");
                } else {
                    patientForm.append(k, patientInfo[k]);
                }
            });

            if (this.photo) patientForm.append("photo", this.photo);

            if (this.patientEditId) {
                patientForm.append("id", this.patientEditId);
                await this.$store.dispatch("patient/processPatient", {
                    url: "update_patient",
                    data: patientForm,
                });
            } else {
                let res = await this.$store.dispatch("patient/processPatient", {
                    url: "add_patient",
                    data: patientForm,
                });
                if (res) this.resetForm();
            }

            this.loading = this.btnDisabled = false;
        },
        async editPatient(patient_id) {
            let patient = await this.$store.dispatch(
                "patient/getPatient",
                patient_id
            );

            if (patient == null) {
                this.$router.push("/patients");
                return;
            }

            this.patientEditId = patient_id;

            Object.keys(this.patient).map(
                (k) => (this.patient[k] = patient[k])
            );

            if (patient.photo) {
                this.photoPreview = `${window.publicPath}/${patient.photo}`;
            }

            if (patient.date_of_birth) {
                this.patient.date_of_birth = new Date(patient.date_of_birth);
            }
        },
        resetForm() {
            let p = this.patient;
            Object.keys(p).map((k) => (p[k] = ""));
            p.age_years = p.age_months = p.age_days = 0;
            p.status = 1;
            this.photo = this.photoPreview = null;
            this.$refs.patientPhoto.value = null;
        },
        onPhotoChange() {
            if (event.target.files.length == 0) return;
            let file = event.target.files[0];
            this.photo = file;
            this.photoPreview = URL.createObjectURL(file);
        },
        webCamEnable() {
            this.$refs.webCam.cameraShow = true;
            this.$refs.webCam.init();
        },
        // This method called from Webcam component
        getCapturedFile(file) {
            this.photo = file;
            this.photoPreview = URL.createObjectURL(file);
        },
        getAge(dateString) {
            let now = new Date();
            let today = new Date(now.getYear(), now.getMonth(), now.getDate());

            let yearNow = now.getYear();
            let monthNow = now.getMonth();
            let dateNow = now.getDate();

            let dob = new Date(dateString);

            let yearDob = dob.getYear();
            let monthDob = dob.getMonth();
            let dateDob = dob.getDate();
            let age = {};

            let yearAge = yearNow - yearDob;
            let monthAge, dateAge;

            if (monthNow >= monthDob) {
                monthAge = monthNow - monthDob;
            } else {
                yearAge--;
                monthAge = 12 + monthNow - monthDob;
            }

            if (dateNow >= dateDob) {
                dateAge = dateNow - dateDob;
            } else {
                monthAge--;
                dateAge = 31 + dateNow - dateDob;

                if (monthAge < 0) {
                    monthAge = 11;
                    yearAge--;
                }
            }

            age = {
                years: yearAge,
                months: monthAge,
                days: dateAge,
            };

            return age;
        },
        disabledAfterToday(date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return date > today;
        },
    },
};
</script>

<style lang="scss" scoped>
.patient-image-preview {
    height: 150px;
    width: 150px;
    margin-top: 50px;
    object-fit: contain;
}
</style>
