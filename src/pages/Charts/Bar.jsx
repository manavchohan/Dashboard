import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  const legendFont = () => {
    let val = document.querySelector('#charts_chart_legend_shape_0').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_0').setAttribute('fill', val);
    let val1 = document.querySelector('#charts_chart_legend_shape_2').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_2').setAttribute('fill', val1);
    if(currentMode === 'Dark'){
    document.querySelector('#charts_chart_legend_shape_1').setAttribute('fill','#dcdcdc');
    document.querySelector('#charts_chart_legend_text_1').setAttribute('fill','#dcdcdc');
    }
  }

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
        <ChartComponent
          id="charts"
          loaded={()=>legendFont()}
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;