<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div class="clearfix">
          <div class="float-left">
            <h4 class="m-0 font-weight-bold text-primary">
              Appointment Report
            </h4>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="mb-2 bg-light p-2">
          <div class="row">
            <div class="col-md-3">
              <v-select
                v-model="assignBy"
                :options="['All', 'Doctor', 'Representative']"
              ></v-select>
            </div>
            <div v-if="assignBy == 'Doctor'" class="col-md-3">
              <v-select
                v-model="doctor"
                :options="['Jhon Doe', 'Joe Biden', 'Donald Trump']"
              ></v-select>
            </div>
            <div v-if="assignBy == 'Representative'" class="col-md-3">
              <v-select
                v-model="representative"
                :options="['Abdul Hamid', 'Sheikh Hasina', 'Khaleda Zia']"
              ></v-select>
            </div>
            <div class="col-md-2">
              <date-picker v-model="fromDate"></date-picker>
            </div>
            <div class="col-md-2">
              <date-picker v-model="toDate"></date-picker>
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-info px-4">
                <i class="fa fa-search"></i> Filter
              </button>
            </div>
          </div>
        </div>
        <button
          v-if="false"
          type="button"
          class="btn btn-dark btn-sm px-4 mb-1"
        >
          <i class="fa fa-print"></i> Print
        </button>
        <div class="table-responsive">
          <table class="table table-bordered table-striped text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient Name</th>
                <th>Patient Phone</th>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>Serial</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in 15" :key="i">
                <td>{{ i }}</td>
                <td>Rakib Islam</td>
                <td>01345678901</td>
                <td>Jhon Doe</td>
                <td>08-11-20</td>
                <td>13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assignBy: "All",
      fromDate: new Date("2020-10-31"),
      toDate: new Date("2020-10-31"),
      doctor: "Select Doctor",
      representative: "Select Representative",
    };
  },
  created() {},
};
</script>

<style lang="scss">
</style>