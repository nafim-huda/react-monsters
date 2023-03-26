
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        // onChange is a callback that is called when there is an update to our input
        // we want to bind an onChange handler for dealing with user input 
        onChange={onChangeHandler}
    />
)
export default SearchBox