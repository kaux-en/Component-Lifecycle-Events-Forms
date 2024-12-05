import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>Looks like this page does not exist. You can navigate back to the <Link to='/'>Home Page</Link>
            </p>
        </div>
    )
};

export default NotFound;