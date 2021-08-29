import './App.css';
import {useState, useEffect} from 'react';
import Section from './components/Section';


const App = () => {

  const [genres, setGenres] = useState([]);
  const genreInc = 4
  const [limit, setLimit] = useState(genreInc);
  
  const fetchData = async () => {
    const response = await fetch('.netlify/functions/getGenres', {
      method: 'POST',
      body: limit
    });
    const reponseBody = await response.json();
    setGenres(reponseBody.data.reference_list.values);
  }

  useEffect(() => {
    fetchData();
  }, [limit]);


  return (
    <>
    {genres && (
          Object.values(genres).map(
            (genre) => (
            <Section genre={genre.value} />
          )
        )
      )}
    <div className= "page-end" onMouseEnter={
      () => {
        setLimit(limit + genreInc)
      }
    }>

    </div>
    </>
    
  );
}

export default App;
