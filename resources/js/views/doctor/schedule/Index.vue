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
                        <table
                            class="table table-sm text-center table-bordered"
                        >
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
                                        <edit-modal></edit-modal>
                                        <button class="btn btn-sm btn-danger">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="custom-modal-footer info">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="">
                                            <img
                                                height="72"
                                                src="http://localhost/hospital-management/public/images/image-not-available.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-10">
                                        <div class="font-weight-bold">
                                            Dr. Taraki Ahamed Mehedi
                                        </div>
                                        <div><b>Phone : </b> 02923432964</div>
                                        <div>
                                            <b>Department : </b> Cardiology
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <create-modal></create-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CreateModal from "./Create";
import EditModal from "./Edit";

export default {
    components: {
        CreateModal,
        EditModal,
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
