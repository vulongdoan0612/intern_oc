import styled from "styled-components"
import {Link} from 'react-router-dom';
import '../Main.css';


function Sidebar() {
    return (
        <StyledSidebar>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/user">User</Link>
                </div>
                <div>
                    <Link to="/upload">Upload</Link>
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
`

export default Sidebar;
