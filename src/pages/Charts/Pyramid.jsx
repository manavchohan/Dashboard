import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const Pyramid = () => {
  const { currentMode } = useStateContext();

  const legendFont = () => {
    let val = document.querySelector('#pyramid-chart_chart_legend_shape_0').getAttribute('fill');
    document.querySelector('#pyramid-chart_chart_legend_text_0').setAttribute('fill', val);
    let val1 = document.querySelector('#pyramid-chart_chart_legend_shape_2').getAttribute('fill');
    document.querySelector('#pyramid-chart_chart_legend_text_2').setAttribute('fill', val1);
    let val2 = document.querySelector('#pyramid-chart_chart_legend_shape_3').getAttribute('fill');
    document.querySelector('#pyramid-chart_chart_legend_text_3').setAttribute('fill', val2);
    let val3 = document.querySelector('#pyramid-chart_chart_legend_shape_4').getAttribute('fill');
    document.querySelector('#pyramid-chart_chart_legend_text_4').setAttribute('fill', val3);
    let val4 = document.querySelector('#pyramid-chart_chart_legend_shape_5').getAttribute('fill');
    document.querySelector('#pyramid-chart_chart_legend_text_5').setAttribute('fill', val4);
    if(currentMode === 'Dark'){
    document.querySelector('#pyramid-chart_chart_legend_shape_1').setAttribute('fill','#dcdcdc');
    document.querySelector('#pyramid-chart_chart_legend_text_1').setAttribute('fill','#dcdcdc');
    }
  }

  return (
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          loaded={()=>legendFont()}
          id="pyramid-chart"
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;