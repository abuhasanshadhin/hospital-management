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
        <div v-if="!isOnLine" class="access-denied">
            <div class="message-body">
                <h1>No internet</h1>
                <ul>
                    <li>Checking the network cables, modem, and router</li>
                    <li>Reconnecting to Wi-Fi</li>
                </ul>
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
        NavBar: Navbar,
    },
    data() {
        return {
            isOnLine: true,
        };
    },
    created() {
        setInterval(() => {
            // this.isOnLine = navigator.onLine;
        }, 1);
    },
};
</script>

<style lang="scss" scoped>
.access-denied {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 99999;
    .message-body {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 400px;
        color: #ffffff;
        h1 {
            font-size: 40px;
            color: rgb(255, 20, 20);
            text-align: center;
        }
    }
}
</style>
