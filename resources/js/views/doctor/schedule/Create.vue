<template>
    <div>
        <button
            @click="isModalShow = true"
            class="btn btn-block btn-primary btn-sm"
        >
            <i class="fa fa-plus"></i> Add New
        </button>

        <transition name="scale">
            <div class="custom-modal" v-if="isModalShow">
                <div class="custom-modal-body col-md-4">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">
                                Add New Schedule
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
                        <div class="form-group">
                            <label for="">Available Day</label>
                            <v-select
                                :options="[
                                    'Sunday',
                                    'Monday',
                                    'Tuesday',
                                    'Wednesday',
                                ]"
                            ></v-select>
                        </div>

                        <div class="form-group">
                            <label for="">Available Time</label>
                            <div class="row">
                                <div class="col">
                                    <vue-timepicker
                                        v-model="availableTimeFrom"
                                        format="hh:mm A"
                                        :minute-interval="5"
                                        close-on-complete
                                    ></vue-timepicker>
                                </div>
                                <div class="col">
                                    <vue-timepicker
                                        format="hh:mm A"
                                        :minute-interval="5"
                                        close-on-complete
                                    ></vue-timepicker>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="custom-modal-footer">
                        <button class="btn btn-secondary">Reset</button>
                        <button class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import VueTimepicker from "vue2-timepicker";
import "vue2-timepicker/dist/VueTimepicker.css";

export default {
    components: {
        VueTimepicker,
    },
    data() {
        return {
            isModalShow: false,
            availableTimeFrom: "",
        };
    },
    methods: {},
};
</script>

<style scoped>
.custom-modal-footer .btn {
    padding: 4px 10px;
    font-size: 16px;
}
</style>
