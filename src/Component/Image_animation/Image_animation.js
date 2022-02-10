import React from 'react';
import tau from '../../Image/tau.png';
import vetinhnhantao from '../../Image/vetinhnhantao.png';
import animation_css from './Image_animation.css';
import { useTranslation } from 'react-i18next';


const Image_animation = function(props) {
const { t } = useTranslation()

  return (
    <div>
          {/*<img className="object_rocket" src={tau} width="160px" alt={t('alt_img') + "'" + "Shuttle" + "'"}/>*/}
      <div className="box_astronaut">
        <img className="object_astronaut" src={vetinhnhantao} width="120px" alt={t('alt_img') + "'" + "artificial satellites" + "'"}/>
      </div>
    </div>
  )
}
export default Image_animation;