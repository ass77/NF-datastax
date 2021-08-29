import React from 'react'

const Card = ({movie}) => {
    return (
        <>
        <div className="card">

             {movie.title}
             {movie.duration}
             <video>
                 <source src={movie.thumbnail} type="video/mp4"/>
             </video>
        </div>
        </>
    )
}

export default Card
