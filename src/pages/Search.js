import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
// import { Button } from "@material-ui/core"

function Search() {
    const [input, setInput] = useState("");

    const search = (e) => {
        e.prevent.Default();
    };

    return (
        <div className="search"></div>
    )
}

export default Search