$('.dangnhapnhanh-toggle').on('click', function(e) {
  e.preventDefault();
  $('.dangnhapnhanh').toggleClass('is-visible');
});
//download now
$('.ppdlbt-toggle').on('click', function(e) {
  e.preventDefault();
  $('.ppdlbt').toggleClass('is-visible');
});

//Menu mobile modal level

class SideNav_Menu_level_Maga {
  constructor() {
    this.showButtonEl_Menu_level_Maga = document.querySelector('.js-menu-show_Menu_level_Maga');
    this.hideButtonEl_Menu_level_Maga = document.querySelector('.js-menu-hide_Menu_level_Maga');
    this.sideNavEl_Menu_level_Maga = document.querySelector('.js-side-nav_Menu_level_Maga');
    this.sideNavContainerEl_Menu_level_Maga = document.querySelector('.js-side-nav_Menu_level_Maga-container_Menu_level_Maga');

    this.showSideNav_Menu_level_Maga = this.showSideNav_Menu_level_Maga.bind(this);
    this.hideSideNav_Menu_level_Maga = this.hideSideNav_Menu_level_Maga.bind(this);
    this.blockClicks_Menu_level_Maga = this.blockClicks_Menu_level_Maga.bind(this);
    this.onTouchStart_Menu_level_Maga = this.onTouchStart_Menu_level_Maga.bind(this);
    this.onTouchMove_Menu_level_Maga = this.onTouchMove_Menu_level_Maga.bind(this);
    this.onTouchEnd_Menu_level_Maga = this.onTouchEnd_Menu_level_Maga.bind(this);
    this.onTransitionEnd_Menu_level_Maga = this.onTransitionEnd_Menu_level_Maga.bind(this);
    this.update_Menu_level_Maga = this.update_Menu_level_Maga.bind(this);

    this.startX_Menu_level_Maga = 0;
    this.currentX_Menu_level_Maga = 0;
    this.touchingSideNav_Menu_level_Maga = false;

    this.addEventListeners();
  }

  addEventListeners() {
    this.showButtonEl_Menu_level_Maga.addEventListener('click', this.showSideNav_Menu_level_Maga);
    this.hideButtonEl_Menu_level_Maga.addEventListener('click', this.hideSideNav_Menu_level_Maga);
    this.sideNavEl_Menu_level_Maga.addEventListener('click', this.hideSideNav_Menu_level_Maga);
    this.sideNavContainerEl_Menu_level_Maga.addEventListener('click', this.blockClicks_Menu_level_Maga);

    document.addEventListener('touchstart', this.onTouchStart_Menu_level_Maga);
    document.addEventListener('touchmove', this.onTouchMove_Menu_level_Maga);
    document.addEventListener('touchend', this.onTouchEnd_Menu_level_Maga);
  }

  onTouchStart_Menu_level_Maga(evt_Menu_level_Maga) {
    if (!this.sideNavEl_Menu_level_Maga.classList.contains('side-nav_Menu_level_Maga--visible'))
    return;

    this.startX_Menu_level_Maga = evt_Menu_level_Maga.touches[0].pageX_Menu_level_Maga;
    this.currentX_Menu_level_Maga = this.startX_Menu_level_Maga;

    this.touchingSideNav_Menu_level_Maga = true;
    requestAnimationFrame(this.update_Menu_level_Maga);
  }

  onTouchMove_Menu_level_Maga(evt_Menu_level_Maga) {
    this.currentX_Menu_level_Maga = evt_Menu_level_Maga.touches[0].pageX_Menu_level_Maga;
    const translateX_Menu_level_Maga = Math.min(0, this.currentX_Menu_level_Maga - this.startX_Menu_level_Maga);

    if (translateX_Menu_level_Maga < 0) {
      evt_Menu_level_Maga.preventDefault();
    }
  }

