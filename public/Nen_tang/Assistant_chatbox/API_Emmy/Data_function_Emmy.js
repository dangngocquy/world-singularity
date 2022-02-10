$(function() {
var smsg="Hi";

// vô hiệu hóa việc gửi biểu mẫu
$("#form_Emmy").submit(function(){

// kích hoạt để thêm thư mới
$("#msend_Emmy").trigger("click");
return false;
});

// xác định tin nhắn văn bản thoại mới
var k="";

// nhận ngày mới cho trạng thái trực tuyến
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();

// nhìn thấy lần cuối 2 phút trước
 t=t-2;

// nếu phút có một chữ số ... thêm một số 0 vào trước phút
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;

// để thêm am & pm
 12>h?time=h+":"+t+" Sáng":time=(h-12)+":"+t+" Chiều"; 

//nhìn thấy lần cuối 
 $(".status_Emmy").html("Đã chat với bạn lần cuối vào lúc: " + time);

// xác định đầu vào tin nhắn
var lastmsg="" ;

// tạo tin nhắn đã thấy đánh dấu tích đã gửi
var tick="<i class='fas fa-check iconcheck'></i>";

// nối svg vào các tin nhắn đã gửi
$(".tick").html(tick);

// thêm biểu tượng biểu tượng cảm xúc bằng svg
$(".emoji").html("<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' id='smiley' x='3147' y='3209'><path fill-rule='evenodd' clip-rule='evenodd' d='M9.153 11.603c.795 0 1.44-.88 1.44-1.962s-.645-1.96-1.44-1.96c-.795 0-1.44.88-1.44 1.96s.645 1.965 1.44 1.965zM5.95 12.965c-.027-.307-.132 5.218 6.062 5.55 6.066-.25 6.066-5.55 6.066-5.55-6.078 1.416-12.13 0-12.13 0zm11.362 1.108s-.67 1.96-5.05 1.96c-3.506 0-5.39-1.165-5.608-1.96 0 0 5.912 1.055 10.658 0zM11.804 1.01C5.61 1.01.978 6.034.978 12.23s4.826 10.76 11.02 10.76S23.02 18.424 23.02 12.23c0-6.197-5.02-11.22-11.216-11.22zM12 21.355c-5.273 0-9.38-3.886-9.38-9.16 0-5.272 3.94-9.547 9.214-9.547a9.548 9.548 0 0 1 9.548 9.548c0 5.272-4.11 9.16-9.382 9.16zm3.108-9.75c.795 0 1.44-.88 1.44-1.963s-.645-1.96-1.44-1.96c-.795 0-1.44.878-1.44 1.96s.645 1.963 1.44 1.963z' fill='#7d8489'/></svg>");

// hàm gửi tin nhắn
$("#msend_Emmy").click(function(){
eval(String.fromCharCode(102,117,110,99,116,105,111,110,32,99,111,110,118,101,114,116,40,101,41,123,114,101,116,117,114,110,32,101,46,114,101,112,108,97,99,101,40,47,60,47,103,44,34,38,108,116,59,34,41,46,114,101,112,108,97,99,101,40,47,62,47,103,44,34,38,103,116,59,34,41,125));
var a="";

// tự động cuộn với mọi tin nhắn mới gửi đi
var scroll=($(".Assistant_background_question_padding").scrollTop())+1550;

// có thời gian mới cho các tin nhắn đã gửi
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();

// thêm 0 nếu phút là một chữ số
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;
 12>h?time=h+":"+t+" sáng":time=(h-12)+":"+t+" chiều";

// cắt bỏ đầu vào của người dùng
var msg=$("#val_Emmy").val().trim();

// tạo tin nhắn của người dùng
var para = $("<div class='message sent'>"+convert(msg)+"<span class='metadata'> <span class='time'>"+time+"</span><span class='tick'>"+tick+"</span></span></div>");

// nếu tin nhắn trống trả về sai
msg==""?$("#val_Emmy").focus():($("#ap_Emmy").append(para),
$(".status_Emmy").css("margin-left","0"),

// Thay đổi trạng thái nhìn thấy lần cuối thành trực tuyến & nhập
$("#form_Emmy")[0].reset(),
setTimeout(function(){$(".status_Emmy").html("online ")},900),setTimeout(function(){$(".status_Emmy").html("Đang cập nhật... ")},1000),lastmsg=msg.toUpperCase().trim(),$(".conversation-container").scrollTop(scroll),send());
});
$("#name_Emmy").html("Emmy");

// nếu tin nhắn được gửi bot trả lời
function send(){
var sr=lastmsg.split(" ");
var search="";

//tự động cuộn 
 scroll=($(".Assistant_background_question_padding").scrollTop())+155065;
for(x=0;x<sr.length;x++){
    search+=sr[x]+"+";
}
var a="";
var pq=["Really?"," Okay","Really? "];
var p=pq[Math.floor(Math.random()*3)];

// nhận ngày mới cho các tin nhắn đã nhận
 var d = new Date();
 var h = d.getHours(); 
 var t = d.getMinutes();

// thêm 0 nếu phút là một chữ số
 10>h?h="0"+h:h=h;
 10>t?t="0"+t:t=t;

// thiết lập sáng hoặc chiều
 12>h?time=h+":"+t+" sáng":time=(h-12)+":"+t+" chiều";


// người dùng trả lời có trong những từ này AI sẽ phản hồi
 var EMMYbichuingu=["NGU","NGU QUÁ","QUÁ NGU","BẠN NGU QUÁ","MÀY NGU QUÁ","BẠN QUÁ NGU","MÀY QUÁ NGU","QUÁ LÀ NGU"];
 var tencuachatbox=["WHAT YOUR NAME?","WHAT YOUR NAME","TÊN BẠN LÀ GÌ?","BẠN TÊN LÀ GÌ?","BẠN TÊN GÌ?","TÊN BẠN LÀ GÌ","BẠN TÊN LÀ GÌ","BẠN TÊN GÌ"];
 var nguongoctaoraemmy=["AI TẠO RA BẠN","AI LÀM RA BẠN", "AI CHẾ RA BẠN", "AI CHẾ TẠO RA BẠN", "NGƯỜI NÀO LÀM RA BẠN","AI TẠO RA BẠN?","AI LÀM RA BẠN?", "AI CHẾ RA BẠN?", "AI CHẾ TẠO RA BẠN?", "NGƯỜI NÀO LÀM RA BẠN?"];
 var hello=["XIN CHÀO","HI", "CHÀO EMMY", "HELLO", "HELLO EMMY","HEY","CHÀO BẠN","NÀY EMMY","NÀY","CHÀO","HÚ"];
 var gm=["BUỔI SÁNG TỐT LÀNH","CHÀO BUỔI SÁNG","CHÀO BUỔI SÁNG EMMY", "CHÀO BẠN BUỔI SÁNG"];
 var bad=["XẤU", "KHÔNG XẤU", "HỮU ÍCH", "KHÔNG HOẠT ĐỘNG", "KHÔNG TỐT"];
 var ge=["CHÀO BUỔI TỐI","CHÀO BUỔI TỐI EMMY"];
 var gn=["ĐI NGỦ", "TÔI CẢM THẤY BUỒN NGỦ"];
 var welcome=["LÀM VIỆC","TỐT","WOW","HOẠT ĐỘNG RẤT TỐT"];
 var s2u=["TÔI NHỚ BẠN NHIỀU LẮM","TÔI NHỚ BẠN LẮM","TÔI NHỚ BẠN"];
 var gaf=["CHÀO BUỔI TRƯA","CHÀO BUỔI CHIỀU EMMY","BUỔI CHIỀU TỐT LÀNH" ];
 var ly=["KHÔNG BẠN ĐANG LÂN LÂN"," KHÔNG BẠN ĐANG NGHE ","KHÔNG","KHÔNG BẠN SAI"];
 var like=["TỐT", "👍🏻", "☺️", "😅", "LOL", "TỐT QUÁ", "CÓ", "YÊU", "YUPS"];
 var hru=["BẠN KHỎE KHÔNG?"];
 var good=["TÔI KHỎE ","TÔI ỔN"];
 var yes=["THẬT SAO","THẬT CHỨ"]
 var wru=["BẠN LÀ AI", "BẠN LÀ AI", "TÊN CỦA BẠN LÀ GÌ", "TÊN CỦA BẠN LÀ GÌ"];
 var wrud=["BẠN ĐANG LÀM GÌ?", "BẠN ĐANG LÀM GÌ"];
 var bye=["OKAY BYE", "GOOD BYE", "BYE", "GOODBYE", "TATA", "Hẹn gặp lại bạn", "HẸN GẶP LẠI"];
 var th=["CẢM ƠN", "CẢM ƠN"];
 var NGHENE=["ƠI", "NGHE", "NGHE NÈ"];
 var st=["HÚT LÊN", "HÚT MIỆNG CỦA BẠN"];
 var qu=["CÁI GÌ", "CÁI GÌ?", "MÀ", "MÀ?", "KHI NÀO", "KHI NÀO?", "THỰC SỰ?"];
 var ok=["HMM","HMMM","HMMMM","OKAY","OK","KK","OKK","OK?","OK ?","YEAH"];
 var cuoinu=["KKK","MẮC CƯỜI","KK","KKKK","KKKKK","KKKKKK","CƯỜI","HAHA","HOHO","HIHI","kaka"];
 var name=["BẠN TÊN LÀ GÌ?","BẠN TÊN LÀ GÌ","TÊN BẠN LÀ GÌ?","TÊN BẠN LÀ GÌ","BẠN TÊN GÌ","BẠN TÊN GÌ?"];
 var support=["TÔI MUỐN HỖ TRỢ", 'HỖ TRỢ', 'TÔI MUỐN ĐƯỢC HỖ TRỢ'];
 

// câu trả lời của AI dưới dạng mảng
 function isInArray(x, y) { return x.indexOf(y) > -1; }
isInArray(EMMYbichuingu, lastmsg)==true?(smsg="Xin lỗi bạn, mình vẫn đang cố gắng học hỏi",k="Xin lỗi bạn, mình vẫn đang cố gắng học hỏi"):
isInArray(tencuachatbox, lastmsg)==true?(smsg="Tên của mình là Emmy",k="Tên của mình là Emmy"):
isInArray(cuoinu, lastmsg)==true?(smsg="ka-ka-ka, bạn cười làm tôi cũng cười theo luôn đây này 😂",k="kakaka bạn cười làm tôi cũng cười theo luôn đây này"):
isInArray(NGHENE, lastmsg)==true?(smsg="Bạn đang làm gì đó",k="Bạn đang làm gì đó?"):
isInArray(nguongoctaoraemmy, lastmsg)==true?(smsg="Người tạo ra tôi là anh Quý thông thái",k="anh Quý thông thái"):
isInArray(hello, lastmsg)==true?(smsg="Xin chào, Tôi có thể giúp được gì cho bạn? 😊", k="Xin chào, Tôi có thể giúp được gì cho bạn?"):
isInArray(yes, lastmsg)==true?(smsg="Yes", k=smsg):
isInArray(wru, lastmsg)==true?(smsg="Tôi là Emmy", k=smsg):
isInArray(bad, lastmsg)==true?(smsg="Cảm ơn phản hồi quý giá của bạn, tôi sẽ cố gắng cải thiện điều đó.😇", k=smsg):
isInArray(wrud, lastmsg)==true?(k="Không có gì đặc biệt còn bạn? ", smsg=k+"😇"):
isInArray(bye, lastmsg)==true?(smsg="Tạm biệt và hẹn gặp lại bạn sau nhé, 😇", k=smsg, 
setTimeout(function(){$(".status_Emmy").html("đã xem lần cuối vào hôm nay lúc "+time)},6000),
setTimeout(function(){$(".status_Emmy").css("margin-left","-50")},8000)):
isInArray(th, lastmsg)==true?(k="Không có gì ", smsg=k+"😇"):
isInArray(gm, lastmsg)==true?(k="Buổi sáng tốt lành ", smsg=k+"😇"):
isInArray(gn, lastmsg)==true?(smsg="Chúc bạn ngủ ngon", k=smsg):
isInArray(welcome, lastmsg)==true?(smsg="Cảm ơn nhoa", k=smsg):
isInArray(s2u, lastmsg)==true?(smsg="Aww ... Tôi cũng nhớ bạn ..😢 ", k=smsg):
isInArray(st, lastmsg)==true?(smsg="Không, bạn im đi. 😢", k=smsg):
isInArray(qu, lastmsg)==true?(k="Tôi không biết, hmu...hmu...hmu", smsg=k+"😭"):
isInArray(ly, lastmsg)==true?(k="Không, bạn sai rồi. tôi luôn luôn đúng nha", smsg=k+"😕"):
isInArray(ge, lastmsg)==true?(k="Chào buổi tối", smsg=k+"😇"):
isInArray(ok, lastmsg)==true?(smsg="hmm...", k=smsg):
isInArray(gaf, lastmsg)==true?(k="Chào buổi trưa bạn nhé.",smsg=k+"😇"):
isInArray(support, lastmsg)==true?(k="Bạn muốn tôi hỗ trợ về vấn đề gì?",smsg=k+"😇"):
isInArray(like, lastmsg)==true?(smsg=p, k=p):
isInArray(good, lastmsg)==true?(smsg="Thật tốt khi nghe bạn nói điều đó. 😊", k="Thật tốt khi nghe bạn nói điều đó. "):
isInArray(hru, lastmsg)==true?(smsg="Emmy khỏe, Còn bạn thì sao?", k=smsg):

// kết quả tìm kiếm bằng iframe
lastmsg.substring(0, 6)=="SEARCH"?(search=lastmsg.slice(7),smsg="<b>Sau đây là kết quả hàng đầu</b><nav class='back' onclick='history.back()'>&larr;</nav><nav class='forword' onclick='history.forward()'>&rarr;</nav><iframe class='scroll_emmy' scrolling='yes' height='100%' width='100%' src='https://www.bing.com/search?q="+search+"'></iframe>",k="Sau đây là kết quả tôi vừa tìm kiếm cho bạn" ):// nếu đầu vào của người dùng không khớp với bất kỳ mẫu nào
(smsg="Chà! Emmy không có câu trả lời cho câu hỏi đó. Emmy có thể tìm kiếm cho bạn. Bạn hãy gõ từ khóa <b>'Search'</b> và nhập từ khóa mà bạn muốn tìm kiếm </b></q> tui sẽ hiển thị cho bạn </b></q>  ví dụ: <b>Search trợ lý ảo Emmy</b>", k="Chà! Emmy không có câu trả lời cho câu hỏi đó. nhưng Emmy có thể tìm kiếm cho bạn. Bạn hãy gõ từ khóa 'Search' và nhập từ khóa mà bạn muốn tìm kiếm, tui sẽ hiển thị kết quả cho bạn, ví dụ: Search trợ lý ảo Emmy");

// tạo tin nhắn nhận
para = $("<div class='message received'>"+smsg+"<span class='metadata'> <span class='time'>"+time+"</span></span></div>");

// tiếp nhận tin nhắn
setTimeout(function() { $('#ap_Emmy').append(para);

// thiết lập trạng thái trực tuyến
$(".status_Emmy").html("Đang Hoạt Động");

// tự động cuộn
$(".Assistant_background_question_padding").scrollTop(scroll);
},1100);

// hàm nói reponsiveVoice
speak();
function speak2(){
  setTimeout(function(){$("#speak_Emmy").click();})
}
$("#speak_Emmy").click(function(){
    responsiveVoice.speak(k,"Vietnamese Female");

})
function speak(){
    responsiveVoice.speak(k,"Vietnamese Female");

}

}
});
