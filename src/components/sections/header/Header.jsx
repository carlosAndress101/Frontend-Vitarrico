import './Header.css'

const Header = () => {
  return (
    <header>
      <img className="logo" alt="logo" />
      <nav className='nav__links'>
        <ul>
          <li><button>Crear</button></li>
          <li><button>Update</button></li>
          <li><button>Delete</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

