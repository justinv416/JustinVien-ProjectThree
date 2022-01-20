import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div className="wrapper ">
                <Link to="/" className='logoLink'>
                    Shoppable
                </Link>
                <div className='navbarLinks'>
                    <Link to="/products" className='productsLink'>Products</Link>
                    <Link to="/cart" className='shoppingCartLink'>
                        {/* Side note: color="error" means red */}
                        <Badge badgeContent={props.itemsNum} color="error" >
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Badge>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;