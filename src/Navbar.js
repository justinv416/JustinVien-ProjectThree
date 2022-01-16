import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="wrapper ">
                <Link to="/">
                    <h2>Shopii</h2>
                </Link>
                <div className='navbarLinks'>
                    <Link to="/products">Products</Link>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;