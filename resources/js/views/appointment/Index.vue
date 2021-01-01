<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div class="clearfix">
          <div class="float-left">
            <h4 class="m-0 font-weight-bold text-primary">Appointment List</h4>
          </div>
          <div class="float-right">
            <router-link to="/appointment/add" class="btn btn-sm btn-primary">
              <i class="fa fa-plus"></i> Add New
            </router-link>
          </div>
        </div>
      </div>
      <div class="card-body">
        <data-table :headers="headers" :resources="posts">
          <template v-slot:[`sl`]="{ i, start }">{{ i + start + 1 }}</template>
          <template v-slot:[`status`]="{ item }">
            <div class="badge badge-success" v-if="item.status">Active</div>
            <div class="badge badge-danger" v-if="!item.status">Inactive</div>
          </template>
          <template v-slot:[`action`]="{ item }">
            <router-link
              :to="`/appointment/${item.id}/edit`"
              class="btn btn-sm btn-info"
              title="Edit"
            >
              <i class="fa fa-edit"></i>
            </router-link>
            <button class="btn btn-sm btn-danger" title="Delete">
              <i class="fa fa-trash"></i>
            </button>
          </template>
        </data-table>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "../../components/DataTable";

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      posts: [],
      headers: [
        { text: "SL", key: "sl" },
        { text: "Title", key: "title", search: true },
        { text: "Description", key: "description", search: true },
        { text: "Status", key: "status" },
        { text: "Action", key: "action" },
      ],
      assignBy: "All",
      fromDate: new Date("2020-10-31"),
      toDate: new Date("2020-10-31"),
      doctor: "Select Doctor",
      representative: "Select Representative",
    };
  },
  created() {
    for (let i = 0; i < 50; i++) {
      this.posts.push({
        id: i + 1,
        title: "Title " + (i + 1),
        description: "Description " + (i + 1),
        status: [0, 1][Math.floor(Math.random() * 2)],
      });
    }
  },
};
</script>

<style lang="scss">
</style>