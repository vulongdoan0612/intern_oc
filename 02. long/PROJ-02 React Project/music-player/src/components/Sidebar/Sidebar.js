
import {Link} from 'react-router-dom';

import '../../assets/css/Main.css';
import {StyledSidebar} from './Sidebar-styled'


function Sidebar() {
    return (
        <StyledSidebar>
            <nav>
                <div>
                    <Link to="/"><i className="fas fa-home"></i> Home</Link>
                </div>
                <div>
                    <Link to="/user"><i className="fas fa-home"></i> All Songs</Link>
                </div>
                <div>
                    <Link to="/upload"><i className="fas fa-upload"></i> Upload</Link>
                </div>
                <div>
                    <Link to="/liked-song"><i className="fas fa-upload"></i> Liked songs</Link>
                </div>

            </nav>
        </StyledSidebar>
    );
}



export default Sidebar;
