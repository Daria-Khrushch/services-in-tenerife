import './css/App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx'
import ServicesPage from './components/ServicesPage/ServicesPage';
import News from './components/News/News';
import LanguageBtn from './components/LanguageBtn/LanguageBtn.jsx';

const App = (props) => {

  return (
    <div className='wrapper'>
      <Header />
    
      <LanguageBtn state={props.state} />
      
      <Routes>
        <Route path="/*" element={<ServicesPage state={props.state.ServicesPage}/>} />
        <Route path="services/*" element={<ServicesPage state={props.state.ServicesPage} />} /> 
        <Route path="feeds/*" element={<News />} /> 
      </Routes>

      <footer>Created by Daria Khrushch ©2022</footer>
      
    </div>
   
  );
}

export default App;
