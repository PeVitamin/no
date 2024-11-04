// Функция для отложенной загрузки изображений и видео
function lazyLoad() {
    const lazyImages = document.querySelectorAll('.lazy');
    const lazyVideos = document.querySelectorAll('video[data-src]');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyElement = entry.target;
          lazyElement.src = lazyElement.dataset.src;
          lazyElement.classList.remove('lazy');
          observer.unobserve(lazyElement);
        }
      });
    });
  
    lazyImages.forEach((image) => {
      observer.observe(image);
    });
  
    lazyVideos.forEach((video) => {
      observer.observe(video);
    });
  }
  
  lazyLoad();