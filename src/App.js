import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { Provider } from 'react-redux';
import appStore from './utils/appData';



function App() {
  return (
<>
<Provider store={appStore}>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact-us' element={<Contact/>}></Route>
</Routes>
</Provider>
   </>
  ); 
}

export default App;
