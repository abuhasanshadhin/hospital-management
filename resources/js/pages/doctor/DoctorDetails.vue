<template>
    <div>
        <transition name="scale">
            <div class="custom-modal" v-if="isModalShow">
                <div class="custom-modal-body col-md-7">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">Doctor Details</div>
                            <div
                                @click="isModalShow = false"
                                class="custom-close"
                            >
                                <i class="fa fa-times"></i>
                            </div>
                        </div>
                    </div>

                    <div class="custom-modal-content">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="text-center">
                                    <img
                                        v-if="doctor.photo"
                                        :src="`${apiPublicPath}/${doctor.photo}`"
                                        class="doctor-image"
                                        alt="Doctor Photo"
                                    />
                                    <img
                                        v-else
                                        :src="`${apiPublicPath}/images/image-not-available.png`"
                                        class="doctor-image"
                                        alt="Not Available"
                                    />
                                </div>
                            </div>
                            <div class="col-md-7">
                                <table class="table table-sm table-borderless">
                                    <tr>
                                        <th>Full Name</th>
                                        <td>:</td>
                                        <td>{{ doctor.name }}</td>
                                    </tr>
                                    <tr>
                                        <th>Department</th>
                                        <td>:</td>
                                        <td>{{ doctor.department_name }}</td>
                                    </tr>
                                    <tr v-if="doctor.joining_date">
                                        <th>Joining Date</th>
                                        <td>:</td>
                                        <td>{{ doctor.joining_date }}</td>
                                    </tr>
                                    <tr>
                                        <th>Specialization</th>
                                        <td>:</td>
                                        <td>{{ doctor.specialization }}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone No</th>
                                        <td>:</td>
                                        <td>{{ doctor.phone }}</td>
                                    </tr>
                                    <tr v-if="doctor.email">
                                        <th>E-Mail</th>
                                        <td>:</td>
                                        <td>
                                            {{ doctor.email }}
                                        </td>
                                    </tr>
                                    <tr v-if="doctor.date_of_birth">
                                        <th style="width: 120px">
                                            Date of Birth
                                        </th>
                                        <td>:</td>
                                        <td>{{ doctor.date_of_birth }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>:</td>
                                        <td>{{ doctor.gender }}</td>
                                    </tr>
                                    <tr v-if="doctor.blood_group">
                                        <th>B. Group</th>
                                        <td>:</td>
                                        <td>{{ doctor.blood_group }}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>:</td>
                                        <td>{{ doctor.address }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="px-1 mt-3">
                            <div class="text-center">
                                <b><u>Education / Degree</u></b>
                            </div>
                            <div class="education">
                                {{ doctor.education }}
                            </div>
                        </div>
                    </div>

                    <div class="custom-modal-footer"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ["doctor"],
    data() {
        return {
            isModalShow: false,
            apiPublicPath: window.publicPath,
        };
    },
};
</script>

<style scoped>
</style>
