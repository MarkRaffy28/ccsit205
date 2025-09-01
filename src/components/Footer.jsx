import github from "../assets/github.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets.twitter.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          
          <div className="col">
            <h4>ISPSC STA. MARIA CAMPUS</h4>
            <ul className="list-unstyled">
              <li>+63-123-456-789</li>
              <li>Poblacion Norte</li>
              <li>Sta. Maria, Ilocos Sur</li>
            </ul>
          </div>
          
           <div className="col">
            <h4>Section</h4>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQs</li>
              <li>About</li>
            </ul>
          </div>
          
          <div className="col">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <a>
                <img 
                  src={ github }
                  alt="github" 
                  style={{ cursor: "pointer" }} 
                />
              </a> {" "}
              <a>
                <img 
                  src={ facebbok } 
                  alt="facebook"
                  style={{ cursor: "pointer" }}
                />
              </a>{" "}
              <a>
                <img 
                  src={ twitter } 
                  alt="twitter" 
                  style={{ cursor: "pointer" }}
                />
              </a>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}