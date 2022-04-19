import {SampleLineChart, SampleBarChart} from './components/SampleChart'
import { PDFViewer } from '@react-pdf/renderer';
import TestDocument from './components/Document';

const App = () => {
  return (
    <div className='App'>
      <PDFViewer>
        <TestDocument />
      </PDFViewer>
    </div>
  )
}

export default App
