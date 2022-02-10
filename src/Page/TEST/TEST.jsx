// import React, { useState } from 'react'
// import './TEST.css'

// export default function TEST(){
//   const [userInput, setUserInput] = useState('')
//   const [userHistory, setUserHistory] = useState([])
//   const [botHistory, setBotHistory] = useState([])
//   const handleChange = (e) => setUserInput(e.target.value)

// const Time_show = new Date().toLocaleTimeString();


// // thêm 0 nếu phút là một chữ số

//   const matchReply = (userInput) => {
//         const trigger = [
//             ["chào", "hi"],
//             ["mấy giờ rồi"],
//         ];

//         const reply = [
//             ["xin chào", "chào bạn nha", "Ok chào bạn"],
//             ["Bây giờ là", "Bạn mở điện thoại lên mà xem"],
//         ];

//         const alternative = ["OK", "hay", "Thử lại nha?", "Đang nghe..."];

//         let botMsg = generateReply(trigger, reply, userInput)

//         if(!botMsg){
//             botMsg = alternative[Math.floor(Math.random()*alternative.length)]
//         }

//         setBotHistory([botMsg, ...botHistory])

//         speak(botMsg)

// }


// const generateReply = (trigger, reply, text) => {
//         let item;
//         let items;
//         for (let x = 0; x < trigger.length; x++) {
//             for (let y = 0; y < reply.length; y++) {
//                 if (text.includes(trigger[x][y])) {
//                     items = reply[x];
//                     item = items[Math.floor(Math.random() * items.length)];
//                 }
//             }
//         }
//         return item;
// }



// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const recognition = new SpeechRecognition();
// recognition.lang = 'vi-VN';

// const handleVoice = (recognition) => {
//     recognition.start()

//     recognition.onresult = function (event) {
//         const resultIndx = event.resultIndex
//         const transcript = event.results[resultIndx][0].transcript
//         setUserHistory([transcript, ...userHistory])
//         matchReply(transcript)
//     }
// }


// const speak = (string) => {
//     const u = new SpeechSynthesisUtterance();
//     const allVoices = speechSynthesis.getVoices();
//     u.voice = allVoices.filter(voice => voice.name === "Alex")[0];
//     u.text = string;
//     u.lang = "vi-VN";
//     u.volume = 1;
//     u.rate = 1;
//     u.pitch = 1;
//     speechSynthesis.speak(u);
// }

//     return (
//         <div className="ABC">

//                 <form>
//                   <textarea type="text" 
//                         placeholder="Nhập câu hỏi?"
//                         value={userInput}
//                         onChange={handleChange}
//                       ></textarea>
//                 </form>                        
//                   <img 
//                       src='https://img.icons8.com/dusk/64/000000/microphone.png'
//                       alt='microphone-icon'
//                       variant='info' 
//                       type="submit" 
//                       className="mb-2 voice-chat-btn" 
//                       onClick={() => handleVoice(recognition)}
//                       className="TEst"
//                   />
//         </div>
//     )}
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from '../FireBase/FireBase';

function TEST() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
      {/*<img src="" alt="Avatar" width="50%"/>*/}
    </div>
  );
}

export default TEST;