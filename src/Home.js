import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='wrapper'>
                <h1>Shop till you drop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos eos totam voluptatibus a repudiandae qui distinctio, pariatur earum! Ipsa minus ipsam eveniet ut pariatur voluptatum excepturi consequatur maxime placeat!</p>
                <Link to="/products">
                    {/* Delete button and replace with text, as it is bad for accessibility */}
                    <button>Explore Collection</button>
                </Link>
            </div>
        </header>
    )
}

export default Header