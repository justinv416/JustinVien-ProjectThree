import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="wrapper ">
                <h2>Shopii</h2>
                <Link to="/">GO HOme</Link>
                <Link to="/products">Products</Link>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </nav>
    )
}

export default Navbar;