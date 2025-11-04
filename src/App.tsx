import { Provider } from 'react-redux';
import './App.css'
import NavBar from './Routes/NavBar';
import RoutesComponent from './Routes/RoutesComponent';
import store from './store';

function App() {

  return (
    <>
     <Provider store={store}>
     <NavBar></NavBar>
     <RoutesComponent></RoutesComponent>
     </Provider>
    </>
  )
}

export default App;