import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
    AOS.init({
        duration: 800, // duración en ms
        once: true,    // animar solo una vez
        easing: "ease-in-out", // animación más suave
    });
}
