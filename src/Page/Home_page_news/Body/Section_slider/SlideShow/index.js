import React from "react";
import ReactDOM from "react-dom";
import parse from 'html-react-parser';
import "./styles.css";
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import { user } from '../../../../DataBase/Admin';
import Read_news from '../../../Read_news/Container/Readnews';
import { Link } from 'react-router-dom';

export default class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    /*
     * State slideIndex dùng để xác định xem slide nào đang được active.
     * Các ảnh sẽ được xếp chồng lên nhau, cái nào active thì hiển thị,
     * Cái nào không active thì ẩn đi.
     */
    this.state = {
      slideIndex: 0
    };

    /*
     * Khi sử dụng, mình sẽ truyền thuộc tính ratio, giả sử là "3:2"
     * Như vậy, tỉ lệ width/height là this.ratioWH = 3 / 2
     * Mình sẽ điều chỉnh các ảnh sao cho về cùng 1 kích thước.
     */
    const ratioWHArray = this.props.ratio.split(":");
    this.ratioWH = ratioWHArray[0] / ratioWHArray[1];
  }

  /*
   * Tính chỉ số SlideIndex mới, với step là bước nhảy: +1 hoặc -1
   * Giả sử, mình có 6 ảnh => các chỉ số lần lượt là: 0, 1, 2, 3, 4, 5
   * Chú ý:
   * Nếu đang ở chỉ số 5 mà đi về phía trước thì slideIndex = 0
   * Nếu đang ở chỉ số 0 mà về sau thì slideIndex = 5
   */
  getNewSlideIndex = step => {
    const slideIndex = this.state.slideIndex;
    const numberSlide = user.length_step;

    let newSlideIndex = slideIndex + step;

    if (newSlideIndex >= numberSlide) newSlideIndex = 0;
    else if (newSlideIndex < 0) newSlideIndex = numberSlide - 1;

    return newSlideIndex;
  };

  // Quay về ảnh phía sau, tức index giảm 1 => step = -1
  backward = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(-1)
    });
  };

  // Tiến tới ảnh phía trước, tức index tăng 1 => step = 1
  forward = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(1)
    });
  };

  // Xác định slideIndex nào sẽ được active
  setSlideIndex = index => {
    this.setState({
      slideIndex: index
    });
  };

  /*
   * Cập nhật chiều cao cho container khi thay đổi kích thước màn hình
   * Trong phần CSS, mình để container có width = 100%,
   * Nên dù kéo to hay thu nhỏ thì width vẫn bằng 100%
   * Nhưng chiều cao phải tính lại dựa vào width và tỉ lệ this.ratioWH
   */
  updateDimensions = () => {
    this.containerElm.style.height = `${this.containerElm.offsetWidth /
      this.ratioWH}px`;
  };

  /*
   * Nếu người dùng truyền vào thuộc tính mode = automatic
   * thì Slideshow sẽ chạy tự động dựa vào interval.
   * Hàm này sẽ được gọi trong mỗi lượt lặp lại
   * để cập nhật slideIndex mới cho Slideshow
   */
  runAutomatic = () => {
    this.setState({
      slideIndex: this.getNewSlideIndex(1)
    });
  };

  /*
   * Hàm này thuộc về React Component Lifecycle
   * được gọi sau khi component này được render xong
   * Trong đây, sẽ lưu lại reference cho container - this.containerElm
   * Cập nhật lại chiều cao cho container - this.updateDimensions();
   * Đăng ký sự kiện thay đổi kích thước - resize
   * Kiểm tra nếu mode === "automatic" thì sẽ tạo mới một interval
   * để thay đổi hình ảnh - this.runAutomatic()
   * với giá trị timeout được truyền từ props hoặc mặc định là 5000 ms
   */
  componentDidMount() {
    this.rootElm = ReactDOM.findDOMNode(this);
    this.containerElm = this.rootElm.querySelector(".container");

    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    if (this.props.mode === "automatic") {
      const timeout = this.props.timeout || 5000;

      this.automaticInterval = setInterval(
        () => this.runAutomatic(),
        Number.parseInt(timeout)
      );
    }
  }

  /*
   * Hàm này cũng thuộc về React Component Lifecycle -
   * được gọi khi component này bị xóa khỏi màn hình
   * Lúc này, mình phải hủy bỏ sự kiện khi resize
   * và xóa bỏ interval đã khai bảo bên trên để tránh leak memory.
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    if (this.automaticInterval) clearInterval(this.automaticInterval);
  }

  /*
   * Giao diện của component
   * với phần tử ngoài cùng mình để className="lp-slideshow"
   * để tránh xung đột về tên với các component khác
   */
  render() {
    return (
      <div className="lp-slideshow">
        <div className="container">

          {user.reverse().map((Readnews, index) => {
            const Background = {backgroundImage: 'url(' + Readnews.link_images + ')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: '100%', cursor: 'auto'}
            return (
              <div
                key={index}
                className={`slide ${
                  this.state.slideIndex === index ? "active" : null
                }`}
              >
                <div style={Background} className="index_sliderflexrow">
                    
                  <span className="index_padding">
                    <div className="index_sliderflex">
                      <span className="prev INDEXMB1" onClick={this.backward}>
                        <HiArrowSmLeft className="prev_icon"/>
                      </span>
                      <div className="number-text">
                        {`${index + 1} / ${user.length_step = 3}`}
                      </div>
                      <span className="next INDEXMB1" onClick={this.forward}>
                        <HiArrowSmRight className="next_icon"/>
                      </span>
                    </div>

                    <div className="index_sliderflex Indexright INDEXMB2">
                        <span className="prev" onClick={this.backward}>
                          <HiArrowSmLeft className="prev_icon"/>
                        </span>
                        <span className="next INDEXMB2" onClick={this.forward}>
                          <HiArrowSmRight className="next_icon"/>
                        </span>
                    </div>

                    <div className="text_index">
                      <div className="Home_page_news_row_index">
                        <GoPrimitiveDot className="Home_page_news_icon"/>
                        <Link
                          to={{
                            pathname: `/News/${Readnews.danh_muc_link}`, 
                            state: {Readnews}
                          }}
                          ><p className="Index_coloru">Tin {Readnews.danh_muc}</p>
                        </Link>
                      </div>
                      <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}/`, 
                            state: {Readnews}
                          }}
                          ><h1 className="text_index_h1">{Readnews.title}</h1>
                      </Link>
                      <h4 className="text_index_h4">27 phút trước
                      <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}/`, 
                            state: {Readnews}
                          }}
                          ><p className="Home_page_news_row2">Xem<HiArrowSmRight className="index_sliderflexrow_icons"/></p>
                      </Link>
                      </h4>
                    </div>
                  </span>

                  <div className="caption-text">
                    <p className="text_index_p1">Tóm tắt nội dung</p>
                    <span className="text_index_p2">{parse(Readnews.content)}</span>
                    <Link
                      to={{
                            pathname: `/News/${Readnews.danh_muc_link}/${Readnews.link_page}/`, 
                            state: {Readnews}
                          }}
                          className="text_index_p3"
                          ><p className="text_index_p3">Xem toàn bộ<HiArrowSmRight style={{color: 'red'}} className="index_sliderflexrow_icon"/></p>
                    </Link>
                  </div>
            
                </div>

              </div>
            );
          })}
          
           
        </div>

      {/*  <div className="dot-container">
          {this.props.user.map((_, index) => {
            return (
              <span
                key={index}
                className={`dot ${
                  this.state.slideIndex === index ? "active" : ""
                }`}
                onClick={() => this.setSlideIndex(index)}
              />
            );
          })}
        </div>*/}
      </div>
    );
  }
}
