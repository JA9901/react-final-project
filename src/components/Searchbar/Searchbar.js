import React, { useState } from "react";
import './Searchbar.css'
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../contextApi/StateProvider";import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button';
import { actionTypes } from "../../contextApi/reducer";

const Searchbar = ({ hideButtons = false, inputValue }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  return (
    <form className={`search ${!hideButtons && "column"}`}>
      <div
        className={`search_input ${inputFocus ? "search_input_focus" : null}`}
      >
        <SearchIcon className="search_inputSearchIcon" />
        <input
          onFocus={() => setInputFocus(true)}
          onMouseOver={() => setInputFocus(true)}
          onBlur={() => setInputFocus(false)}
          onMouseOut={() => setInputFocus(false)}
          value={input || inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon className="search_inputMicIcon" />
      </div>

      <div className="search_buttons">
        <Button
          className={hideButtons ? "search_buttonsHidden" : null}
          type="submit"
          variant="outlined"
          onClick={search}
        >
          Google Search
        </Button>
        <Button
          className={hideButtons ? "search_buttonsHidden" : null}
          variant="outlined"
        >
          I'm Feeling Lucky
        </Button>
      </div>
    </form>
  );
};

export default Searchbar;