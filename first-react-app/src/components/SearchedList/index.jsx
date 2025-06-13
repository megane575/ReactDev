

export const SearchWordTodo = (props) => {
    const {searchKeyword, handleChangeSearchKeyword, handleKeyDownSearch}= props

    return(
        <input 
              className='search-keyword' 
              type='text' 
              placeholder='Search Keyword'
              value = {searchKeyword}
              onChange={handleChangeSearchKeyword}
              onKeyDown={handleKeyDownSearch}>
        </input>
    )
}