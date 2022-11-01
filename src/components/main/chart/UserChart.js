import React from 'react';
import './UserChart.css';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserChart = () => {
  const options = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        display: true,
      },
      y1: {
        display: true,

        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };
  //   doughnut chart
  const data1 = {
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="row  d-flex justify-content-center  align-items-center">
      <div className="col-md-4 box">
        <p class="fw-bold">User Activity</p>
        This Month
        <h5>16,543</h5>
        <Line style={{ height: '170px' }} options={options} data={data} />
      </div>
      <div className="col-md-4 box mx-3">
        <p class="fw-bold">Order stats</p>
        <Doughnut data={data1} />
      </div>

      <div className="col-md-3 box">
        <p class="fw-bold">Top Product</p>
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col">
            <div>
              Polo blue T-shirt
              <p>$24.4</p>
            </div>
            <div>
              Hoodie for man
              <p>$24.4</p>
            </div>
            <div>
              Red color cap
              <p>$4.4</p>
            </div>
            <div>
              Pocket T-shirt
              <p>$22.4</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="m-0">3.4k</div>
            <div className="my-5">3.4k</div>
            <div className="my-5">5.4k</div>
            <div className="mb-1">3.4k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChart;
