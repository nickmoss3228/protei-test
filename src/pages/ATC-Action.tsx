import '../styles/ATCAction.scss'
import ATCSmall from '../assets/ATC-small.jpg'
import ATCMedium from '../assets/ATC-medium.jpg'
import ATCLarge from '../assets/ATC-large.jpg'

const ATCAction = () => {
  return (
    <div className="ATC-wrapper">
        <div className="ATC-headers">
            <h1 className="ATC-header">Забудьте о разрозненных решениях — внедрите единую платформу для всех коммуникаций</h1>
            <h3 className="ATC-header__sm">Попробуйте коммуникации будущего с АТС нового поколения</h3>  
          </div>
          <div className="ATC-options">
              <div className="ATC-option">
                  <div className="ATC-option__img">
                      <img src={ATCSmall} alt="ATC-small"/>
                  </div>
                  <div className="ATC-option__txt">АТС малой ёмкости <br/>(до 1 000 абонентов)</div>
              </div>
              <div className="ATC-option">
                  <div className="ATC-option__img">
                      <img src={ATCMedium} alt="ATC-medium"/>
                  </div>
                  <div className="ATC-option__txt">АТС средней ёмкости <br/>(до 10 000 абонентов)</div>
              </div>
              <div className="ATC-option">
                  <div className="ATC-option__img">
                      <img src={ATCLarge} alt="ATC-large"/>
                  </div>
                  <div className="ATC-option__txt">АТС большой ёмкости <br/>(от 10 000 абонентов)</div>
              </div>
          </div>
    </div>
  )
}

export default ATCAction