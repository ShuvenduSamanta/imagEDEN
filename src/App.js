 import React,{useState,useEffect} from 'react';
 import './App.css';

function App() {
  const [value,setValue] = useState("") 
  const [results, setResults] = useState([])
  const [dark,setMode] = useState(false)
  //KWt8VFNasCHXtU4cwuuouYa0PszwAU_IMcJiqKla1CU
  //url request-https://api.unsplash.com/
  //request route for images-GET /search/photos
  //request route for collection-GET /search/collections
  /* To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:
     Authorization: Client-ID YOUR_ACCESS_KEY
     You can also pass this value using a client_id query parameter:
    https://api.unsplash.com?client_id=YOUR_ACCESS_KEY */
  const fetchImages = ()=> {
    fetch(`https://api.unsplash.com/search/photos?client_id=KWt8VFNasCHXtU4cwuuouYa0PszwAU_IMcJiqKla1CU&query=${value}&orientation=portrait`)
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results);
    })
  }
  return (
    <div className="App">
      <div className="btn-container">
        <i class="fa fa-sun-o" aria-hidden="true"></i>
        <label className="switch btn-color-mode-switch">
              <input type="checkbox" onChange={()=>setMode(!dark)} name="color_mode" id="color_mode" value="1"/>
              <label for="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
          </label>
        <i className="fa fa-moon-o" aria-hidden="true"></i>
      </div>
      <div className="mydiv">
        <span>Search:</span>
        <input
          style={{width: '60%'}}
          type="text" 
          value={value} 
          onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=> fetchImages()}>Find</button>
      </div>
      <div className="imgden">
          {
            results.map((item)=>{
              return <img className="imgItem" key={item.id} src={item.urls.regular}/>
            })
          }
        </div>
        
    </div>
  );
}

export default App;
