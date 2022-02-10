import { useTranslation } from 'react-i18next';
import './LoginRegister.css';
import Header from '../Header/Header';
import { AiFillCamera } from 'react-icons/ai';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { RiAccountCircleFill } from 'react-icons/ri';


const LoginRegister = function(props) {
const { t } = useTranslation()
  return (
      <div className="LoginRegister_backgorund LoginRegister_Fiter">
        <title>Đăng nhập | WORLD SINGULARITY</title>
          <div className="Read_news_background Read_news_backgrounds">
           <Header/>
          </div>
          <div className="Read_news_background_paddingspans_soka">
          
            <span className="LoginRegister_backgorund_div_from_Login_deep_fb_gg_padings_s">
            <div className="LoginRegister_backgorund_div">
              <h1 className="LoginRegister_backgorund_div_h1">{/*<GoPrimitiveDot className="LoginRegister_backgorund_div_from_camarans"/>*/}<RiAccountCircleFill className="LoginRegister_backgorund_div_from_camara_account"/><span>Đăng nhập</span></h1>
              <p className="LoginRegister_backgorund_div_p">Bắt đầu cuộc hành trình của công nghệ tương lai bằng cách đăng nhập vào WORLD SINGULARITY và thiết lập điều khiển!</p>
            </div>
            <div className="Read_news_background_padding">
         
                <button className="LoginRegister_backgorund_div_from_Login_deep_fb_gg LG1"> <AiFillCamera className="LoginRegister_backgorund_div_from_camara"/>Nhận diện khuôn mặt</button>
                <button className="LoginRegister_backgorund_div_from_Login_deep LG2">Xác thực đăng nhập <BsArrowRight className="LoginRegister_backgorund_div_from_camara"/></button>
         

                <span className="Read_news_background_paddingspans LG3">/</span>

                <button className="LoginRegister_backgorund_div_from_Login_deep_fb_gg LG4"><BsGoogle className="LoginRegister_backgorund_div_from_camara"/>Đăng nhập với Google</button>
                <button className="LoginRegister_backgorund_div_from_Login_deep_fb_gg LG5"><FaFacebookF className="LoginRegister_backgorund_div_from_camara"/>Đăng nhập với Facebook</button>

            </div>
            <u className="LoginRegister_backgorund_div_from_quen">Tôi không thể đăng nhập?</u>
            </span>

          <div className="LoginRegister_backgorund_div_fromft">
            <span>Chính sách bảo mật</span>
            <span>All rights reserved © {new Date().getFullYear()}</span>
          </div>
          </div>
      </div>
  )
}
export default LoginRegister;