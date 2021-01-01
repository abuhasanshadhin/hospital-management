<template>
  <div>
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div class="clearfix">
          <div class="float-left">
            <h4 class="m-0 font-weight-bold text-primary">Role List</h4>
          </div>
          <div class="float-right">
            <create-modal></create-modal>
          </div>
        </div>
      </div>
      <div class="card-body">
        <data-table :headers="headers" :resources="roles">
          <template v-slot:[`sl`]="{ i, start }">{{ i + start + 1 }}</template>
          <template v-slot:[`permissions`]="{ item }">
            <div
              v-for="(permission, i) in item.permissions"
              :key="i"
              class="badge badge-info mr-1"
            >
              {{ permission.name }}
            </div>
          </template>
          <template v-slot:[`status`]="{ item }">
            <div class="badge badge-success" v-if="item.status">Active</div>
            <div class="badge badge-danger" v-if="!item.status">Inactive</div>
          </template>
          <template v-slot:[`action`]="{ item }">
            <edit-modal :data="item"></edit-modal>
            <button
              @click="showDeleteConfirm(item.id)"
              class="btn btn-sm btn-danger"
            >
              <i class="fa fa-trash"></i>
            </button>
          </template>
        </data-table>
      </div>
    </div>
    <delete-confirm
      ref="deleteConfirm"
      @confirm="deleteDepartment"
    ></delete-confirm>
    <message
      :message="message"
      :show="messageShow"
      @ok="messageShow = false"
      iconColor="text-danger"
    ></message>
  </div>
</template>

<script>
import CreateModal from "./Create";
import EditModal from "./Edit";
import DataTable from "../../../components/DataTable";
import DeleteConfirm from "../../../components/Confirm";
import Message from "../../../components/Message";

export default {
  components: {
    CreateModal,
    EditModal,
    DataTable,
    DeleteConfirm,
    Message,
  },
  data() {
    return {
      posts: [],
      headers: [
        { text: "SL", key: "sl" },
        { text: "Role", key: "name", search: true },
        { text: "Permissions", key: "permissions" },
        { text: "Status", key: "status" },
        { text: "Action", key: "action" },
      ],
      roles: [
        {
          id: 1,
          name: "Doctor",
          permissions: [
            { id: 1, name: "Patient Entry" },
            { id: 2, name: "Patient Edit" },
            { id: 3, name: "Patient Delete" },
          ],
        },
      ],
      deleteId: null,
      messageShow: false,
      message: "",
    };
  },
  created() {},
  methods: {
    showDeleteConfirm(id) {
      this.deleteId = id;
      this.$refs.deleteConfirm.show = true;
    },
    async deleteDepartment() {
      this.$refs.deleteConfirm.show = false;
      if (this.deleteId == null) {
        this.message = "Something went wrong!";
        this.messageShow = true;
        return;
      }
      let res = await this.$store.dispatch("department/deleteDepartment", {
        id: this.deleteId,
      });
      if (res) this.deleteId = null;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>