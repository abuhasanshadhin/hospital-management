<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="clearfix">
                    <div class="float-left">
                        <h4 class="m-0 font-weight-bold text-primary">
                            Patient List
                        </h4>
                    </div>
                    <div class="float-right">
                        <router-link
                            to="/patient"
                            class="btn btn-sm btn-primary"
                        >
                            <i class="fa fa-plus"></i> Add New
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(patient, i) in $store.getters[
                                    'patient/patients'
                                ]"
                                :key="i"
                            >
                                <td>{{ i + 1 }}</td>
                                <td>{{ patient.code }}</td>
                                <td>{{ patient.name }}</td>
                                <td>{{ patient.gender }}</td>
                                <td>{{ patient.age }}</td>
                                <td>{{ patient.phone_number }}</td>
                                <td>
                                    <div
                                        class="badge badge-success"
                                        v-if="patient.status"
                                    >
                                        Active
                                    </div>
                                    <div
                                        class="badge badge-danger"
                                        v-if="!patient.status"
                                    >
                                        Inactive
                                    </div>
                                </td>
                                <td>
                                    <patient-document></patient-document>
                                    <router-link
                                        :to="`/patient/${patient.id}`"
                                        class="btn-action text-info"
                                        title="Edit"
                                    >
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button
                                        @click.prevent="
                                            showDeleteDialog(patient.id)
                                        "
                                        type="button"
                                        class="btn-action text-danger"
                                        title="Delete"
                                    >
                                        <i class="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <delete-confirm
            ref="deleteConfirm"
            @confirm="deletePatient"
        ></delete-confirm>
    </div>
</template>

<script>
import PatientDocument from "./document/Index";
import DeleteConfirm from "../../components/Confirm";

export default {
    components: {
        PatientDocument,
        DeleteConfirm,
    },
    data() {
        return {
            patientDeleteId: null,
        };
    },
    created() {
        this.$store.dispatch("patient/getPatients");
    },
    methods: {
        showDeleteDialog(patient_id) {
            this.patientDeleteId = patient_id;
            this.$refs.deleteConfirm.show = true;
        },
        async deletePatient() {
            this.$refs.deleteConfirm.show = false;
            if (!this.patientDeleteId) {
                snackbar.error("Something went wrong :(", "topRight");
                return;
            }
            let res = await this.$store.dispatch("patient/processPatient", {
                url: "delete_patient",
                data: { id: this.patientDeleteId },
            });
            if (res) this.patientDeleteId = null;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
