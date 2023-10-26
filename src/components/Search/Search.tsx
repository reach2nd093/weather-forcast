import React, { useRef, useEffect, ChangeEvent } from 'react';
import { debounce } from 'lodash';

import './Search.css';

interface searchProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChangeHandler }: searchProps) => {
  const debouncedSearch = useRef(
    debounce((searchString) => {
      onChangeHandler(searchString);
    }, 1000),
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event);
  };

  return (
    <div className="search-wrapper">
      <input className="search" type="search" placeholder="Search here" onChange={handleChange} />
    </div>
  );
};

export default Search;
