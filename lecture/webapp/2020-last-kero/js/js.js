let question = {
  iwashi: {
    pt: 100,
    q: '鰯',
    ans: 'いわし',
    choose: ['いわし', 'いわな', 'さば', 'ふぐ']
  },
  kazunoko: {
    pt: 200,
    q: '鯑',
    ans: 'かずのこ',
    choose: ['かずのこ', 'まぐろ', 'ます', 'きす']
  },
  kisu: {
    pt: 100,
    q: '鱚',
    ans: 'きす',
    choose: ['きす', 'いわな', 'ぼら', 'ふぐ']
  },
  saba: {
    pt: 100,
    q: '鯖',
    ans: 'さば',
    choose: ['さば', 'いわし', 'さわら', 'うぐい']
  },
  ugui: {
    pt: 200,
    q: '鯏',
    ans: 'うぐい',
    choose: ['うぐい', 'いわし', 'あじ', 'さより']
  },
  aji: {
    pt: 100,
    q: '鯵',
    ans: 'あじ',
    choose: ['あじ', 'さわら', 'かます', 'さば']
  },
  karei: {
    pt: 100,
    q: '鰈',
    ans: 'かれい',
    choose: ['かれい', 'さわら', 'いわな', 'ひらめ']
  },
  kawahagi: {
    pt: 100,
    q: '鮍',
    ans: 'かわはぎ',
    choose: ['かわはぎ', 'かれい', 'こい', 'たら']
  },
  tara: {
    pt: 100,
    q: '鱈',
    ans: 'たら',
    choose: ['たら', 'まぐろ', 'たい', 'さば']
  },
  koi: {
    pt: 100,
    q: '鯉',
    ans: 'こい',
    choose: ['こい', 'うぐい', 'きんぎょ', 'たなご']
  },
  suzuki: {
    pt: 200,
    q: '鱸',
    ans: 'すずき',
    choose: ['すずき', 'たら', 'どじょう', 'はも']
  },
  hugu: {
    pt: 200,
    q: '鰒',
    ans: 'ふぐ',
    choose: ['ふぐ', 'ひらめ', 'さわら', 'ふな']
  },
  sawara: {
    pt: 100,
    q: '鰆',
    ans: 'さわら',
    choose: ['さわら', 'さば', 'さより', 'さけ']
  },
  sake: {
    pt: 100,
    q: '鮭',
    ans: 'さけ',
    choose: ['さけ', 'まぐろ', 'たい', 'たこ']
  },
  tako: {
    pt: 100,
    q: '蛸',
    ans: 'たこ',
    choose: ['たこ', 'いか', 'さけ', 'まぐろ']
  },
  mebaru: {
    pt: 200,
    q: '鮴',
    ans: 'めばる',
    choose: ['めばる', 'ます', 'ふな', 'はまち']
  },
  maguro: {
    pt: 100,
    q: '鮪',
    ans: 'まぐろ',
    choose: ['まぐろ', 'たこ', 'ふな', 'たい']
  },
  tai: {
    pt: 100,
    q: '鯛',
    ans: 'たい',
    choose: ['たい', 'さけ', 'はも', 'たなご']
  },
  masu: {
    pt: 200,
    q: '鱒',
    ans: 'ます',
    choose: ['ます', 'めばる', 'たら', 'なまず']
  },
  hirame: {
    pt: 100,
    q: '鮃',
    ans: 'ひらめ',
    choose: ['ひらめ', 'ふな', 'にしん', 'いわし']
  },
  nishin: {
    pt: 200,
    q: '鰊',
    ans: 'にしん',
    choose: ['にしん', 'すずき', 'さより', 'きす']
  },
  katsuo: {
    pt: 100,
    q: '鰹',
    ans: 'かつお',
    choose: ['かつお', 'たい', 'たなご', 'はも']
  }
}

let questionFish = ['iwashi', 'kazunoko', 'kisu', 'saba', 'ugui', 'aji', 'karei', 'kawahagi', 'tara', 'koi', 'suzuki', 'hugu', 'sawara', 'sake', 'tako', 'mebaru', 'maguro', 'tai', 'masu', 'hirame', 'nishin', 'katsuo'];

let allFishNum = [];
let fishNum;

let sushiImg = [
  'buri', 'ebi', 'ika', 'ikura', 'maguro', 'natto', 'samon', 'chutoro', 'nodoguro', 'tai'
]
let sushiImgNum = 'maguro';

let fishNumRandom = () => {
  do
    fishNum = Math.floor(Math.random() * (21 - 0));
  while (allFishNum.indexOf(fishNum) != -1);
  allFishNum.push(fishNum);

  if (question[questionFish[fishNum]]['pt'] == 100) {
    sushiImgNum = Math.floor(Math.random() * (7 - 0));
  } else if (question[questionFish[fishNum]]['pt'] == 200) {
    sushiImgNum = Math.floor(Math.random() * (10 - 7) + 7);
  }
}

let btn = [];

let btnNum = () => {
  btn = [];
  for (let i = 0; i < 4; i++) {
    do
      ran = Math.floor(Math.random() * (4 - 0));
    while (btn.indexOf(ran) != -1);
    btn.push(ran);
  }
}

fishNumRandom();
btnNum();

let right = document.getElementById('right');
let miss = document.getElementById('miss');
let hover = document.getElementById('hover');
let oh = document.getElementById('oh');
let kaka = document.getElementById('kaka');
let sound = false;

let score = 0;
let green = 0;
let black = 0;

