var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

document.addEventListener('DOMContentLoaded', () => {

  // Табы

  const tabs = document.querySelector('.tabs');
  const tabsBtn = document.querySelectorAll('.services-button');
  const tabsContent = document.querySelectorAll('.services-text');

  if (tabs) {
    tabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('services-button')) {
        const tabsPath = e.target.dataset.tabsPath;

        tabsBtn.forEach(el => {el.classList.remove('services-button-active')});

        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('services-button-active');
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {

    tabsContent.forEach(el => {el.classList.remove('services-text-active')});

    document.querySelector(`[data-tabs-target="${path}"]`).classList.add('services-text-active');
  };

  // Модальное окно

  const modal = document.querySelector('.modal');
  const openModal = document.querySelector('.modal-open');
  const closeModal = document.querySelector('.modal-close');

  openModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('modal-holder-close');
  })

  closeModal.addEventListener('click', () => {
    modal.classList.add('modal-holder-close');
  })

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modal.classList.add('modal-holder-close');
    }
  })
});
