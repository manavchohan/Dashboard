import React from 'react';
import { Header , LineChart } from '../../components';

const Line = () => {
  return (
    <div className='m-4 flex-col justify-center align-middle md:m-10 m-24 p-10 bg-white dark:bg-secondary-dark-bg dark:text-white rounded-3xl'>
      <Header category="Chart" title="Inflation Rate" />
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}

export default Line