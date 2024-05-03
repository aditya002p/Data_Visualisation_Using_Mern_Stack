import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Heading } from "@chakra-ui/react";

const IntensityChart = ({ data }) => {
  const [animatedData, setAnimatedData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (animatedData.length < data.length) {
        const newData = data.slice(0, animatedData.length + 1);
        setAnimatedData(newData);
      } else {
        clearInterval(interval);
      }
    }, 1000); // Adjust the delay time as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [data, animatedData]);

  const intensityData = animatedData.map((item) => item.intensity);
  const years = animatedData.map((item) => item.start_year);

  const getColor = (value) => {
    const colors = [
      "#7F00FF", // Green
      "#F2B93B", // Yellow
      "#FF8000", // Orange
      "#FF453A", // Red
    ];
    const threshold = Math.max(...intensityData) / 4;
    if (value < threshold) {
      return colors[0];
    } else if (value < threshold * 2) {
      return colors[1];
    } else if (value < threshold * 3) {
      return colors[2];
    } else {
      return colors[3];
    }
  };

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "Intensity",
        backgroundColor: intensityData.map((value) => getColor(value)),
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        borderRadius: 2,
        data: intensityData,
      },
    ],
  };

  const chartOptions = {
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "white",
        borderWidth: 1,
        cornerRadius: 5,
        displayColors: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "start",
        offset: -22,
        font: {
          size: 10,
          weight: "bold",
        },
        formatter: (value) => value + "%",
        shadowBlur: 2,
        shadowColor: "white",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: "Roboto",
            size: 14,
            weight: "bold",
          },
          callback: (value) => value + "%",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeInOutQuart", // Use a smooth easing function
      mode: "progressive",
    },
  };

  return (
    <div
      style={{
        margin: "80px",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        borderRadius: "8px",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Heading as="h2" mb={8}>
        Intensity Chart
      </Heading>
      <Bar
        data={chartData}
        options={chartOptions}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default IntensityChart;
