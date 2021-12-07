import React,{ useState ,useEffect} from 'react';
import "./Navbar.css";

function Navbar() {
    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
            className="nav__logo"
            src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
            alt="Netflix Logo"
            />
            <img 
            className="nav__avatar"
            src="https://avatarfiles.alphacoders.com/235/thumb-235557.png"
            alt="Netflix logo"
            />
        </div>
    );
}

export default Navbar;
