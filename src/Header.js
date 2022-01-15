import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className='wrapper'>
                <h1>Shop till you drop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos eos totam voluptatibus a repudiandae qui distinctio, pariatur earum! Ipsa minus ipsam eveniet ut pariatur voluptatum excepturi consequatur maxime placeat!</p>
                <button>Explore Collection</button>
            </div>
        </header>
    )
}

export default Header