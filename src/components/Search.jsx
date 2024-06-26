import {FaSearch} from "react-icons/fa";
import styles from "./Search.module.css";

const Search = ({searchTerm, setSearchTerm, isSearchVisible, setIsSearchVisible}) => {
    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <button className={styles.searchIcon} onClick={() => setIsSearchVisible(!isSearchVisible)}>
                <FaSearch/>
            </button>
            {isSearchVisible && (
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    autoFocus
                />
            )}
        </div>
    );
};

export default Search;
