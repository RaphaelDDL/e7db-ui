<script>
import { Pie } from "vue-chartjs";

export default {
    extends: Pie,
    props: {
        byClass: {
            type: Array,
            default: () => [],
        },
        options: {
            type: Object,
            default: () => {},
        },
        backgroundColor: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        processedData() {
            return this.byClass?.reduce(
                (acc, current) => {
                    acc.data.push(current[1]);
                    acc.labels.push(this.$t(`classes.${current[0]}`) || current[0]);
                    return acc;
                },
                {
                    data: [],
                    labels: [],
                }
            );
        },
        chartdata() {
            return {
                datasets: [
                    {
                        data: this.processedData.data,
                        backgroundColor: this.backgroundColor,
                        label: this.$t("filter.heroClass"),
                    },
                ],
                labels: this.processedData.labels,
            };
        },
    },
    mounted() {
        this.renderChart(this.chartdata, this.options);
    },
};
</script>
