import { authentication } from "~/util/Constants";

export default function({ $axios }) {
    if (authentication.value) {
        $axios.onRequest(config => {
            config.headers.common[authentication.key] = authentication.value;
        });
    }
}
