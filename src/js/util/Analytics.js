// import { gaPageView } from '@/js/util/Analytics';
// gaPageView();

import { page, event, exception } from 'vue-analytics';

export function gaPageView() {
    page({
        page: window.location.pathname,
        title: document.title,
        location: window.location.href,
    });
}

export function gaException(error) {
    const exceptionError = error.message || error;
    exception(exceptionError);
}

export function gaEvent(obj) {
    event(obj);
}
