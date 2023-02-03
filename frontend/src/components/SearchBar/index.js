import { useHistory } from "react-router-dom";
import './SearchBar.css';


const SearchBar = ({query, setQuery}) => {
    const history = useHistory();
    const handleSearch = async(e) => {
        if (e.key === 'Enter') {
            history.push(`/businesses?query=${e.target.value}`);
            setQuery(e.target.value);
            console.log("Query:")
            console.log(query)
        }
    }

    return (
        <div>
            <input id="searchBar" onChange={e => setQuery(e.target.value)}type="text" placeholder="Search Businesses" onKeyDown={handleSearch}></input>
        </div>
    )
}

export default SearchBar;