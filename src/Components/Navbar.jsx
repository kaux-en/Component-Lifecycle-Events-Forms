import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return (
        <nav>
            <Navbar>  
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <Link to="/BrowseCharacters" className='nav-link'>Browse Characters</Link>
                    <Link to="/Comics" className='nav-link'>Comics</Link>
            </Navbar>
        </nav>
    );
};

export default NavigationBar;

//<Link to="/CharacterDetails" >Character Details</Link>