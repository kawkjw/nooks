export const useFullScreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            const { current } = element;
            if (current.requestFullScreen) {
                current.requestFullScreen();
            } else if (current.webkitRequestFullScreen) {
                current.webkitRequestFullScreen();
            } else if (current.mozRequestFullScreen) {
                current.mozRequestFullScreen();
            } else if (current.msRequestFullScreen) {
                current.msRequestFullScreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};
