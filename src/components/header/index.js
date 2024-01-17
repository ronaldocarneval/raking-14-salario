import Navbar from '../navbar';
import Text from '../text';
import './header.css'

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                < Navbar />
                <div className='text-header-container'><Text /></div>

            </div>
            <div className='bubble-container'>
                <div className='bubble'>
                    <img src="./lego_v.png" />

                </div>
                <div className='bubble-am'>
                    <img src="./lego_am.png" />

                </div>
                <div className='bubble-a'>
                    <img src="./lego_a.png" />

                </div>
                <div className='bubble-ver'>
                    <img src="./lego_ver.png" />

                </div>
            </div>

        </header>
    )
}

export default Header;