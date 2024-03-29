<template>
    <div>
        <transition name="scale">
            <div class="custom-modal" v-if="isModalShow">
                <div class="custom-modal-body col-md-4">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">
                                <template v-if="editId">Edit Schedule</template>
                                <template v-else>Add New Schedule</template>
                            </div>
                            <div
                                @click="isModalShow = false"
                                class="custom-close"
                            >
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                    </div>

                    <form @submit.prevent="saveDoctorSchedule" method="post">
                        <div class="custom-modal-content">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for=""
                                            >Available Day
                                            <span class="text-danger"
                                                >*</span
                                            ></label
                                        >
                                        <v-select
                                            :options="availableDays"
                                            v-model.trim="
                                                schedule.available_day
                                            "
                                        ></v-select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for=""
                                            >Total Serial
                                            <span class="text-danger"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            type="number"
                                            min="0"
                                            id=""
                                            class="form-control"
                                            v-model.number="
                                                schedule.total_serial
                                            "
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for=""
                                            >Start Time
                                            <span class="text-danger"
                                                >*</span
                                            ></label
                                        >
                                        <vue-timepicker
                                            format="hh:mm A"
                                            :minute-interval="5"
                                            close-on-complete
                                            v-model.trim="schedule.start_time"
                                        ></vue-timepicker>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for=""
                                            >End Time
                                            <span class="text-danger"
                                                >*</span
                                            ></label
                                        >
                                        <vue-timepicker
                                            format="hh:mm A"
                                            :minute-interval="5"
                                            close-on-complete
                                            v-model.trim="schedule.end_time"
                                        >
                                        </vue-timepicker>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="custom-modal-footer mt-1">
                            <button
                                type="button"
                                @click.prevent="resetForm"
                                v-if="!editId"
                                class="btn btn-dark"
                                :disabled="btnDisabled"
                            >
                                <i class="fa fa-undo"></i> Reset
                            </button>
                            <button
                                type="submit"
                                :disabled="btnDisabled"
                                class="btn btn-primary"
                            >
                                <i
                                    v-if="loading"
                                    class="fa fa-spin fa-spinner"
                                ></i>
                                <span v-else>
                                    <i class="fa fa-save"></i> Save
                                    <template v-if="editId">Changes</template>
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
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";
import V from "../../../utils/validation";

export default {
    props: {
        doctorID: Number,
        data: Object,
    },
    components: {
        VueTimepicker,
    },
    data() {
        return {
            isModalShow: false,
            schedule: {
                available_day: "",
                total_serial: 0,
                start_time: "",
                end_time: "",
            },
            loading: false,
            btnDisabled: false,
            editId: null,
        };
    },
    computed: {
        availableDays() {
            let schedules = this.$store.getters["doctorSchedule/schedules"].map(
                (item) => item.available_day
            );

            let availableDays = [];

            this.$store.getters["doctorSchedule/days"].forEach((day) => {
                if (schedules.indexOf(day) == -1) availableDays.push(day);
            });

            return availableDays;
        },
    },
    watch: {
        data(schedule) {
            if (schedule == null) return;
            Object.keys(this.data).map(
                (k) => (this.schedule[k] = this.data[k])
            );
            this.editId = this.data.id;
        },
    },
    methods: {
        async saveDoctorSchedule() {
            let props = [
                "available_day",
                "total_serial",
                "start_time",
                "end_time",
            ];

            if (V.empty(props, this.schedule)) return;

            this.btnDisabled = this.loading = true;

            if (this.editId == null) {
                let doctorSchedule = this.schedule;
                doctorSchedule.doctor_id = this.doctorID;
                let res = await this.$store.dispatch(
                    "doctorSchedule/processSchedule",
                    {
                        url: "add_doctor_schedule",
                        data: doctorSchedule,
                    }
                );
                if (res) {
                    this.resetForm();
                    this.isModalShow = false;
                }
            } else {
                let doctorSchedule = this.schedule;
                doctorSchedule.id = this.editId;
                let res = await this.$store.dispatch(
                    "doctorSchedule/processSchedule",
                    {
                        url: "update_doctor_schedule",
                        data: doctorSchedule,
                    }
                );
                if (res) {
                    this.resetForm();
                    this.isModalShow = false;
                }
            }

            this.btnDisabled = this.loading = false;
        },
        resetForm() {
            let s = this.schedule;
            s.available_day = s.start_time = s.end_time = "";
            s.total_serial = 0;
        },
    },
};
</script>

<style scoped>
.custom-modal-footer .btn {
    padding: 4px 10px;
    font-size: 16px;
}
</style>
