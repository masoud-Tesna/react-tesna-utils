"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitFullScreen = exports.enterFullScreen = void 0;
const enterFullScreen = (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
    else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    }
    else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        element.webkitRequestFullscreen();
    }
    else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
};
exports.enterFullScreen = enterFullScreen;
const exitFullScreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    }
    else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
        document.webkitExitFullscreen();
    }
    else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
};
exports.exitFullScreen = exitFullScreen;
