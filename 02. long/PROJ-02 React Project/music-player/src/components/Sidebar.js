import styled from "styled-components"
import {Link} from 'react-router-dom';
import '../assets/css/Main.css';


function Sidebar() {
    return (
        <StyledSidebar>
            <nav>
                <div>
                    <Link to="/"><i className="fas fa-home"></i> Home</Link>
                </div>
                <div>
                    <Link to="/user"><i className="fas fa-home"></i> User</Link>
                </div>
                <div>
                    <Link to="/upload"><i className="fas fa-upload"></i> Upload</Link>
                </div>
                <div>
                    <Link to="/upload"><i className="fas fa-upload"></i> Liked songs</Link>
                </div>
            </nav>
        </StyledSidebar>
    );
}

const StyledSidebar = styled.div`
    background-color: #000;
    position: fixed;
    top: 64px;
    left: 0;
    width: 410px;
    height: 100vh;
    padding: 10px 0 0 30px;

    nav {
    color: #b2b2b2;
    font-size: 20px;
    margin-top: 60px;
    }
    nav div {
        margin-bottom: 20px;
    }
    nav a {
        color: #b2b2b2;
        text-decoration: none;
    }
    nav div a:hover {
        color: #fff
    }
    nav i {
        padding-right: 10px
    }
`

export default Sidebar;
