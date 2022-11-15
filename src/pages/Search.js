import React, { useState } from "react";
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"

function Search() {
    const [input, setInput] = useState("");
    const history = useNavigate();

    const search = (e) => {
        e.preventDefault();

        console.log('search button >>', input)

        // do something... come back
        history('/search')
    };

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>

            <div className="search__buttons">
                <Button type='submit' onClick={search} variant='outlined'>
                  Google Search
                </Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search