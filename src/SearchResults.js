import React, { useEffect, useState } from 'react';
import PlacesList from './PlacesList';
import SearchBar from './SearchBar';

export default function SearchResults(props) {
    return (
        <>
            <SearchBar
                onSubmit={props.handleSubmit}
                type="text"
                value={props.value}
                onChange={props.handleChange}
            />
            {props.venues && (
                <PlacesList venues={props.venues} toggle={props.toggle} />
            )}
        </>
    );
}
