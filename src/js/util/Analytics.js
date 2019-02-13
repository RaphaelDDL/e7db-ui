// import { gaPageView } from '@/js/util/Analytics';
// gaPageView(this.$ga);
export function gaPageView(this$Ga) {
    this$Ga.page({
        page: window.location.pathname,
        title: document.title,
        location: window.location.href,
    });
}
