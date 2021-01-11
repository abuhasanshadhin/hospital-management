<template>
    <div class="d-inline">
        <transition name="scale">
            <div class="custom-modal" v-if="isModalShow">
                <div class="custom-modal-body col-md-7">
                    <div class="custom-modal-header">
                        <div class="clearfix">
                            <div class="custom-modal-title">
                                Patient Details
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
                        <div class="row">
                            <div class="col-md-5">
                                <div class="text-center">
                                    <img
                                        v-if="patient.photo"
                                        :src="`${apiPublicPath}/${patient.photo}`"
                                        class="patient-image"
                                        alt="Patient Photo"
                                    />
                                    <img
                                        v-else
                                        :src="`${apiPublicPath}/images/image-not-available.png`"
                                        class="patient-image"
                                        alt="Not Available"
                                    />
                                </div>
                            </div>
                            <div class="col-md-7">
                                <table class="table table-sm table-borderless">
                                    <tr>
                                        <th>Patient ID</th>
                                        <td>:</td>
                                        <td>{{ patient.code }}</td>
                                    </tr>
                                    <tr>
                                        <th>Full Name</th>
                                        <td>:</td>
                                        <td>{{ patient.name }}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>:</td>
                                        <td>{{ patient.gender }}</td>
                                    </tr>
                                    <tr>
                                        <th>Date of Birth</th>
                                        <td>:</td>
                                        <td>{{ patient.date_of_birth }}</td>
                                    </tr>
                                    <tr>
                                        <th>Age</th>
                                        <td>:</td>
                                        <td>{{ patient.age }}</td>
                                    </tr>
                                    <tr>
                                        <th>Blood Group</th>
                                        <td>:</td>
                                        <td>{{ patient.blood_group }}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone Number</th>
                                        <td>:</td>
                                        <td>{{ patient.phone_number }}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone Number 2</th>
                                        <td>:</td>
                                        <td>{{ patient.phone_number_2 }}</td>
                                    </tr>
                                    <tr>
                                        <th>E-Mail</th>
                                        <td>:</td>
                                        <td>{{ patient.email }}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-6">
                                <table class="table table-sm table-borderless">
                                    <tr>
                                        <th>Address</th>
                                        <td>:</td>
                                        <td>{{ patient.address }}</td>
                                    </tr>
                                    <tr>
                                        <th>Entry Date</th>
                                        <td>:</td>
                                        <td>
                                            {{
                                                String(
                                                    new Date(patient.created_at)
                                                ).slice(0, 25)
                                            }}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <table class="table table-sm table-borderless">
                                    <tr>
                                        <th>Status</th>
                                        <td>:</td>
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
                                    </tr>
                                    <tr>
                                        <th>Created By</th>
                                        <td>:</td>
                                        <td>
                                            {{
                                                patient.created_by
                                                    ? patient.created_by.name
                                                    : ""
                                            }}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="px-2 text-center mt-4">
                            <div class="font-weight-bold"><u>Note :</u></div>
                            {{ patient.note }}
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
    props: ["patient"],
    data() {
        return {
            isModalShow: false,
            apiPublicPath: window.publicPath,
        };
    },
};
</script>

<style scoped>
.patient-image {
    height: 150px;
    margin-top: 50px;
}
</style>
