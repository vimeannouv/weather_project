import "./App.css" 
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationList from "./components/LocationList"
import WeatherInformation from "./components/WeatherInformation"

const App = () => {
  return (
    <div className="layout">
      <WeatherInformation />
      <LocationList />
    </div>
  )
}

export default App