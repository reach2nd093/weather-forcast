import { ChangeEvent } from 'react';

import './Search.css';

interface searchProps {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ onChangeHandler }: searchProps) => (
  <div className="search-wrapper">
    <input className="search" type="search" placeholder="Search here" onChange={onChangeHandler} />
  </div>
);

export default Search;
