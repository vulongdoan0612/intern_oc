import styled from "styled-components"
import {Link} from 'react-router-dom';
import '../Main.css';



function Header() {
  return (
    <StyledHeader>
        <div className="mainLogo">
          <Link to="/"><img src="/Logo.png"></img></Link>
        </div>
        <div className="headerIn">
          <div className="search">
            Search
          </div>
          <div className="userLogin">
            User Name
          </div>
        </div>
    </StyledHeader>
  );
}


const StyledHeader = styled.div`
  background: var(--pr-color);
  padding: 10px 30px;
  position: sticky;
  top: 0;
  left: 0;
  color: #fff;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 64px;

  .mainLogo {
    height: 100%;
    width: 380px;
  }
  .mainLogo img {
    height: 100%;
  }
  .headerIn {
      width: calc(100% - 380px);
      display: flex;
      justify-content: space-between;
  }
  .search {
    width: 364px;
    height: 40px;
    background-color: #fff;
    color: #000;
  }
  .userLogin {
    width: 40px;
    height: 40px;
    background-color: #fff;
    color: #000;
    border-radius: 100px;
  }
`

export default Header;