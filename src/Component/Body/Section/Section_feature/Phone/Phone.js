import React from 'react';
import  Uni  from '../../../../../Video/Uni.mp4';
import { useTranslation } from 'react-i18next';
import './Phone.css';

const Phone = function(props) {
const { t } = useTranslation()

  return (
    <div className="flexphone">
      <span className="dsnncnccxzs">
        <div className="dienthoaididong">
          <div className="dienthoaididong__inner">
            <div className="dienthoaididong__gif">

              <video loop autoPlay muted>
                <source src={Uni} type="video/mp4"/>
              </video>

              <hr className="hrdt" size="8px" color="black"/>

            </div>
        
            <div className="dienthoaididong-header-button">
              <div className="dienthoaididong-header-button__left">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="dienthoaididong-header-button__right">
                <span></span>
              </div>
            </div>

            <div className="dienthoaididong-header">
            <div className="dienthoaididong-header__inner">
              <div className="dienthoaididong-header__item"></div>
                <div className="dienthoaididong-header-circle">
                  <div className="dienthoaididong-header-circle__inner">
                    <div className="dienthoaididong-header-circle__item"></div>
                    <div className="dienthoaididong-header-circle__item"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </span>
      
      <span className="sknakdienthoai">
        <div className="dienthoaididongs">
          <div className="dienthoaididong__inners">
            <div className="dienthoaididong__gifs">

              <video loop autoPlay muted>
                <source src={Uni} type="video/mp4"/>
              </video>
                <hr className="hrdt" size="8px" color="white"/>
            
            <div className="dienthoaididong-header-buttons">
              <div className="dienthoaididong-header-button__lefts">
                <span></span>
                <span></span>
                <span></span>
              </div>
            <div className="dienthoaididong-header-button__rights">
              <span></span>
            </div>

            </div>

            <div className="dienthoaididong-headers">
              <div className="dienthoaididong-header__inners">
                <div className="dienthoaididong-header__items"></div>
                  <div className="dienthoaididong-header-circles">
                    <div className="dienthoaididong-header-circle__inners">
                      <div className="dienthoaididong-header-circle__items"></div>
                      <div className="dienthoaididong-header-circle__items"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </span>

      
    </div>
  )
}

export default Phone;
