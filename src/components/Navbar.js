import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className="wrapper ">
                <h2>
                    <Link to="/" >
                        Shoppable
                    </Link>
                </h2>
                <ul className='navbarLinks'>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='shoppingCartLink'>
                            {/* Side note: color="error" means red */}
                            <Badge badgeContent={props.itemsNum} color="error" >
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Badge>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;