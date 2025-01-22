import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';




import './App.css'
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
<Routes>

  <Route path='add_contact' element={<AddContact/>}/>
  <Route path='view_contact' element = {<ViewContact/>}/>

</Routes>

</BrowserRouter>
  )
}

export default App
