import React from "react";
import "./footer.css";
import logo from "../image/logo1.png";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="footer-blog-post">
          <img className="logo" src={logo} alt="#" />
          <div className="blog-post">
            <h2 className="title">We are ready to help you in construction</h2>
            <div className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
              repellat magni ipsa dolor obcaecati autem ut iste dolorum natus,
              dignissimos qui alias voluptatibus minima ratione repudiandae,
              recusandae omnis? Numquam tempora fugiat culpa enim, facere quae
              quas cumque incidunt architecto.
            </div>
          </div>
          <div className="divider-block">
            <div className="divider"></div>
          </div>
          <div className="links-sectors">
            <h4 className="link-title">Sectors</h4>
            <div className="link">Health</div>
            <div className="link">Education</div>
            <div className="link">Commercial</div>
            <div className="link">Residential</div>
            <div className="link">Industrial</div>
            <div className="link">Retail</div>
          </div>
          <div className="links-navigation">
            <h4 className="link-title">Navigation</h4>
            {props.links.map((el, i) => {
              return (
                <div className="link" key={i}>
                  <Link to={el.link}>{el.label}</Link>
                </div>
              );
            })}
          </div>
          <div className="links-office">
            <h4 className="link-title">Office</h4>
            <div className="link office">
              London <p>049 160-5556-417</p>
            </div>
            <div className="link office">
              Berlin<p>050 161-5557-702</p>
            </div>
            <div className="link office">
              Manchester<p>063 162-5570-500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
