import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="wrapper">
                <h2>
                    <Link to="/">Shoppable.</Link>
                </h2>
                <ul className='navbarLinks'>
                    <li>
                        <Link to="/products" aria-label='Go to products page.'>Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            {/* Side note: color="error" means red */}
                            <Badge badgeContent={props.itemsNum} color="error" aria-label={`Number of items in cart: ${props.itemsNum}.`}>
                                <FontAwesomeIcon icon={faShoppingCart} aria-label="Click to go to shopping cart." />
                            </Badge>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;