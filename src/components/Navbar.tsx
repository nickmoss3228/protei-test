import '../styles/Navbar.scss'
import { TfiArrowLeft } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Navbar = () => {
  return (
      <div className='navbar'>
          <div className="navbar__back-button"><TfiArrowLeft /></div>
          <div className="navbar__home-button"><AiOutlineHome /></div>
          <div className="navbar__navigation">
              <div className="navbar__navigation-element">
                  <button className="navbar__navigation__button">
                      <span className="navbar-navigation__text">АТС малой ёмкости</span>
                  </button>
              </div>
              <div className="navbar__navigation-element">
                  <button className="navbar__navigation__button">
                      <span className="navbar__navigation__text">АТС средней ёмкости</span>
                  </button>
              </div>
              <div className="navbar__navigation-element">
                  <button className="navbar__navigation__button">
                      <span className="navbar__navigation__text">АТС большой ёмкости</span>
                  </button>
              </div>
              <div className="navbar-navigation-element">
                  <button className="navbar__navigation__button">
                      <span className="navbar__navigation__text">VIP-АТС</span>
                  </button>
              </div>
              <div className="navbar-navigation__element">
                  <button className="navbar__navigation__button">
                      <span className="navbar__navigation__text">СОРМ</span>
                  </button>
              </div>
              <div className="navbar__navigation__element">
                  <button className="navbar__navigation__button">
                      <AiOutlineQuestionCircle />
                      <span className="navbar__navigation__text--newgen">
                           Что такое АТС нового поколения?
                      </span>
                  </button>
              </div>
          </div>
        <div className="navbar__logo">
            <img src="/src/assets/icon.png" alt="icon" />
        </div>
      </div>
  )
}

export default Navbar