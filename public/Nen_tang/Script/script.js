//auto height textarea
function getScrollHeight(elm){
  var savedValue = elm.value
  elm.value = ''
  elm._baseScrollHeight = elm.scrollHeight
  elm.value = savedValue
}

function onExpandableTextareaInput({ target:elm }){
  if( !elm.classList.contains('Auto_size_textarea') || !elm.nodeName == 'TEXTAREA' ) return
  
  var minRows = elm.getAttribute('data-min-rows')|0, rows;
  !elm._baseScrollHeight && getScrollHeight(elm)

  elm.rows = minRows
  rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
  elm.rows = minRows + rows
}

document.addEventListener('input', onExpandableTextareaInput)

//Âm thanh khi click Assistant
const button_sound = document.getElementById("button_assistant");

button_sound.onclick = function() {
  const audio = document.getElementById("clicksound");
  audio.pause();
  audio.currentTime = 0;
  audio.play();
};


//Voice Read News

//end voice readnews