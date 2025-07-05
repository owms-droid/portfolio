const sentences = [
  "> _Web Developer",
  "> _Designer",
  "> _Problem Solver",
  "> _Digital Marketer"
];
const animatedText = document.querySelector('.animated-text');
let sentenceIdx = 0, charIdx = 0, typing = true;

function typeErase() {
  const current = sentences[sentenceIdx];
  if (typing) {
    animatedText.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      typing = false;
      setTimeout(typeErase, 1200); // Pause before erasing
    } else {
      setTimeout(typeErase, 70);
    }
  } else {
    animatedText.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      typing = true;
      sentenceIdx = (sentenceIdx + 1) % sentences.length;
      setTimeout(typeErase, 400); // Pause before typing next
    } else {
      setTimeout(typeErase, 40);
    }
  }
}
typeErase();

// Carousel vertical sliding logic
const carouselImgs = document.querySelectorAll('.carousel-img');
let carouselIdx = 0;

function updateCarousel() {
    carouselImgs.forEach((img, i) => {
        img.classList.remove('active', 'prev', 'next');
        if (i === carouselIdx) {
            img.classList.add('active');
        } else if (i === (carouselIdx - 1 + carouselImgs.length) % carouselImgs.length) {
            img.classList.add('prev');
        } else if (i === (carouselIdx + 1) % carouselImgs.length) {
            img.classList.add('next');
        }
    });
}

function nextCarouselImg() {
    carouselIdx = (carouselIdx + 1) % carouselImgs.length;
    updateCarousel();
}

updateCarousel();
setInterval(nextCarouselImg, 2500);