import '../styles/Navbar.scss'
import { TfiArrowLeft } from "react-icons/tfi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../context/AuthContext';
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1)
    }

    const handleHomeClick = () => {
        navigate('/')
    }
    
    const handleProfileClick = () => {
        if (isAuthenticated) {
            // Navigate to profile page or show user menu
            // console.log('User is logged in:', user);
            navigate('/profile'); 
        } else {
            navigate('/signup')
        }
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div className='navbar'>
            <div className="navbar__left-section">
                <div className="navbar__back-button" onClick={handleBackClick} title="Назад">
                    <TfiArrowLeft />
                </div>
                <div className="navbar__home-button" onClick={handleHomeClick} title="Главная">
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
                {isAuthenticated ? (
                    <div className="auth-section">
                        <button onClick={handleProfileClick} className="navbar__profile-button" title="Профиль">
                            <CgProfile />
                        </button>
                        <button onClick={handleLogout} className="navbar__logout-button" title="Выйти из профиля">
                            <BiLogOut />
                        </button>
                    </div>
                ) : (
                    <div className="auth-section">
                        <button onClick={() => navigate('/login')} className="navbar__enter-button" title="Войти">
                            Войти
                        </button>
                    </div>
                )}
                <div className="navbar__logo">
                    <img src="/src/assets/icon.png" alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar