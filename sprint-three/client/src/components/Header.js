import logo from '../assets/images/Logo-brainflix.svg'
import profilepic from '../assets/images/Mohan-muruge.jpg'
import upload from '../assets/images/Icon-upload.svg'
import { Link } from "react-router-dom"
import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__wrapper'>
          <Link to="/">
            <img className='header__logo' src={logo} alt='Brainflix Home'></img>
          </Link>
          <form className='header__form'>
            <input
              className='header__searchbar'
              type='text'
              name='searchbar'
              placeholder='Search'
            ></input>
          </form>
          <div className='header__navbar'>
            <Link to="/upload">
              <button className='header__btn' type='submit'>
                <img
                  className='header__btn-upload'
                  src={upload}
                  alt='Upload Your Video'
                />
            UPLOAD
          </button>
            </Link>
            <div className="header__profilepic">
              <img
                className='header__profileimg'
                src={profilepic}
                alt="Mystery Man Mohan's Profile"
              ></img>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header