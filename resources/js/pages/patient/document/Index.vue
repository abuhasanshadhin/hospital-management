<template>
  <div class="d-inline-block">
    <button @click="isModalShow = true" class="btn btn-dark btn-sm">
      <i class="fa fa-file"></i>
    </button>

    <transition name="scale">
      <div class="custom-modal" v-if="isModalShow">
        <div class="custom-modal-body col-md-10">
          <div class="custom-modal-header">
            <div class="clearfix">
              <div class="custom-modal-title">Patient Documents</div>
              <div @click="isModalShow = false" class="custom-close">
                <i class="fa fa-times"></i>
              </div>
            </div>
          </div>

          <div class="custom-modal-content">
            <div class="clearfix">
              <div class="float-left">
                <div class="border px-2 pb-1">
                  <i class="fa fa-wheelchair"></i> <b>Patient ID :</b> x6sgms
                </div>
              </div>
              <div class="float-right">
                <document-create></document-create>
              </div>
            </div>
            <data-table :headers="headers" :resources="documents">
              <template v-slot:[`sl`]="{ i, start }">{{
                i + start + 1
              }}</template>
              <template v-slot:[`action`]>
                <document-show></document-show>
                <document-edit></document-edit>
                <button class="btn btn-sm btn-danger" title="Delete">
                  <i class="fa fa-trash"></i>
                </button>
              </template>
            </data-table>
          </div>

          <div class="custom-modal-footer"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import DataTable from "../../../components/DataTable";
import DocumentCreate from "./Create";
import DocumentEdit from "./Edit";
import DocumentShow from "./Show";

export default {
  components: {
    DataTable,
    DocumentCreate,
    DocumentEdit,
    DocumentShow,
  },
  data() {
    return {
      isModalShow: false,
      documents: [
        {
          doctor: "Jhon Doe",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, eos?",
          date: "20-11-2020",
          added_by: "Abu H. Shadhin",
        },
      ],
      headers: [
        { text: "SL", key: "sl" },
        { text: "Doctor", key: "doctor", search: true },
        { text: "Description", key: "description", search: true },
        { text: "Date", key: "date" },
        { text: "Added By", key: "added_by" },
        { text: "Action", key: "action" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.av {
  font-size: 18px;
  padding-top: 8px;
}
.p-attr {
  font-size: 20px;
  font-weight: normal;
}
</style>