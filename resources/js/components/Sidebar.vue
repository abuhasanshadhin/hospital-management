<template>
  <div class="bg-gradient-primary">
    <ul
      :class="{ toggled: showSidebar }"
      class="navbar-nav sidebar sidebar-dark accordion"
    >
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>

      <hr class="sidebar-divider my-0 mb-2" />

      <li v-for="(menuItem, ind) in menuItems" :key="ind" class="nav-item">
        <template v-if="menuItem.children">
          <div
            @click="activateMenuItem(menuItem)"
            class="nav-link cursor-pointer"
            :class="{ collapsed: !menuItem.childrenShow }"
            data-toggle="collapse"
          >
            <i :class="menuItem.icon"></i>
            <span>{{ menuItem.text }}</span>
          </div>
          <div
            v-if="menuItem.childrenShow"
            v-on-clickaway="() => (menuItem.childrenShow = false)"
            class="collapse show"
          >
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link
                v-for="(child, cInd) in menuItem.children"
                :key="cInd"
                :to="child.link"
                class="collapse-item"
              >
                {{ child.text }}
              </router-link>
            </div>
          </div>
        </template>
        <template v-else>
          <router-link :to="menuItem.link" class="nav-link">
            <i :class="menuItem.icon"></i>
            <span>{{ menuItem.text }}</span>
          </router-link>
        </template>
      </li>

      <hr class="sidebar-divider" />

      <div class="text-center d-none d-md-inline">
        <button
          @click="
            menuItems.map(item => (item.childrenShow = false));
            showSidebar = !showSidebar;
          "
          class="rounded-circle border-0"
          id="sidebarToggle"
        ></button>
      </div>
    </ul>
  </div>
</template>

<script>
import { directive as onClickAway } from "vue-clickaway";

export default {
  directives: {
    onClickaway: onClickAway
  },
  data() {
    return {
      showSidebar: false,
      menuItems: [
        {
          text: "Dashboard",
          link: "/",
          icon: "fas fa-home"
        },
        {
          text: "Department",
          link: "/department",
          icon: "fa fa-sitemap"
        },
        {
          text: "Doctor",
          link: "/doctors",
          icon: "fa fa-user-md"
        },
        {
          text: "Patient",
          link: "/patient",
          icon: "fa fa-wheelchair"
        },
        {
          text: "Appointment",
          icon: "fa fa-edit",
          childrenShow: false,
          children: [
            {
              text: "Appointment List",
              link: "/appointment"
            },
            {
              text: "Appointment Report",
              link: "/appointment/report"
            }
          ]
        },
        {
          text: "Prescription",
          icon: "fa fa-edit",
          childrenShow: false,
          children: [
            {
              text: "Prescription List",
              link: "/prescription"
            },
            {
              text: "Case Study List",
              link: "/"
            }
          ]
        },
        {
          text: "Settings",
          icon: "fa fa-cog",
          childrenShow: false,
          children: [
            {
              text: "Access Control List",
              link: "/settings/acl"
            }
          ]
        }
      ]
    };
  },
  methods: {
    activateMenuItem(menuItem) {
      if (menuItem.childrenShow) {
        menuItem.childrenShow = !menuItem.childrenShow;
      } else {
        this.menuItems.map(item => (item.childrenShow = false));
        menuItem.childrenShow = !menuItem.childrenShow;
      }
    }
  }
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
  user-select: none;
}
</style>