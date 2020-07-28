import { authentication } from "~/util/Constants";

export default function ({ $axios }) {
    $axios.onRequest((config) => {
        if (authentication.value) {
            config.headers.common[authentication.key] = authentication.value;
        }
    });
}
