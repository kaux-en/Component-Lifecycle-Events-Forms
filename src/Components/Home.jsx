import Button from 'react-bootstrap/Button';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let navigate = useNavigate();

    return (
        
        <div className="square border border-1">

            <Image src="src/assets/welcome-image.jpeg" className='landing' fluid />   
            <h2 className='home-h2'>Home Page</h2>
            <p className='home-p'>Big Hero Helloo to ya! Welcome to our Marvel App!</p>

            <div className='button'>
            <Button variant="primary" className='shop'>Shop Now</Button>
            </div>

            <Card className='card'>
                <Card.Header as="h5">New Feature</Card.Header>
                    <Card.Body>
                        <Card.Title>Find your favorite Marvel Character</Card.Title>
                            <Card.Text>
                                Browse through your favorite Heroes of the Marvel Universe!
                            </Card.Text>
                                <Button variant="primary" onClick={() => navigate('/BrowseCharacters')}>Browse Characters</Button>
                    </Card.Body>
            </Card>

            <Card className='card'>
                <Card.Header as="h5">New Product</Card.Header>
                    <Card.Body>
                        <Card.Title>Comics</Card.Title>
                            <Card.Text>
                                Check out the comics associated with your favorite marvel character!
                            </Card.Text>
                                <Button variant="primary" onClick={() => navigate('/NotFound')}>Comics</Button>
                    </Card.Body>
            </Card>
        </div>
        
    );
}

export default Home;