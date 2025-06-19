/**SearchWordTodo */
import "./style.css";

export const SearchWordTodo = ({
    searchKeyword, 
    handleChangeSearchKeyword, 
    handleKeyDownSearch
}) => (
    < input
        className='search-keyword' 
        type='text' 
        placeholder='Search Keyword'
        value = {searchKeyword}
        onChange={handleChangeSearchKeyword}
        onKeyDown={handleKeyDownSearch}
    />
)
