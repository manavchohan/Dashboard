import React from 'react';
import { GridComponent , ColumnsDirective , ColumnDirective , Resize , Sort , ContextMenu , Filter , Group , Page , Edit , Inject , Search , Toolbar , Selection } from '@syncfusion/ej2-react-grids';
import { customersData , customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className="dark:bg-secondary-dark-bg dark:text-white m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent width="auto" dataSource={customersData} toolbar={ ['Search','Delete','Add','Edit'] } selectionSettings={{type:'Multiple'}} editSettings={{ allowDeleting: true , allowEditing: true , allowAdding: true }} allowPaging allowSorting allowMultiSorting allowResizing >
        <ColumnsDirective>
        { customersGrid.map( ( item, index ) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Group , ContextMenu, Filter, Page , Edit , Search , Toolbar , Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers