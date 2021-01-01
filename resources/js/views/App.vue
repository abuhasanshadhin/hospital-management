<template>
  <div>
    <div id="wrapper">
      <!-- Sidebar -->
      <side-bar></side-bar>

      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <!-- Navbar -->
          <nav-bar></nav-bar>

          <div class="container-fluid">
            <!-- Router View -->
            <router-view></router-view>
          </div>
        </div>

        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default {
  components: {
    SideBar: Sidebar,
    NavBar: Navbar
  },
  created() {}
};
</script>

<style>
</style>