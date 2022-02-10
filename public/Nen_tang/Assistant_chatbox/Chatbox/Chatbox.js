var $messages_Emmy = $('.messages_Emmy-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages_Emmy.mCustomScrollbar();
  setTimeout(function() {
    fakeMessage_Emmy();
  }, 100);
});

function updateScrollbar_Emmy() {
  $messages_Emmy.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate_Emmy(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function insertMessage_Emmy() {
  msg = $('.message-input_Emmy').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate_Emmy();
  $('.message-input_Emmy').val(null);
  updateScrollbar_Emmy();
  setTimeout(function() {
    fakeMessage_Emmy();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
  insertMessage_Emmy();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage_Emmy();
    return false;
  }
})

var Fake_Emmy = [
  'Hi there, I\'m Fabio and you?',
  'Nice to meet you',
  'How are you?',
  'Not too bad, thanks',
  'What do you do?',
  'That\'s awesome',
  'Codepen is a nice place to stay',
  'I think you\'re a nice person',
  'Why do you think that?',
  'Can you explain?',
  'Anyway I\'ve gotta go now',
  'It was a pleasure chat with you',
  'Time to make a new codepen',
  'Bye',
  ':)'
]

function fakeMessage_Emmy() {
  if ($('.message-input_Emmy').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar_Emmy();

  setTimeout(function() {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>' + Fake_Emmy[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate_Emmy();
    updateScrollbar_Emmy();
    i++;
  }, 1000 + (Math.random() * 20) * 100);
}
//âm thanh nhấn gửi
function playSound(animal) {
  document.getElementById(animal).play();
};