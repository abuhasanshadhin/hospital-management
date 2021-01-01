<template>
  <div>
    <div v-if="show" class="custom-modal">
      <div class="custom-modal-body rounded col-md-4">
        <div class="custom-modal-content py-5">
          <div class="text-center text-danger">
            <i class="fa fa-question-circle fa-3x"></i>
          </div>
          <h3 class="text-center text-dark mt-2">Are you sure?</h3>
          <div class="text-center mt-4">
            <button
              @click="$emit('confirm')"
              class="btn btn-sm btn-success px-3 mr-2"
            >
              Yes
            </button>
            <button @click="show = false" class="btn btn-sm btn-dark px-3">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
</style>