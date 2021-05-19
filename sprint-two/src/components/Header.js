import logo from '../assets/images/Logo-brainflix.svg'
import profilepic from '../assets/images/Mohan-muruge.jpg'
import upload from '../assets/images/Icon-upload.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <a href='../../public/index.html'>
          <img className='header__logo' src={logo} alt='Brainflix Home'></img>
        </a>
        <form className='header__form'>
          <input
            className='header__searchbar'
            type='text'
            name='searchbar'
            placeholder='Search'
          ></input>
        </form>
        <div className='header__navbar'>
          <button className='header__btn' type='submit'>
            <img
              className='header__btn-upload'
              src={upload}
              alt='Upload Your Video'
            />
            UPLOAD
          </button>
          <img
            className='header__profilepic'
            src={profilepic}
            alt="Mystery Man Mohan's Profile"
          ></img>
        </div>
      </div>
    </header>
  )
}

export default Header
