import './Header.scss'


const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header className='header'>
        <h1 className='title'>Twitter</h1>
        <div className='userActions'>
          <a href="./login/index.html">
            <button className='button'>Sign In</button>
          </a>
          <a href="./register/index.html">
            <button className='button'>Register</button>
          </a>
        </div>
      </header>
    </div>
  )
};

export default Header