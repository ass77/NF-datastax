import React from 'react'
import {useState, useEffect} from 'react';
import Card from './Card';

const Section = ({genre}) => {
    const [movies, setMovies] = useState([]);
    const [pageState, setPageState] = useState(null);
    const fetchData = async () => {
        const response = await fetch('.netlify/functions/getMovies',{
            method: 'POST',
            body: JSON.stringify({genre: genre, pageState: pageState}),
        });
        const reponseBody = await response.json();
        setMovies(reponseBody.data.movies_by_genre.values);
        setPageState(reponseBody.data.movies_by_genre.pageState);
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <>
        <div>
             {genre}
        </div>
        <div className = "movie-section">
            {movies.map((movie, index) => (
                <Card key={index} movie={movie}/>
            ))}
        <div className="more-button" onClick={
            () => {
                setPageState(pageState)
                fetchData()
            }
        }>
            
        </div>
        </div>
        </>
    )
}

export default Section
