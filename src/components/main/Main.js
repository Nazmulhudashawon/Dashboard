import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

import './Main.css';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { GrCart } from 'react-icons/gr';
import { BsPeople } from 'react-icons/bs';
import UserChart from './chart/UserChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const Main = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        
      },
    },
  };
  const labels = [
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Overview',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
        backgroundColor: '#1b9de3',
      },
     
    ],
  };

  return (
    <div>
      
        <div class="row d-flex justify-content-center align-items-center container mt-3 m-0   ">
         
         <div class="col style">
            <div className="row  d-flex justify-content-center align-items-center">
              <div className="col">
                <h1>
                  <AiOutlineDollarCircle />
                </h1>
              </div>
              <div className="col ">
                <p> Revenue</p>
                <p>$21456</p>
              </div>
              <div className="col">
                <p className="mt-4">+2.65%</p>
              </div>
            </div>
          </div>
          <div class="col style mx-3">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col">
                <h1>
                  <GrCart />
                </h1>
              </div>
              <div className="col">
                <p>Orders</p>
                <p>5643</p>
              </div>
              <div className="col">
                <p className="mt-4">-0.82%</p>
              </div>
            </div>
          </div>
          <div class="col style">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col">
                <h1>
                  <BsPeople />
                </h1>
              </div>
              <div className="col">
                <p>Customers</p>
                <p>45254</p>
              </div>
              <div className="col">
                <p className="mt-4">-1.04%</p>
              </div>
            </div>
          </div>
          </div>
         
        

        {/* overview */}

       <div className='container'>
       <div class="row style  d-flex justify-content-center align-items-center mx-auto my-4 ">
          <p>Overview</p>
          <div class="col-md-4 ">
            <div className="row d-flex justify-content-center  align-items-center  ">
              <div className="col ">
                <div className='m-2'>
                This Month
                <h3>$24,568</h3>
                </div>
                <div className='m-2'>
                  Orders
                  <p>5,643</p>
                </div>
                <div className='m-2'>
                  Order Value
                  <p>12.03%</p>
                </div>
                <div className='m-2'>
                  Income
                  <p>$35,652</p>
                </div>
              </div>
              <div className="col">
                <p className="mt-5 text-success">+2.65%</p>
               
                <div className='m-2'>
                  Sales
                  <p>16,273</p>
                </div>
                <div className='m-2'>
                  Customers
                  <p>21,456</p>
                </div>
                <div className='m-2'>
                  Expenses
                  <p>$12,246</p>
                </div>
                
              </div>
            </div>
          </div>

          <div class="col-md-8 ">
            <Bar options={options} data={data} />
          </div>
        </div>
        <div > 
            <UserChart />
          </div>
       </div>
         



      
    </div>
  );
};

export default Main;
