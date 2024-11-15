
import './App.css';
import{useState} from 'react';
import RestaurantTable from './RestaurantTable';
function App() {
  const [userName, setUserName] = useState();

  // Provide the background image details..
  const myStyle = {
    backgroundImage: 'url(proj.jpg)',
    backgroundSize: 'cover',
    height: '100vh'
  }
 
return(
  <div  id='mystyle'>  
  <RestaurantTable />
</div>
);

return(
  <div class="container">
  <div class="input-button-group">
    <input type="text" placeholder="Enter text" />
    <button type="submit">Submit</button>
  </div>
</div>

);
}



  
     

    
  
 


export default App;
