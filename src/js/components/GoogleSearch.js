import React, {useState} from 'react';

import {Header} from "./Header";
import {SearchForm} from "./SearchForm";
import {SearchResults} from "./SearchResults";

import {buildQuery} from "../logic/buildQuery";

import '../../css/components/GoogleSearch.css';


export const GoogleSearch = () => {
  const [query, setQuery] = useState('');

  const handleFormSubmit = (searchTerms) => {
    setQuery(buildQuery(searchTerms));
  };

  return(
    <div className="App">
      <Header />
      <main className="AppContent">
        <SearchForm
          onSubmit={handleFormSubmit}
        />
        { query &&
        <SearchResults
            key={Date.now()}
            maxResults={15}
            query={query}
        />
      }
      </main>
    </div>
  )
}
