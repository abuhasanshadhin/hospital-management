<template>
  <div class="d-inline">
    <button @click="isModalShow = true" class="btn btn-dark btn-sm">
      <i class="fa fa-eye"></i>
    </button>

    <transition name="scale">
      <div class="custom-modal" v-if="isModalShow">
        <div class="custom-modal-body col-md-7">
          <div class="custom-modal-header">
            <div class="clearfix">
              <div class="custom-modal-title">Patient Document Details</div>
              <div @click="isModalShow = false" class="custom-close">
                <i class="fa fa-times"></i>
              </div>
            </div>
          </div>

          <div class="custom-modal-content">
            <table class="table table-sm table-borderless">
              <tr>
                <th>Date</th>
                <td>:</td>
                <td>20-09-2020</td>
              </tr>
              <tr>
                <th>Doctor</th>
                <td>:</td>
                <td><doctor-details showName="true"></doctor-details></td>
              </tr>
              <tr>
                <th>Description</th>
                <td>:</td>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  fugit sint molestiae, possimus porro nihil nostrum perferendis
                  enim facilis culpa est veritatis saepe autem quidem eligendi
                  quia aperiam laboriosam iste.
                </td>
              </tr>
              <tr>
                <th>Attachments</th>
                <td>:</td>
                <td>
                  <i class="fa fa-download"></i> <i class="fa fa-download"></i>
                  <i class="fa fa-download"></i>
                </td>
              </tr>
            </table>
          </div>

          <div class="custom-modal-footer"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import DoctorDetails from "../../doctor/Show";

export default {
  components: {
    DoctorDetails,
  },
  data() {
    return {
      isModalShow: false,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
</style>