import React from 'react';
import {getExcerpt} from '../utils/getExcerpt';
import PropTypes from 'prop-types';
import '../../css/components/SearchResultsTable.css';
const placeholder = require('../../images/placeholder.svg'); // with require

export const SearchResultsTable = (props) => {

    function extractData (data) {
        const {volumeInfo: info} = data;
        const {etag: key} = data;
        const {imageLinks : images = {}, description = '', infoLink: link, title, publishedDate} = info;
        const {smallThumbnail: img = null} = images;
        data = {key, title, description, img, link, publishedDate};
        return data;
    }

    const data = props.data.map (d => extractData(d));

  return(
      <table className='SearchResults' >

          <colgroup>
              <col/>
              <col/>
          </colgroup>

          <thead>
          <tr>
              <th scope="col" className='VisuallyHidden'>Book info</th>
              <th scope="col" className='VisuallyHidden'>Book image</th>
          </tr>
          </thead>

          <tbody>

          {data.map(d => (

    <tr className='SearchResults-row' key={d.key}>
      <td className='SearchResults-cell'>
        <a href={d.link} className='SearchResults-bookLink'>
          <h2 className='SearchResults-bookTitle'>{d.title}</h2>
            <p className='SearchResults-bookInfo'>{d.description && getExcerpt(d.description, 15)}</p>

            {d.publishedDate && <p className='SearchResults-bookPublishDate'>published {d.publishedDate}</p>}
        </a>
      </td>
      <td className='SearchResults-cell'>
          <img alt='Book cover' className='SearchResults-bookImage' src={d.img || placeholder}/>
      </td>
    </tr>
          ))}
          </tbody>

      </table>
  )
};

SearchResultsTable.propTypes = {
  data : PropTypes.array,
}

