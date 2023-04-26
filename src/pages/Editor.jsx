import React from 'react';
import { HtmlEditor , Image , Inject , Link , QuickToolbar , RichTextEditorComponent , Toolbar , Table , Count , Resize , FileManager , PasteCleanup } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Editor = () => {
  const {currentColor, currentMode} = useStateContext();

  return (
    <div className='dark:bg-secondary-dark-bg dark:text-white m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Editor" />
      <RichTextEditorComponent background={currentMode === 'Dark' ? '#33373E' : '#fff' } toolbarSettings={{items:[ 'Bold', 'Italic', 'Underline', 'StrikeThrough','FontName', 'FontSize', 'FontColor', 'BackgroundColor','LowerCase', 'UpperCase', '|','Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList','Outdent', 'Indent','SubScript','SuperScript', '|','CreateLink', 'Image', '|', 'Cut','Copy','Paste','|' ,'ClearFormat','ClearAll','InsertCode','SourceCode', 'FullScreen','Preview','Print', '|', 'Undo', 'Redo','CreateTable','TableHeader','TableRemove','FileManager'], type:'MultiRow'}} fileManagerSettings={ {
        enable:true,
        ajaxSettings: {
                url: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations',
                getImageUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
                uploadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
                downloadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download'
            }} } quickToolbarSettings={ {table:['TableHeader','TableRows','TableColumns','TableCell','-','BackgroundColor','TableRemove','TableCellVerticalAlign','Styles']}}>
        <Inject services={[HtmlEditor,Toolbar,Image,Link,QuickToolbar, Table , Count , Resize , FileManager , PasteCleanup ]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor