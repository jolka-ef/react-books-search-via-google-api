import React, {useEffect, useState} from 'react';
import {useDataApi} from "../logic/fetchdata";
import {SearchResultsTable} from   "./SearchResultsTable"
import {Error} from "./Error";
import {Loader} from "./Loader";
import {Button} from "./Button";
import "../../css/components/SearchResults.css";
import PropTypes from 'prop-types';


export const SearchResults = (props) => {
    const KEY = 'AIzaSyBqJRFKW-W_SIjBjuAZ1rhXwxBDAeQu7VQ&q'
    const API = `https://www.googleapis.com/books/v1/volumes?&key=${KEY}=`;
    const {maxResults} = props;
    const {query} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [{data, isLoading, isError}, doFetch] = useDataApi('');


    useEffect(() => {
            const run =  async () => {
                await doFetch(`${API}${query}&startIndex=${currentIndex}&maxResults=${maxResults}`);
            };
            run()

    }, [query,currentIndex]);


    function handleClick () {
        if (currentIndex <  data.totalItems) {
            setCurrentIndex(currentIndex => currentIndex + maxResults)
        }
    }


    return (
        <>
            {isError ?
                <Error message="We're sorry but something went terribly wrong..."/>
                : null
            }


            {(data.items && data.items.length > 0) ? (
                <>
                <SearchResultsTable data={data.items}/>

                {currentIndex <  data.totalItems  && data.totalItems > maxResults ?
                    <Button onClick={handleClick} name="load more" />
                    : null
                }
                </>
            ):(
                !isLoading ?
                    <p className='SearchResults-info'>No results to show.</p>
                    : null)
            }

            {isLoading ? <Loader/> : null}
        </>
    )
};

SearchResults.propTypes = {
    query : PropTypes.string
};
