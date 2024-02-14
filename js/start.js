const startBtn = document.getElementById('start_button');
const titlePage = document.querySelector('.title_container');
const testPage = document.querySelector('.test_container');

const startBtnHandler = () => {
  titlePage.style.display = 'none';
  testPage.style.display = '';
};

startBtn.addEventListener('click', startBtnHandler);
