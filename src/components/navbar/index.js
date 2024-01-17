import Button from '../button'
import './navbar.css'

const Navbar = () => {
    return (
        <section className='nav-container'><div className='logo-container'>
         <img src="./logo.png" />
        </div>
            <div className='button-container'>

                <Button>
                    Fazer Login
                    <img src="./arrow.png" />
                </Button>

            </div></section>
    )
}

export default Navbar