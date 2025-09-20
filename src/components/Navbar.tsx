import '../styles/Navbar.scss'
import { TfiArrowLeft } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1)
    }

    const handleHomeClick = () => {
        navigate('/')
    }

  return (
      <div className='navbar'>
  <div className="navbar__left-section">
    <div className="navbar__back-button" onClick={handleBackClick}>
      <TfiArrowLeft />
    </div>
    <div className="navbar__home-button" onClick={handleHomeClick}>
      <AiOutlineHome />
    </div>
  </div>

  <div className="navbar__middle-section">
    <div className="navbar__navigation">
      <div className="navbar__navigation-element">
        <button className="navbar__navigation__button">
          <span className="navbar__navigation__text">АТС малой ёмкости</span>
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
      <div className="navbar__navigation-element">
        <button className="navbar__navigation__button">
          <span className="navbar__navigation__text">VIP-АТС</span>
        </button>
      </div>
      <div className="navbar__navigation-element">
        <button className="navbar__navigation__button">
          <span className="navbar__navigation__text">СОРМ</span>
        </button>
      </div>
      <div className="navbar__navigation-element">
        <button className="navbar__navigation__button">
          <div className="navbar__navigation__info">
            <AiOutlineQuestionCircle />
          </div>
          <span className="navbar__navigation__text--newgen">
            Что такое АТС нового поколения?
          </span>
        </button>
      </div>
    </div>
  </div>

  <div className="navbar__right-section">
    <div className="navbar__logo">
      <img src="/src/assets/icon.png" alt="icon" />
    </div>
  </div>
</div>
  )
}

export default Navbar