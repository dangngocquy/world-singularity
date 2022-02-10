import React from 'react';
const Register_popup_news = function(props) {
  return (
  <div>
    <div className="cd-batlen guisom" role="alert">
          <form name="guisomform" id="guisomform" className="guisom-form">
            <div className="cd-batlen-container">
              <div className="namer">
                <label htmlFor="namer" className="lbvg">Tên</label>
                <input type="text" id="namer" name="namer" className="nhapvg" />
              </div>
              <div className="email">
                <label htmlFor="email" className="lbvg">Email</label>
                <input type="text" id="email" name="email" className="nhapvg" />
              </div>
              <div className="message">
                <label htmlFor="message" className="lbvg">Lời nhắn</label>
                <textarea className="khungvg" name="message" id="message" defaultValue={""} />
              </div>
              <br />
              <div className="vsdvdse">
                <input type="checkbox" id="human" name="human" className="nhapvg" />
                <label htmlFor="human" className="lbvg sdfsdfv">Tôi không phải là Robot.</label>
              </div>
              <br />
              <div className="sbg">
                <p className="user-message scsdv" id="guisomblurb">Tất cả các câu hỏi, đề xuất và bình luận sẽ được chúng tôi ghi nhận!</p>
                <input type="submit" name="submit" id="sbg" defaultValue="Send" className="nhapvg" />
              </div>
            </div>
          </form>
        </div>
        <div className="cd-batlen notification" role="alert">
          <div className="cd-batlen-container">
            <a href className="cd-batlen-close cd-close-button"><i className="fa fa-times uuuud" /></a>
            <p>
            </p><h3 id="notification-text dafdc">Cảm ơn bạn đã liên hệ!</h3>
            <p />
          </div>
        </div>
    </div>
  )
}
export default Register_popup_news;