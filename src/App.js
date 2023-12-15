/*
 * Base template of our application
 */

// React-Router
import { Outlet } from 'react-router-dom';

// Local
import Header from './components/Header';
import Footer from './components/Footer';

/*
 * Router uses the outlet ( index.js )
 * like which component need to show
 * there
 */
const App = () => {
  return (
    <div className='bg-light'>
      <Header />

      {/* From router path */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
