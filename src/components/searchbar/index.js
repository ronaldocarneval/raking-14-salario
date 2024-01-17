import './searchbar.css'

const Searchbar = () => {
    return (
        <section>
            <div class="search-containeer">
                  <div className='icon'></div>
                  <div className='input'><input type="text" class="form-control form-input" placeholder="Search anything..."/></div>
                </div>
        </section>
    )
}

export default Searchbar