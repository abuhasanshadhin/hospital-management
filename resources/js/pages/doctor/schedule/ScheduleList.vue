<template>
    <div class="d-inline-block">
        <transition name="scale">
            <div class="custom-modal" v-if="modal_show">
                <div class="custom-modal-body col-md-6">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">
                                Doctor Schedule
                            </div>
                            <div
                                @click="$emit('closeModal')"
                                class="custom-close"
                            >
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                    </div>

                    <div class="custom-modal-content">
                        <div class="clearfix mb-2">
                            <div class="float-left">
                                <div style="line-height: 1">
                                    <b>{{ doctor.code }} : </b>
                                    {{ doctor.name }}
                                </div>
                                <div style="line-height: 1.1">
                                    <b>Department :</b>
                                    {{ doctor.department_name }}
                                </div>
                            </div>
                            <div class="float-right">
                                <button
                                    @click.prevent="showAddModal"
                                    type="button"
                                    class="btn btn-primary btn-sm"
                                >
                                    <i class="fa fa-plus"></i> Add New
                                </button>
                            </div>
                        </div>
                        <table class="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Day</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>T. Sl</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template
                                    v-if="
                                        $store.getters[
                                            'doctorSchedule/schedules'
                                        ].length
                                    "
                                >
                                    <tr
                                        v-for="(item, i) in $store.getters[
                                            'doctorSchedule/schedules'
                                        ]"
                                        :key="i"
                                    >
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ item.available_day }}</td>
                                        <td>{{ item.start_time }}</td>
                                        <td>{{ item.end_time }}</td>
                                        <td>{{ item.total_serial }}</td>
                                        <td>
                                            <button
                                                @click.prevent="
                                                    showEditModal(item)
                                                "
                                                type="button"
                                                class="btn-action text-info"
                                            >
                                                <i class="fa fa-edit"></i>
                                            </button>
                                            <button
                                                @click.prevent="
                                                    showDeleteConfirm(item.id)
                                                "
                                                type="button"
                                                class="btn-action text-danger"
                                                title="Delete"
                                            >
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </template>
                                <tr v-else>
                                    <td
                                        colspan="6"
                                        class="text-center text-danger"
                                    >
                                        No schedule found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="custom-modal-footer"></div>
                </div>
            </div>
        </transition>

        <schedule-modal ref="addModal" :doctorID="doctor_id"></schedule-modal>

        <schedule-modal ref="editModal" :data="scheduleInfo"></schedule-modal>

        <confirm ref="deleteConfirm" @confirm="deleteSchedule"></confirm>
    </div>
</template>

<script>
import Confirm from "../../../components/Confirm";
import ScheduleModal from "./Schedule";

export default {
    props: {
        doctor: Object,
        modal_show: Boolean,
        doctor_id: Number,
    },
    components: {
        ScheduleModal,
        Confirm,
    },
    data() {
        return {
            scheduleInfo: null,
            deleteId: null,
        };
    },
    watch: {
        doctor_id(id) {
            this.$store.dispatch("doctorSchedule/getSchedules", {
                doctor_id: id,
            });
        },
    },
    methods: {
        showEditModal(schedule) {
            this.scheduleInfo = schedule;
            this.$refs.editModal.isModalShow = true;
        },
        showAddModal() {
            this.$refs.addModal.isModalShow = true;
        },
        showDeleteConfirm(id) {
            this.deleteId = id;
            this.$refs.deleteConfirm.show = true;
        },
        async deleteSchedule() {
            this.$refs.deleteConfirm.show = false;
            let res = await this.$store.dispatch(
                "doctorSchedule/processSchedule",
                {
                    url: "delete_doctor_schedule",
                    data: { id: this.deleteId },
                }
            );
            if (res) this.deleteId = null;
        },
    },
};
</script>

<style>
</style>
