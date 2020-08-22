<script>
import { Pie } from "vue-chartjs";

export default {
    extends: Pie,
    props: {
        byElement: {
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
        bgToCorrectColor() {
            // chartColors.red,
            // chartColors.orange,
            // chartColors.yellow,
            // chartColors.green,
            // chartColors.blue,
            // chartColors.purple,
            // chartColors.gray,
            return {
                fire: this.backgroundColor[0],
                wind: this.backgroundColor[3],
                ice: this.backgroundColor[4],
                light: this.backgroundColor[2],
                dark: this.backgroundColor[5],
            };
        },
        processedData() {
            return this.byElement?.reduce(
                (acc, current) => {
                    acc.labels.push(this.$t(`elements.${current[0]}`) || current[0]);
                    acc.backgroundColor.push(this.bgToCorrectColor[current[0]]);
                    acc.data.push(current[1]);
                    return acc;
                },
                {
                    data: [],
                    labels: [],
                    backgroundColor: [],
                }
            );
        },
        chartdata() {
            return {
                datasets: [
                    {
                        data: this.processedData.data,
                        backgroundColor: this.processedData.backgroundColor,
                        label: this.$t("filter.element"),
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
