import { Link, NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <Link to="/BrowseCharacters">Browse Characters</Link>
            <Link to="/Comics">Comics</Link>
        </nav>
    )
}

export default NavigationBar;

//<Link to="/CharacterDetails" >Character Details</Link>