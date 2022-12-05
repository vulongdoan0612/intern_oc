import styled from "styled-components"
import TextField from "@mui/material/TextField";

function SearchBar() {
    return (
        <Search>
            <div className="search">
                <TextField
                id="outlined-basic"
                // class="searchText"
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
        </Search>
    )
}
const Search = styled.div`
    #outlined-basic {
        background: #fff;
        width: 364px;
        height: 40px;
        padding: 0 8px;
        border-radius: 5px;
        overflow: hidden;
    }
    .search fieldset {
        padding: 0;
        border-radius: unset;
    }
    .search .MuiFormLabel-root {
        top: -6px;
    }
`

export default SearchBar