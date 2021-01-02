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
                                <template v-if="edit">Edit Schedule</template>
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
                            :disabled="btnDisabled"
                            class="btn btn-primary"
                        >
                            <i v-if="loading" class="fa fa-spin fa-spinner"></i>
                            <span v-else>
                                <i class="fa fa-save"></i> Save
                                <template v-if="edit">Changes</template>
                            </span>
                        </button>
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
    props: {
        small: Boolean,
        edit: Boolean,
        data: null,
    },
    components: {
        VueTimepicker,
    },
    data() {
        return {
            isModalShow: false,
            availableTimeFrom: "",
            loading: false,
            btnDisabled: false,
        };
    },
    methods: {
        resetForm() {},
    },
};
</script>

<style scoped>
.custom-modal-footer .btn {
    padding: 4px 10px;
    font-size: 16px;
}
</style>
