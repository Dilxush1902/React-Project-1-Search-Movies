import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
 return (
   <div className="footer__main container-fluid">
    <Fade bottom>
     <div >
      <div className="footer-copyright text-warning py-3">© {new Date().getFullYear()}  Copyright</div>
     </div>
    </Fade>
   </div>
 );
};

export default Footer;