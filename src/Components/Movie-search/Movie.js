import React, { useState } from 'react'
import "./Movie.css"
import "../../Components/Display/Display"
import Display from '../../Components/Display/Display';

function Movie() {
    const [title,setTitle]=useState("");
    const [array,setArray]=useState([]);
    const moviesearch=(evt)=>{
        if(evt.key==="Enter"){
            fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ca68e06f${title}`)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res.data);
                setArray(res.data)
            })
        }
    }
    const changeHandler=(e)=>{
        setTitle(e.target.value)
    }
    
  return (
    <div className='box'>
        <div className='header'>
            <h1 className='main_heading'>Movies</h1>
            <input 
              type="text"
              placeholder="Type movie title"
              className='main_input'
              value={title}
              onChange={changeHandler}
              onKeyDown={moviesearch}
              />
        </div>
        {<Display movies={array}/>}

    </div>
  )
}

export default Movie