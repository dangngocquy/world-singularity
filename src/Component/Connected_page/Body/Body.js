import { Section_home,
         Section_introduce,
         Section_review,
         Section_experience,
         Section_join,
         Section_feature,
         Section_total,
         Section_post,
         Section_Partner,
         Section_planet,
         Section_Footer,
         Section_description } from '../../Body/Section';
         
import React from 'react';

import './Body.css';

function Body() {
  return (
    <span>
      
{/*phần kết cấu*/}

      <Section_home />

      <Section_Partner />
      
      <Section_introduce />

      <Section_review />

      <Section_experience />

      <Section_join />

      <Section_feature />

      {/*<Section_total />*/}

      <Section_post />

      <Section_planet />

      <Section_description />

      <Section_Footer />

{/*kết thúc kết cấu*/}

    </span>

  );
}

export default Body;
