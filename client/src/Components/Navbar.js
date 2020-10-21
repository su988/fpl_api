import React, {Fragment} from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <Fragment>
      <div className='nav'>
        <span className="nav_logo"><img src="//resources-pl.pulselive.com/ver/i/elements/premier-league-logo-header-mob.svg" alt="Premier League Logo" /></span>
        <div className='nav_bg'></div>
      </div>
      <div className='title'>OG DOGS FPL</div>
    </Fragment>
  )
}

export default Navbar;
