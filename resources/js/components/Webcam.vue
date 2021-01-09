<template>
    <div>
        <div v-show="cameraShow" class="custom-modal">
            <div class="custom-modal-body">
                <video id="webcam" autoplay></video>
                <canvas id="canvas" class="d-none"></canvas>
                <audio id="snapSound" :src="snapSound" preload="auto"></audio>
                <div class="text-center buttons">
                    <button
                        @click.prevent="close"
                        type="button"
                        class="btn-dark btn"
                    >
                        Close
                    </button>
                    <button
                        @click.prevent="takePhoto"
                        type="button"
                        class="btn-primary btn"
                    >
                        Take Photo
                    </button>
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
        openCamera() {
            this.webCamObj = this._webCam();
            this.webCamObj
                .start()
                .then((result) => {
                    console.log("Webcam working");
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        async takePhoto() {
            if (this.webCamObj == null) return;
            let picture = this.webCamObj.snap();
            this.webCamObj.stop();
            this.cameraShow = false;
            let file = await this.dataUrlToFile(picture);
            this.$parent.getCapturedFile(file);
        },
        close() {
            this.webCamObj.stop();
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
#webcam {
    width: 100%;
    height: 330px;
    background: #000000;
}
.custom-modal-body {
    height: 390px;
    width: 460px;
    padding: 10px;
    .buttons {
        padding-top: 3px;
        button {
            padding: 3px 15px;
            border-radius: unset;
        }
    }
}
</style>
