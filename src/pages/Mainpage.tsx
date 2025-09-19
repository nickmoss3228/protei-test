import "../styles/Mainpage.scss";
import { TbHandFinger } from "react-icons/tb";
import Touch from '../assets/touch.png'
import { CgInfo } from "react-icons/cg";
import { Link } from "react-router";

const Mainpage = () => {
  return (
    <div className="page-wrapper">
      <main className="mainpage">
        <div className="mainpage-container">
          <div className="mainpage__element-1">
            <div className="mainpage__element__container">
              <div className="mainpage__element-header">УПРАВЛЯЕМ ПРОСТО</div>
              <div className="mainpage__element-desc">
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Единая система управления
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Автоматическая настройка абонентского оборудования
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Учёт и управление материальными активами
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Веб-консоль управления
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mainpage__element-2">
            <div className="mainpage__element__container">
              <div className="mainpage__element-header">ЭФФЕКТИВНО <br/> И КОМФОРТНО РАБОТАЕМ</div>
              <div className="mainpage__element-desc">
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Видеоконференцсвязь
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Корпоративный мессенджер
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Аудиоконференции
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Ядро IP-ATC
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainpage__element-3">
            <div className="mainpage__element__container">
              <div className="mainpage__element-header">ОПЕРАТИВНО ОСВЕЩАЕМ</div>
              <div className="mainpage__element-desc">
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Пульт оперативной связи
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Система оповещения
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Голосовая почта
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Fax2Email
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainpage-container">
          <div className="mainpage__element-4">
            <div className="mainpage__element__container">
              <div className="mainpage__element-header">ИНТЕГРИРУЕМСЯ И АНАЛИЗИРУЕМ</div>
              <div className="mainpage__element-desc">
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Интеграция с информационными системами
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Журналы вызовов
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Запись разговоров
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainpage__element-5">
            <div className="mainpage__element__container">
              <div className="mainpage__element-header">УПРАВЛЯЕМ ВЫЗОВАМИ</div>
              <div className="mainpage__element-desc">
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text-noinfo">
                    Контакт-центр
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text-noinfo">
                    Многоуровневая система IVR
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mainpage__element-6">
            <div className="mainpage__element__container">
              <div className="mainpage__element-header">ОБЕСПЕЧИВАЕМ НАДЕЖНОСТЬ <br/> И БЕЗОПАСНОСТЬ</div>
              <div className="mainpage__element-desc">
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Пограничный контроллер <br /> сессий
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Узел локальной <br/> отказоустойчивости
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    Аутентификация <br/> и авторизация
                  </span>
                </div>
                <div className="mainpage__element-bulletpoint">
                  <span className="mainpage__element-text">
                    <div className="mainpage___element-logo">
                      <CgInfo />
                    </div>
                    СОРМ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">
          <h3 className="footer__title">ЗАКРЫВАЕМ ПОТРЕБНОСТИ</h3>
          <div className="footer__content">
            <div className="footer__lists">
              <ul className="footer__list">
                <li className="footer__item">Топ-менеджеров</li>
                <li className="footer__item">Службе безопасности</li>
                <li className="footer__item">Службе эксплуатации</li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">Диспетчерских центров</li>
                <li className="footer__item">Всех сотрудников предприятий</li>
              </ul>
            </div>
          </div>
        </div>
        <Link to={'/atcaction'} className="btn">
        <div className="footer__button">
          <span className="footer__button-text">
            Посмотреть АТС в действии
            </span>
            <div className="footer__button__pointer">
              <img src={Touch} alt="" />
            </div>
        </div>
        </Link>
        
      </footer>
    </div>
  );
};

export default Mainpage;
