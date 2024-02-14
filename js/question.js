const questionTitle = document.getElementById('question');
const answer1 = document.querySelector('.answer_box1');
const answer2 = document.querySelector('.answer_box2');
const answer3 = document.querySelector('.answer_box3');

const question = [
  {
    q: 'Q1. 갑자기 위협적인 개가 나타났다! 당신은 어떻게 할 것인가요?',
    a: [
      {
        answer: '사나운 개의 눈을 똑바로 쳐다보고 내가 더 강함을 인지시켜준다.',
        score: 0,
      },
      { answer: '팔다리 온 몸을 동원해서 쫓아내려고 위협을 가한다.', score: 5 },
      {
        answer: '내 근처에 있는 돌 같은 것을 줏은 다음 던질 것 처럼 위협한다.',
        score: 10,
      },
    ],
  },
  {
    q: 'Q2. 길 가다가 쓰러진 사람을 봤다! 당신은 어떻게 할 것인가?',
    a: [
      {
        answer: '황급히 달려가 아는 지식을 총동원해서 쓰러진 사람을 도와준다.',
        score: 10,
      },
      { answer: '쓰러진 사람의 의식을 확인한 후, 119에 전화한다.', score: 5 },
      {
        answer: '최대한 빠르게 주변 사람들에게 알리고, 도움을 청한다.',
        score: 0,
      },
    ],
  },
  {
    q: 'Q3. 당신이 일을 할 때 가장 필요로 하는 사람은?',
    a: [
      {
        answer: '무슨 일이 일어나도 해결해주는 듬직하고 든든한 사람.',
        score: 0,
      },
      { answer: '나를 다독여주고 응원해주는 착하고 친절한 사람.', score: 10 },
      {
        answer: '서로 재밌는 농담하며 재밌게 놀고 친구처럼 지내는 사람.',
        score: 5,
      },
    ],
  },
  {
    q: 'Q4. 술자리에서 당신의 친구가 취기가 올라와 비틀거리고 있는 상태이다! 당신의 행동은?',
    a: [
      {
        answer: '시원한 물을 주면서 정신 차리라고 한다.',
        score: 10,
      },
      { answer: '친구의 상태를 확인하고 괜찮냐고 물어본다.', score: 5 },
      {
        answer:
          '위험할지 모르니 친구를 부축하며 택시를 잡아 안전하게 집에 보낸다.',
        score: 0,
      },
    ],
  },
  {
    q: 'Q5. 당신은 신입 탐정! 처음으로 사건을 맡았는데 가장 필요한 것은?',
    a: [
      {
        answer: '무기',
        score: 5,
      },
      { answer: '변장도구', score: 10 },
      {
        answer: '호신술',
        score: 0,
      },
    ],
  },
  {
    q: 'Q6. 동시에 세가지 일이 일어난다. 아기가 울고있고, 초인종 벨소리가 요란하게 울리고, 가스불에 올려놓은 물이 펄펄 끓고있다. 당신이 첫번째로 할 행동은?',
    a: [
      {
        answer: '1. 가스불을 끈다.',
        score: 0,
      },
      { answer: '2. 아기를 먼저 돌본다.', score: 10 },
      {
        answer: '3. 초인종을 듣고 문으로 뛰어간다.',
        score: 5,
      },
    ],
  },
  {
    q: 'Q7. 당신은 이웃 나라와 최후의 전투가 펼쳐지고 있는 전장에 서 있습니다. 어떤 역할을 담당하고 있을까요?',
    a: [
      {
        answer: '최전선에서 적군과 육박전을 벌이는 영웅.',
        score: 5,
      },
      { answer: '부대를 전두지휘하는 카리스마 넘치는 지휘관', score: 0 },
      {
        answer: '멀리서 적을 공격해 다가오지 못하게 원천차단하는 역할',
        score: 7,
      },
    ],
  },
  {
    q: 'Q8. a',
    a: [
      {
        answer: 'a',
        score: 1,
      },
      { answer: 'b', score: 2 },
      {
        answer: 'c',
        score: 3,
      },
    ],
  },
  {
    q: 'b',
    a: [
      {
        answer: 'a',
        score: 1,
      },
      { answer: 'b', score: 2 },
      {
        answer: 'c',
        score: 3,
      },
    ],
  },
  {
    q: 'a',
    a: [
      {
        answer: '1',
        score: 2,
      },
      { answer: 'b', score: 2 },
      {
        answer: 'c',
        score: 3,
      },
    ],
  },
];

function goNext() {
  let i = 0;
  questionTitle.innerHTML = question[i].q;
  answer1.innerHTML = question[i].a[0].answer;
  answer2.innerHTML = question[i].a[1].answer;
  answer3.innerHTML = question[i].a[2].answer;

  const clickAnswer = () => {
    i++;
    console.log(i);
    questionTitle.innerHTML = question[i].q;
    answer1.innerHTML = question[i].a[0].answer;
    answer2.innerHTML = question[i].a[1].answer;
    answer3.innerHTML = question[i].a[2].answer;
  };
  answer1.addEventListener('click', clickAnswer);
  answer2.addEventListener('click', clickAnswer);
  answer3.addEventListener('click', clickAnswer);
}
goNext();
