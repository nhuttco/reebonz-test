$(document).ready(function () {
  const mySwiper = new Swiper('.hero-banner-slider', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000
    },
    pagination: {
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
  const swiper = new Swiper('.trend-list-slider', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 5000
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  const renderNewEvent = ({
    name,
    desc
  }, index) => {
    const style_format = [4, 8, 4, 4, 4, 8, 4, 4, 4, 4];
    const col = index % style_format.length;
    return `<div class="col-md-${style_format[col]} col-sm-${style_format[col]} item">
    <div class="thumb">
      <img src="images/img_event.jpg" alt="brand-focus">
    </div>
    <div class="info">
        <p class="title">${name}</p>
        <p class="desc">${desc}</p>
    </div>
    </div>`;
  };

  const render = (data, selector, func) => {
    $.get(data).then(response => {
      response.forEach((ele, index) => {
        $(selector).append(func(ele, index));
      });
    });
  };

  render('data/data_events.json', '.event-list', renderNewEvent);
});
//# sourceMappingURL=main.js.map
