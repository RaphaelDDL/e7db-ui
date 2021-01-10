<script>
import { HorizontalBar } from "vue-chartjs";

export default {
    extends: HorizontalBar,
    props: {
        byRarity: {
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
            return this.byRarity?.reduce(
                (acc, current) => {
                    acc.data.push(current[1]);
                    acc.labels.push(current[0] + "★");
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
                        label: this.$t("heroes.grade"),
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
