import React from 'react';
import './SearchResult.css';
import SearchIcon from '@material-ui/icons/Search';

export default function SearchBar(props) {
    return (
        <form class="search" onSubmit={props.onSubmit}>
            <input
                type="text"
                class="searchTerm"
                placeholder="What are you looking for?"
            />
            <input
                class="searchTerm"
                placeholder="Location"
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
            <button type="submit" class="searchButton">
                {<SearchIcon />}
            </button>
        </form>
    );
}
