import React, {useEffect, useState} from "react";
import API from '../api';

import SearchForm from '../components/SearchForm';
import CharacterList from '../components/CharacterList';
import Error from '../components/Error';
import Loader from "../components/Loader";


export default function Home() {
  const INITIAL_STATE = {
      info: { next: '' },
      results: [],
      error: ''
    };

  const [url, setUrl] = useState(API);
  const [data, setData] = useState(INITIAL_STATE);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchCharacters = url => {
      fetch(url)
        .then(response => response.json())
        .then(response => {
          if (searching) {
            if (!response.error) {
              setData(response);
              setSearching(false);
            } else {
              setData({ info: { next: '' }, results: [], error: response.error });
            }
          } else {
            setData({
              info: response.info,
              results: data.results.concat(response.results)
            });
          }
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          
          setLoading(false);
        });
    };
  
  useEffect(() => {
      fetchCharacters(url);
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  
  
  const handleChange = (e) => {
      setQuery(e.target.value);
      console.log(INITIAL_STATE)
  }
  
  const handleMore = () => {
      setUrl(data.info.next);
  }

  const handleReload = () => {
      setError(null);
      setUrl(API);
  }
  // useEffect(() => {
  //     async function getCharacter() {
  //         setData(await api.getCharacter())
  //     } getCharacter()
  // }, [])
  // clickPages(currentPage) {
  //     const offset = [1, 2, 3, 4];
  //     return offset.map(number => parseInt(currentPage, 10) + number);
  // }
  const handleSubmit = (e) => {
      e.preventDefault();
      setSearching(true);
      setLoading(true);
      setUrl(`${API}?name=${query}`);
  }
  if (loading) {
    return (
      <section className="section-container">
        <Loader />
      </section>
    );
  } else if (error) {
    return (<Error error={error} reload={handleReload} />)
  } else {
    return(
      <main className="Main">
          <div>
          <h1 className="text-title"><img src="https://i.imgur.com/6pcWza7.png"/></h1>
          <SearchForm onHandleSubmit={ handleSubmit}
          onHandleChange={handleChange}
          onvalue={query}/>
          {console.log(query)}
          </div>
              <div className="card">
                  <CharacterList
                  characters={data.results} 
                  searchError={data.error}
                  loading={loading} />
              </div>
          {console.log("Character", data.results)}
          
          <div className="box-button-more">
          {!loading && data.info.next && (
              <button onClick={ handleMore }>More Characters<i class="fas fa-chevron-down"></i></button>
          )}
          </div>
      </main>
    )
  }
}