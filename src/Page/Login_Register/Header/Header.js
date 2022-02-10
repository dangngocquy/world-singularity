import Logo_main from '../../../Component/Logo_main/Logo_main';
import { useTranslation } from 'react-i18next';
import './Header.css';
import Logo from '../../../Image/logo-2.png';
import { Link } from 'react-router-dom';

const Header = function(props) {
const { t } = useTranslation()
  return (
      <div className="Header_img_LOgin_alll">
          <div className="Assistant_background_question_paddingdsmflecx Headersp">
            <Logo_main />
            <div className="Assistant_background_question_paddingnsja"></div>
            <a href="/Login/"><p>Đăng nhập vào WORLD SINGULARITY</p></a>
          </div>
          <Link to="/"><img src={Logo} alt="Logo" className="Header_img_LOgin" /></Link>
          <div className="Header_img_LOgin_alll_from">
           <span>Chưa có tài khoản?</span>
           <button>Tạo một tài khoản</button>
          </div>
      </div>
  )
}
export default Header;