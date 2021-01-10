<template>
    <div>
        <div v-show="cameraShow" class="custom-modal">
            <div class="custom-modal-body">
                <div class="v-wrapper">
                    <video
                        id="webcam"
                        autoplay
                        playsinline
                        oncontextmenu="return false"
                    ></video>
                    <canvas id="canvas" class="d-none"></canvas>
                    <audio
                        id="snapSound"
                        :src="snapSound"
                        preload="auto"
                    ></audio>
                    <button
                        @click.prevent="flipWebCam"
                        type="button"
                        class="flip-webcam"
                        :disabled="!isWebCamStarted"
                    >
                        <i class="fab fa-flipboard fa-2x"></i>
                    </button>
                </div>
                <div class="clearfix">
                    <div class="float-left">
                        <select
                            @change="onChangeCamera($event)"
                            class="form-control form-control-sm webcam-list"
                            :disabled="!webCamList.length"
                        >
                            <option
                                v-for="(_webCam, i) in webCamList"
                                :key="i"
                                :value="_webCam.deviceId"
                            >
                                {{ _webCam.label }}
                            </option>
                        </select>
                    </div>
                    <div class="float-right buttons">
                        <button
                            @click.prevent="closeWebCam"
                            type="button"
                            class="btn-dark btn"
                            :disabled="!isWebCamStarted"
                        >
                            Close
                        </button>
                        <button
                            @click.prevent="takePhoto"
                            type="button"
                            class="btn-primary btn"
                            :disabled="!isWebCamStarted"
                        >
                            Take Photo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Webcam from "../utils/webcam-easy";

export default {
    data() {
        return {
            cameraShow: false,
            webCamObj: null,
            webCamList: [],
            isWebCamStarted: false,
            snapSound: `${window.publicPath}/audio/snap.wav`,
        };
    },
    methods: {
        _webCam() {
            const webcamElement = document.getElementById("webcam");
            const canvasElement = document.getElementById("canvas");
            const snapSoundElement = document.getElementById("snapSound");
            const webcam = new Webcam(
                webcamElement,
                "user",
                canvasElement,
                snapSoundElement
            );
            return webcam;
        },
        init() {
            this.webCamObj = this._webCam();
            this.openCamera();
        },
        openCamera() {
            if (this.webCamObj == null) return;
            this.webCamObj
                .start()
                .then((result) => {
                    this.webCamList = this.webCamObj.webcamList;
                    this.isWebCamStarted = true;
                    console.log("Webcam Started");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        onChangeCamera(e) {
            if (this.webCamObj == null) return;
            let _deviceId = e.target.value;
            this.webCamObj._selectedDeviceId = _deviceId;
            this.webCamObj.stop();
            this.isWebCamStarted = false;
            this.openCamera();
        },
        flipWebCam() {
            if (this.webCamObj == null) return;
            this.webCamObj.flip();
            this.stopWebCam();
            this.openCamera();
        },
        async takePhoto() {
            if (this.webCamObj == null || !this.isWebCamStarted) return;
            let picture = this.webCamObj.snap();
            this.closeWebCam();
            let file = await this.dataUrlToFile(picture);
            this.$parent.getCapturedFile(file); // parent component method called
        },
        stopWebCam() {
            if (this.webCamObj == null) return;
            this.webCamObj.stop();
            this.isWebCamStarted = false;
        },
        closeWebCam() {
            this.stopWebCam();
            this.webCamList = [];
            this.cameraShow = false;
        },
        async dataUrlToFile(dataUrl, FileName) {
            const res = await fetch(dataUrl);
            const blob = await res.blob();
            return new File([blob], FileName || "NewFile.png", {
                type: "image/png",
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.custom-modal-body {
    height: 390px;
    width: 460px;
    padding: 10px;
    video {
        width: 100%;
        height: 330px;
        background: rgb(0, 0, 0);
    }
    .v-wrapper {
        position: relative;
        .flip-webcam {
            position: absolute;
            left: 0;
            bottom: 6px;
            border: none;
            color: #fff;
            background: rgba(0, 0, 0, 0.6);
            padding-top: 3px;
        }
        .flip-webcam:focus {
            outline: 0;
        }
    }
    .buttons {
        padding-top: 3px;
        button {
            padding: 3px 15px;
            border-radius: unset;
        }
    }
    .webcam-list {
        margin-top: 3px;
        padding: 5px 10px;
    }
}
</style>
