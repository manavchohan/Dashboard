import React from 'react'
import { GridComponent , ColumnsDirective , ColumnDirective , Resize , Sort , ContextMenu , Filter , Group , Page , ExcelExport , PdfExport , Edit , Inject , Search , Toolbar } from '@syncfusion/ej2-react-grids';
import { ordersData , contextMenuItems , ordersGrid } from '../data/dummy';
import { Header } from '../components'; 
const Orders = () => {
  let g;
  const toolbarClick = (arg) => {
    switch (arg.item.text) {
      case 'PDF Export':
        g.pdfExport();
        break;
      case 'Excel Export':
        g.excelExport();
        break;
      default:
        console.log("error");
        break;
    }
  }

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg dark:text-white bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent id="gridcomp" ref={grid => g=grid } created={()=> document.getElementById(g.element.id+"_searchbar").addEventListener('keyup',(event)=> g.search(event.target.value))} toolbarClick={toolbarClick} dataSource={ordersData} toolbar={ ['Search','PdfExport','ExcelExport'] } selectionSettings={{type:'Multiple'}} allowPaging allowSorting allowPdfExport allowExcelExport allowMultiSorting allowResizing allowGrouping>
        <ColumnsDirective>
        { ordersGrid.map( ( item, index ) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Group , ContextMenu, Filter, Page , Edit , PdfExport, ExcelExport , Search , Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Orders