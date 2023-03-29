 import React,{useState} from "react";
 import './App.css';

function App() {
  const [value,setValue] = useState("") 
  const [results, setResults] = useState([])
  //KWt8VFNasCHXtU4cwuuouYa0PszwAU_IMcJiqKla1CU
  //url request-https://api.unsplash.com/
  //request route for images-GET /search/photos
  //request route for collection-GET /search/collections
  /* To authenticate requests in this way, pass your application’s access key via the HTTP Authorization header:
     Authorization: Client-ID YOUR_ACCESS_KEY
     You can also pass this value using a client_id query parameter:
    https://api.unsplash.com?client_id=YOUR_ACCESS_KEY */
  const fetchImages = ()=> {
    fetch(`https://api.unsplash.com/search/photos?client_id=KWt8VFNasCHXtU4cwuuouYa0PszwAU_IMcJiqKla1CU&query=${value}`)
    .then(res=>res.json())
    .then(data=>{
      //console.log(data)
      setResults(data.results);
    })
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>Search:</span>
        <input
          style={{width: '60%'}}
          type="text" 
          value={value} 
          onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=> fetchImages()}>send</button>

        <div className="imgden">
          {
            results.map((item)=>{
              return <img key={item.id} src={item.urls.regular}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
