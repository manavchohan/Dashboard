import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

const Doughnut = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  const legendFont = () => {
    let val = document.querySelector('#charts_chart_legend_shape_0').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_0').setAttribute('fill', val);
    let val1 = document.querySelector('#charts_chart_legend_shape_2').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_2').setAttribute('fill', val1);
    let val2 = document.querySelector('#charts_chart_legend_shape_3').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_3').setAttribute('fill', val2);
    let val3 = document.querySelector('#charts_chart_legend_shape_4').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_4').setAttribute('fill', val3);
    let val4 = document.querySelector('#charts_chart_legend_shape_5').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_5').setAttribute('fill', val4);
    let val5 = document.querySelector('#charts_chart_legend_shape_6').getAttribute('fill');
    document.querySelector('#charts_chart_legend_text_6').setAttribute('fill', val5);
    if(currentMode === 'Dark'){
    document.querySelector('#charts_chart_legend_shape_1').setAttribute('fill','#dcdcdc');
    document.querySelector('#charts_chart_legend_text_1').setAttribute('fill','#dcdcdc');
    }
  }

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity }}
      loaded={()=>legendFont()}
      height={height}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Doughnut;