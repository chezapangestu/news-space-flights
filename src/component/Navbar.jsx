import React from 'react';
// import { Link } from 'react-router-dom';
// import Home from '../pages/Home';
// import Blog from '../pages/Blog';

function Navbar(){
    return(<div>
        <h1>Navbar</h1>
        {/* <nav>
            <Link path="/" element={<Home />} />
            <Link path="about" element={<Blog />} />
        </nav> */}
            {/* <nav>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/profile" className="nav-item">Profile</Link>
                <Link to="/blog" className="nav-item">Blog</Link>
                <Link to="/contact" className="nav-item">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="blog" element={<Blog />}></Route>
            </Routes> */}
    </div>    
    )
}

export default Navbar;