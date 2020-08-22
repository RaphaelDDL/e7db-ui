<script>
import { Doughnut } from "vue-chartjs";

export default {
    extends: Doughnut,
    props: {
        byML: {
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
            return this.byML?.reduce(
                (acc, current) => {
                    const label = String(current[0]);
                    acc.data.push(current[1]);
                    acc.labels.push(label === "false" ? this.$t("ranking.rgb") : this.$t("ranking.moonlight"));
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
                        label: this.$t("ranking.moonlight"),
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
