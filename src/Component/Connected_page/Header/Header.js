import React from 'react';
import Loadingpage from '../../Loading_page/Loadingpage';
import { useTranslation } from 'react-i18next';

function Header() {

const { t } = useTranslation()

  return (
    <div>

      <title>{t('AI Singularity')}</title>

{/*liên kết component header*/}

        <Loadingpage />

{/*kết thúc header*/}

    </div>

  );
}

export default Header;
