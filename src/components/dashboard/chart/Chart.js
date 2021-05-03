import { Bar } from "react-chartjs-2";

import classes from "./Chart.module.css";

export default function Chart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [0, 3000, 5000, 3000, 2000, 3000],
        backgroundColor: "rgba(255, 186, 51, 1)",
        stack: 1,
      },
      {
        label: "Outcome",
        data: [-3000, -5000, -3000, -2000, -3000, -1500],
        backgroundColor: "rgba(106, 64, 41, 1)",
        stack: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    barThickness: 16,
    borderRadius: 5,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div className={classes.chart}>
      <img
        className={classes.more}
        src="/assets/icons/more-icon.svg"
        alt="more"
      />
      <div className="header">
        <h1 className={classes.title}>Monthly Report</h1>
        <h3 className={classes.duration}>Last 6 months</h3>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
}
