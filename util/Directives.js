import { debounce } from "~/util/Utils";

export function inputDebounce(el, binding) {
    if (binding.value !== binding.oldValue) {
        // change debounce only if interval has changed
        el.oninput = debounce(
            function(/* evt */) {
                el.dispatchEvent(new Event("change"));
            },
            parseInt(binding.value) || 500
        );
    }
}
