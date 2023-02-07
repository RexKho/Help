import './SearchBar.css';


const SearchBar = ({setTerm}) => {

    const handleSearch = async(e) => {
        if (e.key === 'Enter') {
           setTerm(e.target.value)
        }
        
    }

    return (
        <div>
            <input id="searchBar" type="text" placeholder="Search Businesses" onKeyDown={handleSearch} onChange={(e)=>{setTerm(e.target.value)}}></input>
        </div>
    )
}

export default SearchBar;