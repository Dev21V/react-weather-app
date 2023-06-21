import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState();
  const [flg,setFlg] =useState(true);
  // const [color, setColor] = useState('#000000');
  const [colors, setColors] = useState(
    [
      {
    id : null,
    color : null
  }
]
);
  
  function getRandomColor(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  }

  const fetchData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => { setData(json);});

      setFlg(!flg);
      test();
  }
  const test = () =>{
    let copyId = [{
      id : null,
      color : null
    }];
    for(let i= 1; i<101; i++){
      copyId.push({
        'id' : i,
        'color' : getRandomColor()
      });
    }
    setColors(copyId);
  }
  
    
  return (
    <>
      <div className='App'>
        <h1>App</h1>
        <button onClick={fetchData}>Fetch Data</button>
        
      </div>
      
      {
        flg ? 
        null
        :
        <ul >
        {
          data ? 
            
            data.map((post)=>{
            return(
              <>
              <li key={post.id}>
                <p 
                  style={
                    { 'border' : '1px solid #ccc',
                      'padding' : '1rem'
                    }
                  }>
                  {post.id} : {post.title}
                </p>
                <div className='emptyBox'
                style={{background : colors[post.id].color}}></div>
              </li>
              </>
              
            )
            
          }) 
          : 
          null
        }
        {/* {data ? data.title : null} */}
      </ul>
      }
      
    </>
  )
}

export default App
