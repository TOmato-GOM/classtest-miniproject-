let count = 1;
let imgChange = document.getElementById('class_img');
const interval = setInterval(function () {
  count++;
  imgChange.src = `/asset/image/slider/slider_${count}.png`;
  if (count >= 17) {
    count = 0;
  }
}, 1500);
