import React from 'react';
import { GridComponent , ColumnsDirective , ColumnDirective , Resize , Sort , ContextMenu , Filter , Group , Page , ExcelExport , PdfExport , Edit , Inject , Search , Toolbar } from '@syncfusion/ej2-react-grids';
import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import { employeesData , employeesGrid } from '../data/dummy';
import { Header } from '../components'; 

const Employees = () => {
  let g;
  return (
    <div className="dark:bg-secondary-dark-bg dark:text-white m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <AutoCompleteComponent id='atcelement' dataSource={employeesData} fields={{ value:'Name' }} change={ (e) => g.search(e.value) } showClearButton={true}></AutoCompleteComponent>
      <GridComponent width="auto" ref={grid => g=grid } dataSource={employeesData}  selectionSettings={{type:'Multiple'}} allowPaging allowSorting allowPdfExport allowExcelExport allowMultiSorting allowResizing >
        <ColumnsDirective>
        { employeesGrid.map( ( item, index ) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Group , ContextMenu, Filter, Page, ExcelExport , Edit , PdfExport, Search , Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Employees