import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import envelope from '../assets/envelope.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                {/*Column 1*/}
                <div className="col">
                    <h4>ISPSC STA. MARIA CAMPUS</h4>
                    <ui className="list-unstyled">
                        <li>+639-123-456-789</li>
                        <li>Poblacion, Norte</li>
                        <li>Sta. Maria, Ilocos Sur</li>
                    </ui>
                </div>

                {/*Column 2*/}
                <div className="col">
                    <h4>Section</h4>
                    <ui className="list-unstyled">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>FAQs</li>
                    <li>About</li>
                    </ui>
                </div>

                {/*Column 3*/}
                <div className="col">
                    <h4>Contact Us</h4>
                    <ui className="list-unstyled">
                            <a href="https://facebook.com/kathewinnn">
                            <img 
                            src={facebook} 
                            alt="facebook"
                            style={{cursor: "pointer"}}
                            />
                        </a> {" "}
                            <a href="https://instagram.com/fwairy.kth">
                            <img 
                            src={instagram} 
                            alt="instagram"
                            style={{cursor: "pointer"}}/>
                        </a> {" "}
                            <a href="mailto: itsmemae45@gmail.com">
                            <img 
                            src={envelope} 
                            alt="email"
                            style={{cursor: "pointer"}}/>
                        </a>
                    </ui>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer