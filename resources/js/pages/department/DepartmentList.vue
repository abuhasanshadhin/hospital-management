<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-2">
                <div class="clearfix">
                    <div class="float-left">
                        <h4 class="m-0 font-weight-bold text-primary">
                            Department List
                        </h4>
                    </div>
                    <div class="float-right">
                        <button
                            @click.prevent="showAddModal"
                            type="button"
                            class="btn btn-sm btn-primary"
                        >
                            <i class="fa fa-plus"></i> Add New
                        </button>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <data-table
                    :headers="headers"
                    :loading="$store.getters['department/loading']"
                    :resources="$store.getters['department/departments']"
                >
                    <template v-slot:[`sl`]="{ i, start }">{{
                        i + start + 1
                    }}</template>
                    <template v-slot:[`status`]="{ item }">
                        <div class="badge badge-success" v-if="item.status">
                            Active
                        </div>
                        <div class="badge badge-danger" v-if="!item.status">
                            Inactive
                        </div>
                    </template>
                    <template v-slot:[`action`]="{ item }">
                        <button
                            @click.prevent="showEditModal(item)"
                            type="button"
                            class="btn-action text-info"
                            title="Edit"
                        >
                            <i class="fa fa-edit"></i>
                        </button>
                        <button
                            @click="showDeleteConfirm(item.id)"
                            class="btn-action text-danger"
                            title="Delete"
                        >
                            <i class="fa fa-trash"></i>
                        </button>
                    </template>
                </data-table>
            </div>
        </div>

        <department-modal ref="addModal"></department-modal>

        <department-modal
            ref="editModal"
            :data="departmentInfo"
        ></department-modal>

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
import DepartmentModal from "./Department";
import DataTable from "../../components/DataTable";
import DeleteConfirm from "../../components/Confirm";
import Message from "../../components/Message";

export default {
    components: {
        DepartmentModal,
        DataTable,
        DeleteConfirm,
        Message,
    },
    data() {
        return {
            posts: [],
            headers: [
                { text: "SL", key: "sl" },
                { text: "Name", key: "name", search: true },
                { text: "Description", key: "description", search: true },
                { text: "Status", key: "status" },
                { text: "Action", key: "action" },
            ],
            departmentInfo: null,
            deleteId: null,
            messageShow: false,
            message: "",
        };
    },
    created() {
        this.$store.dispatch("department/getDepartments");
    },
    methods: {
        showEditModal(department) {
            this.departmentInfo = department;
            this.$refs.editModal.isModalShow = true;
        },
        showAddModal() {
            this.$refs.addModal.isModalShow = true;
        },
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
            let res = await this.$store.dispatch(
                "department/processDepartment",
                {
                    url: "delete_department",
                    data: { id: this.deleteId },
                }
            );
            if (res) this.deleteId = null;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
