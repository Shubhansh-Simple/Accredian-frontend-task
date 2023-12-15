/*
 * Header of entire application
 */

// React-bootstrap
import { Button,
         Navbar,
         Nav,
         Container }     from 'react-bootstrap';

// React-Router
import { LinkContainer } from 'react-router-bootstrap'; 

// React-Icons
import { FaHouse }  from 'react-icons/fa6';
import { IoLogOut } from 'react-icons/io5';

/*
 * Header of the HomeScreen
 */
const Header = () => {
  return (
    <header>
      <Navbar bg='dark'>
        <Container>

          {/* LINK - HomeScreen Page */}
          <Nav className='justify-content-left'>

            <LinkContainer to='/'>
              <Navbar.Brand className='text-white'>
                <FaHouse /> 
                &nbsp;
                <strong>Home</strong>
              </Navbar.Brand>
            </LinkContainer>
          </Nav>

          {/* LINK - Practice Page */}
          <Nav className='justify-content-left'>

            <LinkContainer to='practice'>
              <Navbar.Brand>
                <strong className='text-white'>Practice</strong>
              </Navbar.Brand>
            </LinkContainer>
          </Nav>

          {/* LINK - Logout */}
          <Nav className='justify-content-right'>

            <LinkContainer to='/login'>
              <Nav.Item>
                <Button variant='danger'>
                    <IoLogOut />
                    &nbsp;
                    <b>Logout</b>
                </Button>
              </Nav.Item>
            </LinkContainer>
          </Nav>

        </Container>
      </Navbar>
    </header>
  )
}

export default Header;