let app = new Vue({
  el: '#app',
  data: {
    sound: 'start',
    top: 'start',
    how: 'end',
    quiz: 'end',
    score: 'end',
    scoreH: 'end',
    scoreLow: 'end',
    scoreHigh: 'end',
    scoreAll: 'end',
    scoreRe: 'end',
    lowDish: '× ' + green + ' = ' + (green * 100),
    highDish: '× ' + black + ' = ' + (black * 100),
    allScore: score + '点',
    num: 0,
    countDown: '',
    kanji: question[questionFish[fishNum]]['q'],
    btnCnt: false,
    button1: question[questionFish[fishNum]].choose[btn[0]],
    button2: question[questionFish[fishNum]].choose[btn[1]],
    button3: question[questionFish[fishNum]].choose[btn[2]],
    button4: question[questionFish[fishNum]].choose[btn[3]],
    light1: '',
    light2: '',
    light3: '',
    light4: '',
    sushi: 'img/sushi/' + sushiImg[sushiImgNum] + '.png',
    sushiId: 'sushianim'
  },
  methods: {
    on: function () {
      sound = true;
      this.sound = 'end';
    },
    off: function () {
      sound = false;
      this.sound = 'end';
    },
    hover: function () {
      if (sound) {
        hover.currentTime = 0;
        hover.play();
      }
    },
    goHow: function () {
      this.how = 'start';
      this.top = 'end';
    },
    backTop: function () {
      this.how = 'end';
      this.top = 'start';
    },
    gameStart: function () {
      this.num = 0;
      score = 0;
      green = 0;
      black = 0;
      allFishNum = [];
      btn = [];
      this.sushiId = '';
      setTimeout(() => {
        this.top = 'end';
        this.quizAgain();
        this.quiz = 'start';
      }, 100);
    },
    scoreBoard: function () {
      this.quiz = 'end';
      this.score = 'start';
      if (sound) {
        oh.play();
      }
      this.scoreH = 'start';
      setTimeout(() => {
        if (sound) {
          hover.currentTime = 0;
          hover.play();
        }
        this.scoreLow = 'start';
        this.scoreHigh = 'start';
        setTimeout(() => {
          if (sound) {
            hover.currentTime = 0;
            hover.play();
          }
          this.scoreAll = 'start';
          setTimeout(() => {
            if (sound) {
              kaka.play();
            }
            this.scoreRe = 'start';
          }, 800)
        }, 800)
      }, 1000)
    },
    scoreCalc: function () {
      score += question[questionFish[fishNum]]['pt'];
      this.allScore = score + '点';
      if (question[questionFish[fishNum]]['pt'] == 100) {
        green += 1;
        this.lowDish = '× ' + green + ' = ' + (green * 100);
      } else if (question[questionFish[fishNum]]['pt'] == 200) {
        black += 1;
        this.highDish = '× ' + black + ' = ' + (black * 100);
      }
    },
    lightAnswer: function () {
      if (question[questionFish[fishNum]].choose[btn[0]] == question[questionFish[fishNum]].ans) {
        this.light1 = 'light';
      } else if (question[questionFish[fishNum]].choose[btn[1]] == question[questionFish[fishNum]].ans) {
        this.light2 = 'light';
      } else if (question[questionFish[fishNum]].choose[btn[2]] == question[questionFish[fishNum]].ans) {
        this.light3 = 'light';
      } else if (question[questionFish[fishNum]].choose[btn[3]] == question[questionFish[fishNum]].ans) {
        this.light4 = 'light';
      }
    },
    timer: function () {
      this.countDown = setTimeout(() => {
        this.lightAnswer();
        miss.play();
        this.sushiId = '';
        setTimeout(this.quizAgain, 2000);
      }, 16500);
    },
    quizAgain: function () {
      this.light1 = '';
      this.light2 = '';
      this.light3 = '';
      this.light4 = '';
      fishNumRandom();
      this.kanji = question[questionFish[fishNum]]['q'];
      this.sushi = 'img/sushi/' + sushiImg[sushiImgNum] + '.png';
      btnNum();
      this.button1 = question[questionFish[fishNum]].choose[btn[0]];
      this.button2 = question[questionFish[fishNum]].choose[btn[1]];
      this.button3 = question[questionFish[fishNum]].choose[btn[2]];
      this.button4 = question[questionFish[fishNum]].choose[btn[3]];
      this.num += 1;
      this.sushiId = 'sushianim';
      this.btnCnt = false;
      this.timer();
    },
    btnCalc: function(num) {
      if (!this.btnCnt) {
        this.lightAnswer();
        this.btnCnt = true;
        clearTimeout(this.countDown);
        if (question[questionFish[fishNum]].choose[btn[num]] == question[questionFish[fishNum]].ans) {
          this.kanji = '○';
          if (sound) {
            right.play();
          }
          this.sushiId = '';
          this.scoreCalc();
        } else {
          this.kanji = '×';
          if (sound) {
            miss.play();
          }
          this.sushiId = '';
        }
        if (this.num < 10) {
          setTimeout(this.quizAgain, 2000);
        } else {
          setTimeout(this.scoreBoard, 1500);
        }
      }
    },
    btn1: function () {
      this.btnCalc(0);
    },
    btn2: function () {
      this.btnCalc(1);
    },
    btn3: function () {
      this.btnCalc(2);
    },
    btn4: function () {
      this.btnCalc(3);
    },
    repeat: function () {
      this.score = 'end';
      this.top = 'start';
    }
  }
});
