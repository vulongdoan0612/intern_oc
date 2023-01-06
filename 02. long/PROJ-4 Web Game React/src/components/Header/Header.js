import React from 'react'
import { HeaderStyled } from './HeaderStyled'
import UserBtn from '../UserBtn/UserBtn'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyled>
        
        <Link to="/"><div className='logo'>Web Game</div></Link>
        <UserBtn />
    </HeaderStyled>
  )
}

export default Header