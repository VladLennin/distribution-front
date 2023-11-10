import React, {useEffect, useState} from 'react';
import distributionStore from "../../entity/distribution/store/DistributionStore";
import {ArcElement, Chart, Legend, Tooltip} from "chart.js";
import {Pie} from "react-chartjs-2";
import css from "./DistributionsDiagramsPage.module.css"
import {randomColors} from "../../shared/enum/colors";
import LoadingSpinner from "../../feature/LoadingSpinner/LoadingSpinner";
import {observer} from "mobx-react-lite";
import LayoutContainer from "../../shared/ui/LayoutContainer/LayoutContainer";
import Title from "../../shared/ui/Title/Title";
import SubTitle from "../../shared/ui/SubTitle/SubTitle";

Chart.register(ArcElement, Tooltip, Legend);

const DistributionsDiagramsPage = observer(() => {

    const options = {
        indexAxis: 'y' as const,
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
            },
        },
    };


    const {distributions, isLoading} = distributionStore;
    // @ts-ignore
    const [chartData, setChartData] = useState<Chart.ChartData>({labels: [], datasets: []});

    const extractChartData = () => {
        const vocCounts: { [key: string]: number } = {};

        distributions.forEach((distribution) => {
            const {position} = distribution;
            const {voc} = position;

            if (vocCounts[voc]) {
                vocCounts[voc] += 1;
            } else {
                vocCounts[voc] = 1;
            }
        });

        const labels = Object.keys(vocCounts);
        const totalVocCount = Object.values(vocCounts).reduce((total, count) => total + count, 0);

        // Calculate percentages and round them to two decimal places
        const percentages = Object.values(vocCounts).map(count => ((count / totalVocCount) * 100).toFixed(2));


        const backgroundColors = randomColors.slice(0, labels.length);

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: '%',
                    data: percentages,
                    backgroundColor: backgroundColors,
                    borderColor: "#1B1B1E", // Adjust border alpha if needed
                    borderWidth: 2,
                },
            ],
        });
    };
    useEffect(() => {
        distributionStore.getDistributionsAll()
    }, []);

    useEffect(() => {
        extractChartData();
    }, [isLoading]);

    return (
        isLoading ? <LoadingSpinner/> :
            <div className={css.container}>
                <div>
                    <Title value={"VOC Diagrams"}/>
                    <LayoutContainer>
                        <SubTitle value={`Count values: ${distributions.length}`}/>
                        <div className={css.containerDiagram}>
                            <Pie options={options} data={chartData}/>
                        </div>
                    </LayoutContainer>
                </div>

                <div>
                    <Title value={"VOC Diagrams"}/>
                    <LayoutContainer>
                        <div className={css.containerDiagram}>
                            <Pie options={options} data={chartData}/>
                        </div>
                    </LayoutContainer>
                </div>
            </div>
    );
});

export default DistributionsDiagramsPage;