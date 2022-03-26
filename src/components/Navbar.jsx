import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container navContainer">
        <div className="logo">
          <img src="https://res.cloudinary.com/hapiii/image/upload/v1647783503/eCommerce%20images/tv592sdvhcrz2bch9zwl.jpg" alt="logo" />
          <span>Hapiii clothes</span>
        </div>
        <div className="links">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/cart'>Cart</NavLink>
        </div>
      </div>
  </nav>
  )
}

export default Navbar