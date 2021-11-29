import React, {useRef} from 'react';
import {Input} from './Input'
import {Select} from './Select';
import {languageOptions} from "../utils/languageOptions";
import '../../css/components/SearchForm.css'
import {Button} from "./Button";

export const SearchForm = (props) => {

  const form = useRef();
  const {onSubmit} = props;

  const getValues = (form) => {
    const current = form.current;
    const author = current.author.value;
    const title = current.title.value;
    const isbn = current.isbn.value;
    const langRestrict =  current.langRestrict.value;

    return ({langRestrict, inauthor: author, intitle: title, isbn})
  };

  return (
    <div role='search'>
      <form
        className="Form"
        method="get"
        ref={form}
        onSubmit={
          event => {
            event.preventDefault();
            onSubmit(getValues(form));
          }
        }>

          <Input
            ariaLabel='Search for books by title'
            inputClass='Form-input'
            labelClass='Form-label'
            label='Tittle'
            name='title'
            type='search'
          />

          <Input
            ariaLabel='Search for books by author'
            inputClass='Form-input'
            labelClass='Form-label'
            label='Author'
            name='author'
            type='search'
          />

          <Select
            inputClass='Form-input Form-input--select'
            labelClass='Form-label'
            label='Language'
            name='langRestrict'
            options={languageOptions}
          />

          <Input
            ariaLabel='Search for books by ISBN'
            inputClass='Form-input'
            labelClass='Form-label'
            label='ISBN'
            name='isbn'
            type='search'
          />

          <Button
            name='Search'
            type='submit'
          />

      </form>
    </div>
  )
};