  onTouchEnd_Menu_level_Maga(evt_Menu_level_Maga) {
    this.touchingSideNav_Menu_level_Maga = false;

    const translateX_Menu_level_Maga = Math.min(0, this.currentX_Menu_level_Maga - this.startX_Menu_level_Maga);
    this.sideNavContainerEl_Menu_level_Maga.style.transform = '';

    if (translateX_Menu_level_Maga < 0) {
      this.hideSideNav_Menu_level_Maga();
    }
  }

  update_Menu_level_Maga() {
    if (!this.sideNavEl_Menu_level_Maga.classList.contains('side-nav_Menu_level_Maga--visible'))
    return;

    if (this.touchingSideNav_Menu_level_Maga)
    requestAnimationFrame(this.update_Menu_level_Maga);

    const translateX_Menu_level_Maga = Math.min(0, this.currentX_Menu_level_Maga - this.startX_Menu_level_Maga);
    this.sideNavContainerEl_Menu_level_Maga.style.transform = `translateX_Menu_level_Maga(${translateX_Menu_level_Maga}px)`;
  }

  blockClicks_Menu_level_Maga(evt_Menu_level_Maga) {
    evt_Menu_level_Maga.stopPropagation();
  }

  onTransitionEnd_Menu_level_Maga(evt_Menu_level_Maga) {
    this.sideNavEl_Menu_level_Maga.classList.remove('side-nav_Menu_level_Maga--animatable');
    this.sideNavEl_Menu_level_Maga.removeEventListener('transitionend', this.onTransitionEnd_Menu_level_Maga);
  }

  showSideNav_Menu_level_Maga() {
    this.sideNavEl_Menu_level_Maga.classList.add('side-nav_Menu_level_Maga--animatable');
    this.sideNavEl_Menu_level_Maga.classList.add('side-nav_Menu_level_Maga--visible');
    this.sideNavEl_Menu_level_Maga.addEventListener('transitionend', this.onTransitionEnd_Menu_level_Maga);
  }

  hideSideNav_Menu_level_Maga() {
    this.sideNavEl_Menu_level_Maga.classList.add('side-nav_Menu_level_Maga--animatable');
    this.sideNavEl_Menu_level_Maga.classList.remove('side-nav_Menu_level_Maga--visible');
    this.sideNavEl_Menu_level_Maga.addEventListener('transitionend', this.onTransitionEnd_Menu_level_Maga);
  }}


new SideNav_Menu_level_Maga();
//Dropdown menu level
$(document).ready(function() {
    $("#levelmenu_web a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_ghim_menu_level_links = closest_ul.find(".ghim_menu_level")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("ghim_menu_level");
        var count = 0;

        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length){
                parallel_ghim_menu_level_links.removeClass("ghim_menu_level");
                parallel_ghim_menu_level_links.children("ul").removeClass("show-tha_xuong the_menu_ul");
            }
        });

        if (!link_status) {
            closest_li.children("ul").slideDown().addClass("show-tha_xuong the_menu_ul");
            closest_li.parent().parent("li.ghim_menu_level").find('ul').find("li.ghim_menu_level").removeClass("ghim_menu_level");
            link.parent().addClass("ghim_menu_level");
        }
    })
});


// tự động auto text
document.addEventListener("DOMContentLoaded", init);

function WaitingFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const KeyEffect = async (wait, content) => {
    var effectTag = document.querySelector('.type-boxt');
    for (const el of content) {
        await WaitingFor(wait);
        var print;
        for (i = 0; i < el.length; i++) {
            print = el[i];
            effectTag.innerHTML = effectTag.innerHTML + print;
            await WaitingFor(wait);
        }
        await WaitingFor(wait);
        for (j = el.length; j >= 0; j--) {
            var printminus = el.slice(0, j);
            effectTag.innerHTML = printminus;
            await WaitingFor(wait / 4);
        }
    }
    init();
}

function init() {
    const effectTag = document.querySelector('.type-boxt');
    var wait = effectTag.getAttribute('data-wait');
    var Rawcontent = effectTag.getAttribute('data-content');
    const content = JSON.parse(Rawcontent);
    KeyEffect(wait, content);
}
