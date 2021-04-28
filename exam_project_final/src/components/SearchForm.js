import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext()
    const SearchValue = React.useRef('')

    React.useEffect(() => {
        SearchValue.current.focus()
    }, [])

    const searchCoctail = () => {
        setSearchTerm(SearchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>find your favorite cocktail</label>
                    <input
                        type='text'
                        id='name'
                        ref={SearchValue}
                        onChange={searchCoctail}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
