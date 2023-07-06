import { Line } from 'react-chartjs-2';
import Header from './header'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const LineGraph = ({ title, rightTitle, data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: true,
      title: {
        display: true,
        text: '',
      },
      labels: {
        render: 'label',
      }
    }
  };

  return (
    <div className="mx-auto lg:w-[49%] 2xl:w-[49%] sm:w-full xs:w-full md:w-full h-[400px] float-left bg-white dark:bg-gray-800 rounded-[10px] px-[20px] mb-[20px] border-1 border-b-gray-200 dark:border-gray-600 lg:px-[20px] sm:px-[10px]">
      < Header title={title} rightTitle={rightTitle} />
      <Line data={data} options={options} className='w-full pb-6' />
    </div >
  );
};

export default LineGraph;