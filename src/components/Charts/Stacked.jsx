import React, { useEffect }  from 'react';
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , Legend , Category , StackingColumnSeries , Tooltip } from '@syncfusion/ej2-react-charts';
import {stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({width,height}) => {
  const {currentColor, currentMode} = useStateContext();

  const legendFont = () => {
    document.querySelector('#charts_chart_legend_shape_0').setAttribute('fill',currentColor);
    document.querySelector('#charts_chart_legend_text_0').setAttribute('fill', currentColor);
    if(currentMode === 'Dark'){
    document.querySelector('#charts_chart_legend_shape_1').setAttribute('fill','#dcdcdc');
    document.querySelector('#charts_chart_legend_text_1').setAttribute('fill','#dcdcdc');
    }
  }

  return (
    <ChartComponent loaded={()=>legendFont()} enableAnimation={true} width={width} height={height} palettes={[currentColor,'#4b5563']} id="charts" background={currentMode === 'Dark' ? '#33373E' : '#fff' } primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} chartArea={{border: {width:0}}} tooltip={{ enable: true }} LegendSettings={{ background: currentMode === 'Dark' ? '#33373E' : '#fff'}}>
      <Inject services={[Legend, Category, StackingColumnSeries , Tooltip ]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=> <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked