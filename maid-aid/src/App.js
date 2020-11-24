import React, {useState} from 'react';

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
