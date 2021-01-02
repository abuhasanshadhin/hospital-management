<template>
    <div class="d-inline-block">
        <button @click="isModalShow = true" class="btn-action text-dark">
            <i class="fa fa-clock"></i>
        </button>

        <transition name="scale">
            <div class="custom-modal" v-if="isModalShow">
                <div class="custom-modal-body col-md-6">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">
                                Doctor Schedule
                            </div>
                            <div
                                @click="isModalShow = false"
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
                                    <b>D-0004 : </b> Brig. Gen. Dr. Md. Amzad
                                    Hossain Fakir (Rtd.)
                                </div>
                                <div style="line-height: 1.1">
                                    <small
                                        class="text-uppercase"
                                        style="font-size: 75%"
                                    >
                                        <b>
                                            <i class="fa fa-building"></i>
                                            Cardiology Department
                                        </b>
                                    </small>
                                </div>
                            </div>
                            <div class="float-right">
                                <schedule-modal></schedule-modal>
                            </div>
                        </div>
                        <table class="table table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Day</th>
                                    <th>Start Time</th>
                                    <th>End Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in availableDays" :key="i">
                                    <td>{{ i + 1 }}</td>
                                    <td>{{ item.day }}</td>
                                    <td>{{ item.startTime }}</td>
                                    <td>{{ item.endTime }}</td>
                                    <td>
                                        <schedule-modal
                                            edit
                                            small
                                        ></schedule-modal>
                                        <button class="btn-action text-danger">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="custom-modal-footer"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import ScheduleModal from "./Schedule";

export default {
    components: {
        ScheduleModal,
    },
    data() {
        return {
            isModalShow: false,
            availableDays: [
                { day: "Sunday", startTime: "4:15 AM", endTime: "7:30 AM" },
                { day: "Monday", startTime: "2:00 AM", endTime: "5:00 AM" },
                { day: "Wednesday", startTime: "5:00 AM", endTime: "9:00 AM" },
                { day: "Friday", startTime: "9:00 AM", endTime: "9:00 AM" },
            ],
        };
    },
    methods: {},
};
</script>

<style>
</style>
