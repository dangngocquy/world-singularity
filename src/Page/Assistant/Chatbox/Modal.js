import React from 'react';
import Emmy from '../../../Image/Avatar.png';
import Avatars from '../../../Image/User/none.png';
import ReactDOM from 'react-dom';
import { BsArrowReturnLeft, BsThreeDots, BsMic } from 'react-icons/bs';
import { VscBracketError } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import assistant_music from '../Music/assistant.mp3';
import { MdOutlineDataExploration } from 'react-icons/md';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { TiMicrophoneOutline } from 'react-icons/ti';
import { HiOutlineDatabase } from 'react-icons/hi';
import { BiMenuAltRight, BiSend } from 'react-icons/bi';


const Modal = ({ isShowing, hide }) => {

//date
var now = new Date();
const days = ['day_1','day_2','day_3','day_4','day_5','day_6','day_7'];
const dayName = days[now.getDay()];
const Date_show = new Date().toLocaleDateString();
const Time_show = new Date().toLocaleTimeString();


return(
isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className="Modals-overlay_assistant"/>
    <div className="Modals-wrapper_assistant" aria-Modals aria-hidden tabIndex={-1} role="dialog">
      <div className="Modals_assistant">
        <div className="Modals-header_assistant">
          <button type="button" className="Modals-close-button_assistant" data-dismiss="Modals" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
       
           <span className="Assistant_span_bacckground_sp_fl_fl">
     <div className="Assistant_background_chat">
{/*           <div className="Assistant_time">
            <span>{Time_show}</span>
          </div>
          <span id="name_Emmy"></span>
          <span className="status_Emmy"></span>*/}
              <div className="Assistant_background_question_padding_fl_sk">
                <div>
                </div>
                
                <div className="Assistant_background_question_paddingik">
                  <div className="Assistant_background_question_padding_lpk">
                    <div className="Assistant_background_question_padding_op">
                        <span className="span_Ass">
                          <img src={Emmy} alt="Emmy" />
                          <div className="Assistant_background_question_padding_past2">
                          <span className="status_Emmy"></span>
                          <p>
                            Emmy
                          </p>
                          </div>
                        </span>
                    </div>

                   {/* <div className="Assistant_background_question_paddingtetx">
                      Xin chào tớ là trợ lý ảo Emmy bạn có thể hỏi tớ bất cứ điều gì tớ sẽ hỗ trợ và giải đáp tất cả cho mọi người. Nếu trả lời ngoài mục hỗ trợ tớ sẽ không giải đáp cho các bạn đâu nha.
                    </div>*/}
                    <BsThreeDots className="Assistant_background_question_padding_iicon"/>
                  </div>
                             {/*        <p className="Avatars_2_Assintant_sp">Xin chào @Hồng Đệ Thất chào mừng bạn quay lại với bộ phận hỗ trợ.</p>*/}
                  <span className="Assistant_span_span2_time">{Time_show}</span>
                </div>

                <div className="Assistant_background_question_padding2">
                 <span className="Assistant_span_span2">
                   <p className="Avatars_2_Assintant">Đã hỗ trợ hơn 16k người</p>
                   <img src={Avatars} alt="Avatar" />
                   <img src={Avatars} alt="Avatar" />
                   <img src={Avatars} alt="Avatar" />
                   <img src={Avatars} alt="Avatar" />
                   <p>15k+</p>
                 </span>
                 <span className="Assistant_span_btn">
                   <button><MdOutlineDataExploration/>Đóng góp</button>
                   <button><HiOutlineDatabase/>Thêm dữ liệu</button>
                   <button><VscBracketError/>Báo lỗi</button>
                 </span>
                </div>
              </div>

            <div className="Assistant_background_chat-container">
              <span id="ap_Emmy"></span>
            </div>
            <span id="speak_Emmy"></span>

            <div className="Assistant_background_question_EMmy">
              <form id="form_Emmy" className="Assistant_background_chat-compose">

                <span><TiMicrophoneOutline className="Assistant_background_icon"/ ></span>

                <input id="val_Emmy" className="input-msg" name="input" placeholder="Nhập câu hỏi..." autocomplete="off" autofocus />

                <span className="send" id='button_assistant'>
                    <BiSend id="msend_Emmy" className="Assistant_background_icon"/>
                    <audio id="clicksound" src={assistant_music} preload="auto"></audio>
                </span>
              </form>
            </div>


        </div>
      </span>

      </div>
    </div>
  </React.Fragment>, document.body
  ) : null
  );
};

export default Modal;