import { BsFillBookmarkStarFill } from 'react-icons/bs';

function NewsSupport() {
const Data = [{
  id: 1,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 2,
  content: "Thông tin bản cập nhật mới WORD SINGULARITY Dành cho IOS",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 3,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 4,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 5,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 6,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 7,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 8,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
},
{
  id: 9,
  content: "Ghi chú phát hành - WORD SINGULARITY",
  text: "Giờ đây, bạn sẽ có thể sử dụng các điều khiển thông minh tốt hơn trước vì chúng tôi đã thực hiện các cải tiến đối với chúng."
}]
  return (
    <div className="NewsSupportb">
     <h1 className="NewsSupport_h1">Các câu hỏi được đề xuất phổ biến</h1>
     <div className="NewsSupport_h1_grid">
      {Data.map(({content, text, id}) => (
        <div className="NewsSupporth3p">
          <BsFillBookmarkStarFill className="NewsSupporth3p_icon"/>
          <h3 className="NewsSupporth3pchia">
            <span>{content}</span>
            <p>{text}</p>
          </h3>
        </div>
      ))}
     </div>
    </div>
  );
}

export default NewsSupport;
