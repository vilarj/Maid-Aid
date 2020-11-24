import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div className="App">
    {/*Todo esto es parte del titulo */}
    <Navbar>
      <NavItem icon="🤓" />
      <NavItem icon="🤓" />
      <NavItem icon="🤓" />
      <NavItem icon="🤓" />


      <NavItem icon="🤓" />
      <NavItem icon="🤓" />
    </Navbar>

{/*
      <ul>Maid-Aid</ul>
        <li>Registrate</li>
        <li>Ayuda</li>
        <li>Hazte un Socio</li>
        <li>Todos los Servicios</li>
        <li>Categorias de Servicios</li>
        <li>Sobre Nosotros</li>
      </ul>
*/}
    </div>
  );
}

function DropdownMenu () {
  const [activeMenu, setActiveMenu] = useState('main');
  function DropdownItem (props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button"> {props.leftIcon}</span>
        {props.children}
        <span className="icon-right"> {props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown">
    <CSSTransition
    in={activeMenu === 'main'}
    unmountOnExit
    timeout = {500}
    className="menu-primary">
      <DropdownItem> My Profile </DropdownItem>
      <DropdownItem> </DropdownItem>
    </CSSTransition>

    <CSSTransition
    in={activeMenu === 'settings'}
    unmountOnExit
    timeout = {500}
    className="menu-secundary">
      <DropdownItem> Settings </DropdownItem>
      <DropdownItem> </DropdownItem>
    </CSSTransition>
    </div>
  );
}

function Navbar (props) {
    return (
      <nav className='navbar'>
        <ul className='navbar-nav'> {props.children} </ul>
      </nav>
    );
}

function NavItem (props) {
  const [open, setOpen] = useState(false);

    return (
      <li className='nav-item'>
          <a href='#' className='icon-button'onClick={() => setOpen(!open)}>
            {props.icon}
          </a>

          {open && props.chidlren}
      </li>
    );
}

export default App;
