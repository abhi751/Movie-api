import React from 'react'
import "./Display.css"

const Display=(props)=> {
  console.log(props.movies)
  return (
    <div>
        {props.movies.map(({Poster,Title,Released})=>{
          let thumbnail=Poster
          return (
            <>
              <div className='"display_image'>
                <img
                  src={thumbnail}
                  alt="movie-poster"
                  width="100%"
                  height="100%"
                  className='image'
                />
                <div className='list_of_movie'>
                    <h3 className='title' >
                       {Title}
                    </h3>
                    <p className='title' key={Math.random()*10}>
                      {Released}
                    </p>
                </div>  
              </div>
            </>
          )
        })}
    </div>
  )
}

export default Display