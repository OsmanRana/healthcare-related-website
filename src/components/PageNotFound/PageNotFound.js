import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div><img className="my-5" src="https://www.prestashop.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln" alt=""/></div>
            <Link to='/home'><Button>Home</Button></Link>
        </div>
    );
};

export default PageNotFound;