<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-2">
                <div class="clearfix">
                    <div class="float-left">
                        <h4 class="m-0 font-weight-bold text-primary">
                            Doctor List
                        </h4>
                    </div>
                    <div class="float-right">
                        <router-link
                            to="/doctor"
                            class="btn btn-sm btn-primary"
                        >
                            <i class="fa fa-plus"></i> Add New
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <data-table
                    :headers="headers"
                    :loading="$store.getters['doctor/loading']"
                    :resources="$store.getters['doctor/doctors']"
                >
                    <template v-slot:[`sl`]="{ i, start }">{{
                        i + start + 1
                    }}</template>
                    <template v-slot:[`status`]="{ item }">
                        <div class="badge badge-success" v-if="item.status">
                            Active
                        </div>
                        <div class="badge badge-danger" v-if="!item.status">
                            Inactive
                        </div>
                    </template>
                    <template v-slot:[`action`]="{ item }">
                        <doctor-schedule></doctor-schedule>
                        <doctor-details :doctor="item"></doctor-details>
                        <router-link
                            :to="`/doctor/${item.id}`"
                            class="btn-action text-info"
                        >
                            <i class="fa fa-edit"></i>
                        </router-link>
                        <button
                            @click.prevent="showDeleteDialog(item.id)"
                            type="button"
                            class="btn-action text-danger"
                        >
                            <i class="fa fa-trash"></i>
                        </button>
                    </template>
                </data-table>
            </div>
        </div>
        <delete-confirm
            ref="deleteConfirm"
            @confirm="deleteDoctor"
        ></delete-confirm>
    </div>
</template>

<script>
import DataTable from "../../components/DataTable";
import DoctorSchedule from "./schedule/ScheduleList";
import DoctorDetails from "./Show";
import DeleteConfirm from "../../components/Confirm";

export default {
    components: {
        DataTable,
        DoctorSchedule,
        DoctorDetails,
        DeleteConfirm,
    },
    data() {
        return {
            headers: [
                { text: "SL", key: "sl" },
                { text: "ID", key: "code", search: true },
                { text: "Name", key: "name", search: true },
                { text: "Department", key: "department_name", search: true },
                { text: "Phone", key: "phone", search: true },
                { text: "Gender", key: "gender", search: true },
                { text: "Status", key: "status", search: true },
                { text: "Action", key: "action" },
            ],
            doctorDeleteId: null,
        };
    },
    created() {
        this.$store.dispatch("doctor/getDoctors");
    },
    methods: {
        showDeleteDialog(doctor_id) {
            this.doctorDeleteId = doctor_id;
            this.$refs.deleteConfirm.show = true;
        },
        async deleteDoctor() {
            this.$refs.deleteConfirm.show = false;
            if (!this.doctorDeleteId) {
                snackbar.error("Something went wrong :(", "topRight");
                return;
            }
            let res = await this.$store.dispatch("doctor/processDoctor", {
                url: "delete_doctor",
                data: { id: this.doctorDeleteId },
            });
            if (res) this.doctorDeleteId = null;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
