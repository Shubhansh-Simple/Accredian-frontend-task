/*
 * Footer Of Entire Application
 */

const Footer = () => {

  // Get current year
  const currentYear = new Date().getFullYear();
  const developerId = 'shubhansh7777@gmail.com';

  return (
    <footer>
      <br />
      <p className='text-center bg-dark text-light'>
        <small className='text-secondary'>
          &copy; {currentYear} Copyright:  
          </small> <strong>{developerId}</strong>
      </p>
    </footer>
  );
};

export default Footer;

