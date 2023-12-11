import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';
import pic from './image.png';

function App() {

  const [query, setQuery] = useState({q: 'berlin'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    const fetchWeather = async() =>{
      const data = await getFormattedWeatherData(query).then(data => {
        setWeather(data);
      })
      console.log(data);
    }
  
    fetchWeather();
  }, [query, units])

  return (
      <div> 
        <div className='mx-4 bg-gradient-to-br from-red-100 to-red-300 shadow-slate-500 my-4 rounded-3xl'>
           <div className='py5 text-white'>
            .
          </div> 
          
            <div className='mx-auto max-w-screen-md my-5 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 rounded-3xl'>
             <div className='px-auto py:auto hover:scale-125 transition ease-in-out text-white items-center justify-center mx-auto my-auto'>Wert</div>
             <img src={pic} className ='rounded-3xl scale-50 object-scale-down'/> <TopButtons/>
              <Inputs/>                

              {weather &&(
                <div>
                  <TimeAndLocation weather = {weather}/>
                  <TemperatureAndDetails/>
                </div>  
              )}
                
            </div>
          <div className='py5 text-white'>
            .
          </div>
      </div>
    </div>
  );
}

export default App;
