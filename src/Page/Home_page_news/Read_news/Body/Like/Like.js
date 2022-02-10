import React from "react";
import './Like.css';

import Like_button from '../../../../../Image/emoji/like.png';
import love_button from '../../../../../Image/emoji/love.png';
import sad_button from '../../../../../Image/emoji/sad.png';
import wow_button from '../../../../../Image/emoji/wow.png';

const likes = 0;
const loves = 0;
const sads = 0;
const wows = 0;

const btnActive = {
 opacity : '1',
 color: 'rgb(17, 236, 229)',
 cursor: 'pointer',
 padding: '0'
};

const btndefault = {
  opacity: '0.65',
  color: 'rgb(15, 23, 36)',
  cursor: 'pointer',
  padding: '0'
};
class Like extends React.Component {
  constructor(props) {
    super(props);

    this.likeHandler = this.likeHandler.bind(this);

    this.loveHandler = this.loveHandler.bind(this);

    this.sadHandler = this.sadHandler.bind(this);

    this.wowHandler = this.wowHandler.bind(this);


    this.state = {
      like: likes,
      love: loves,
      sad: sads,
      wow: wows
    };
  }

  render() {
    return (
    <div className="Like_p_span_sjk">
      <div className="Like_p_span_sjk_kls">
        <h3 className="Read_news_background_h3">Bày tỏ cảm xúc cho bài viết này!</h3>
        <p>{this.state.love + this.state.like + this.state.wow + this.state.sad} cảm xúc</p>
      </div>
      <div className="all_like">
          <span className="Like_p_span">
            <button
              style={this.state.like !== likes ? btnActive : btndefault}
              onClick={this.likeHandler}
              className="Like_btn"
            >
               <img src={Like_button} alt="like" className="sizehjhh"/>
               <p className="Like_p">Thích</p>
            </button>{" "}
            <div className="number_like">
              {this.state.like}
            </div>
          </span>

          <span className="Like_p_span">
            <button
              style={
                this.state.love !== loves ? btnActive : btndefault
              }
              onClick={this.loveHandler}
              className="Like_btn"
            >
              <img src={love_button} className="sizehjhh"/>
              <p className="Like_p">Yêu thích</p>
            </button>{" "}
            <div className="number_like">
              {this.state.love}
            </div>
          </span>

          <span className="Like_p_span">
            <button
              style={
                this.state.sad !== sads ? btnActive : btndefault
              }
              onClick={this.sadHandler}
              className="Like_btn"
            >
              <img src={sad_button} className="sizehjhh"/>
              <p className="Like_p">Buồn</p>
            </button>{" "}
            <div className="number_like">
              {this.state.sad}
            </div>
          </span>

          <span className="Like_p_span">
            <button
              style={
                this.state.wow !== wows ? btnActive : btndefault
              }
              onClick={this.wowHandler}
              className="Like_btn"
            >
              <img src={wow_button} className="sizehjhh"/>
              <p className="Like_p">Wow</p>
            </button>{" "}
            <div className="number_like">
              {this.state.wow}
            </div>
          </span>

      </div>
    </div>
    );
  }

  likeHandler() {
    if (this.state.like === likes) {
      this.setState(state => ({
        like: state.like + 1,
        love: loves,
        sad: sads,
        wow: wows
      }));
    }
  }

  loveHandler() {
    if (this.state.love === loves) {
      this.setState(state => ({
        love: state.love + 1,
        like: likes,
        sad: sads,
        wow: wows
      }));
    }
  }

  sadHandler() {
    if (this.state.sad === sads) {
      this.setState(state => ({
        sad: state.sad + 1,
        like: likes,
        love: loves,
        wow: wows
      }));
    }
  }

  wowHandler() {
    if (this.state.wow === wows) {
      this.setState(state => ({
        wow: state.wow + 1,
        like: likes,
        love: loves,
        sad: sads
      }));
    }
  }
}

Like.defaultProps = {
  headerProp: "Header Section",

  contentProp: "Content area"
};

export default Like;
