import {Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import logo from '../imgs/logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
 
function NavBar() {


  const menu = [
    {
      path: '/',
      name: 'Página Inicial'
    },
    {
      path: '/service',
      name: 'Serviços'
    },
    {
      path: '/about',
      name: 'Ajuda'
    },
    {
      path: '/contact',
      name: 'Contatos'
    },
  ];

    return (
      <div className="App">
        <Navbar className="cor" variant="dark">
          <Container>
            <Navbar.Brand href="#home" >
              <img
                  src={logo}
                  alt="MedFarm Logo"
                  style={{ width: "170px" }}
                />
            </Navbar.Brand>
            <Navbar.Collapse className='justify-content-center' >
              <Nav>
                {
                  menu.map((item)=>(
                    <Nav.Link to={item.path} key={item.name}>
                      <div>{item.name}</div>
                    </Nav.Link>
                  ))
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

  export default NavBar;