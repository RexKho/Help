import { useHistory } from "react-router-dom";
import './SearchBar.css';

const SearchBar = () => {
    const history = useHistory();
    const handleSearch = async(e) => {
        if (e.key === 'Enter') {
            history.push(`/businesses?query=${e.target.value}`);
        }
    }

    return (
        <div>
            <input id="searchBar" type="text" placeholder="Search Businesses" onKeyDown={handleSearch}></input>
        </div>
    )
}

export default SearchBar;