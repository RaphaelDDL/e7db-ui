<script>
import { Pie } from "vue-chartjs";
import ChartJsPluginDataLabels from "chartjs-plugin-datalabels";

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
                formatter: (value, ctx) => {
                    const dataArr = ctx.chart.data.datasets[0].data;
                    const sum = dataArr.reduce((acc, data) => {
                        acc = acc + data;
                        return acc;
                    }, 0);
                    return ((value * 100) / sum).toFixed(2) + "%";
                },
            };
        },
    },
    mounted() {
        this.addPlugin(ChartJsPluginDataLabels);
        this.renderChart(this.chartdata, this.options);
    },
};
</script>
