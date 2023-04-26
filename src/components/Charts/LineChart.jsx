import React from 'react';
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , LineSeries , DateTime , Legend , Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider'

const LineChart = () => {
  const { currentMode } = useStateContext();

  const legendFont = () => {
    let val = document.querySelector('#line-chart_chart_legend_shape_0').getAttribute('fill');
    document.querySelector('#line-chart_chart_legend_text_0').setAttribute('fill', val);
    let val1 = document.querySelector('#line-chart_chart_legend_shape_2').getAttribute('fill');
    document.querySelector('#line-chart_chart_legend_text_2').setAttribute('fill', val1);
    if(currentMode === 'Dark'){
    document.querySelector('#line-chart_chart_legend_shape_1').setAttribute('fill','#dcdcdc');
    document.querySelector('#line-chart_chart_legend_text_1').setAttribute('fill','#dcdcdc');
    }
  }

  return (
    <ChartComponent loaded={()=>legendFont()} id="line-chart" height="420px" primaryXAxis={LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} chartArea={{ border: { width : 0 } }} tooltip={{enable:true}} background={currentMode === 'Dark' ? '#33373E' : '#fff' }>
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=> (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart