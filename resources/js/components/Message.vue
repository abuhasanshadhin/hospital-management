<template>
  <div>
    <div v-if="show" class="custom-modal">
      <div class="custom-modal-body rounded col-md-4">
        <div class="custom-modal-content py-5">
          <div class="text-center">
            <slot name="icon">
              <i :class="[icon, iconColor]" class="fa fa-3x"></i>
            </slot>
          </div>
          <h3 class="text-center text-dark mt-3">
            <slot name="content">{{ message }}</slot>
          </h3>
          <div class="text-center mt-4">
            <slot name="buttons">
              <button @click="$emit('ok')" class="btn btn-sm btn-primary px-3">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: { default: false },
    message: { default: null },
    icon: { default: "fa-info-circle" },
    iconColor: { default: "text-info" },
  },
};
</script>

<style>
</style>