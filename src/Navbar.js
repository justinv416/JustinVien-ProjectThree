import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="wrapper ">
                <h2>Shopii</h2>
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </nav>
    )
}

export default Navbar;