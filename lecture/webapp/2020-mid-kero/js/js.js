let app = new Vue({
  el: '#app',
  data: {
    soup: false,
    tare: 'shoyutare',
    ramen: [],
    guest: '',
    ram: '',
    tptyashu: '',
    tpegg: '',
    tpmenma: '',
    tpnori: '',
    tpnegi: '',
    tpnaruto: '',
    men: '',
    pt: 0
  },
  computed: {
    shoyutare: function () {
      return (this.tare === 'shoyutare' && this.soup === false) ? 'show' : 'hide';
    },
    shoyuton: function () {
      return (this.soup === 'tonsoup' && this.tare === 'shoyutare') ? ['show', this.ram = 'shoyuton'] : 'hide';
    },
    shoyutori: function () {
      return (this.soup === 'torisoup' && this.tare === 'shoyutare') ? ['show', this.ram = 'shoyutori'] : 'hide';
    },
    siotare: function () {
      return (this.tare === 'siotare' && this.soup === false) ? 'show' : 'hide';
    },
    sioton: function () {
      return (this.soup === 'tonsoup' && this.tare === 'siotare') ? ['show', this.ram = 'sioton'] : 'hide';
    },
    siotori: function () {
      return (this.soup === 'torisoup' && this.tare === 'siotare') ? ['show', this.ram = 'siotori'] : 'hide';
    },
    menyude: function () {
      return (this.ramen.includes('menyude')) ? ['show', this.men = true] : ['hide', this.men = false];
    },
    tyashu: function () {
      return (this.ramen.includes('tyashu')) ? ['show', this.tptyashu = true] : ['hide', this.tptyashu = false];
    },
    egg: function () {
      return (this.ramen.includes('egg')) ? ['show', this.tpegg = true] : ['hide', this.tpegg = false];
    },
    menma: function () {
      return (this.ramen.includes('menma')) ? ['show', this.tpmenma = true] : ['hide', this.tpmenma = false];
    },
    nori: function () {
      return (this.ramen.includes('nori')) ? ['show', this.tpnori = true] : ['hide', this.tpnori = false];
    },
    negi: function () {
      return (this.ramen.includes('negi')) ? ['show', this.tpnegi = true] : ['hide', this.tpnegi = false];
    },
    naruto: function () {
      return (this.ramen.includes('naruto')) ? ['show', this.tpnaruto = true] : ['hide', this.tpnaruto = false];
    }
  }
});

/* お客さん・注文乱数用配列 */
let human = ['url("img/guest/woman.png")', 'url("img/guest/hageman.png")', 'url("img/guest/potyaman.png")', 'url("img/guest/tyaraman.png")'];
let rams = ['shoyuton', 'sioton', 'shoyutori', 'siotori'];
let tops = ['negiout', 'menmaout', 'eggout'];

/* 入退店判定用 */
let seet = 'open';

/* クラス削除 */
let remove = (elme, cla) => {
  (elme.classList.contains(cla)) ? elme.classList.remove(cla): '';
}

/* チェック全解除＆ラーメン具材初期化 */
let checkOut = () => {
  let inputAll = document.querySelectorAll('input');
  let imgAll = document.querySelectorAll('img[alt="具材"]');
  let ramenApp = [app.tare, app.guest, app.ram, app.tptyashu, app.tpmenma, app.tpnori, app.tpnegi, app.tpnaruto, app.men];

  /* チェック解除 */
  for (let i = 0; i < inputAll.length; i++) {
    inputAll[i].checked = false;
  }
  
  /* 各要素から.showを取り除く */
  for (let i = 0; i < imgAll.length; i++) {
    remove(imgAll[i], 'show');
  }
  
  /* 判定用変数初期化 */
  for (let i = 0; i < ramenApp.length; i++) {
    ramenApp[i] = '';
  }
  app.soup = false;
  app.ramen = [];
  /* 判定用変数初期化終了 */
}
/* チェック全解除＆ラーメン具材初期化終了 */


/* お客さん来店 */
let humanIn = () => {
  let humanR = Math.floor(Math.random() * (3 - 0));
  let humanBox = document.querySelector('label[for="one"]');
  let ramOrder = humanBox.querySelectorAll('.ramorder');
  let topOrder = humanBox.querySelectorAll('.toporder');
  let ramsR = Math.floor(Math.random() * (3 - 0));
  let topsR = Math.floor(Math.random() * (7 - 0));

  /* お客さん退店 */
  let clearGame = () => {
    humanBox.style.backgroundImage = 'none';
    remove(ramOrder[ramsR], 'show');
    app.pt += 700;
    seet = 'open';
  }

  /* お客さん入店 */
  if (seet === 'open') {
    seet = 'close';
    /* お客さん・注文表示 */
    let input = document.querySelector('input[name="guest"]');
    humanBox.style.backgroundImage = human[humanR];
    ramOrder[ramsR].classList.add('show');
    if (topsR < 3) {
      topOrder[topsR].classList.add('show');
    }

    /* お会計 */
    input.addEventListener('click', () => {
      if (rams[ramsR] === app.ram && app.men && app.tptyashu && app.tpnori && app.tpnaruto && app.guest === 'one') {
        if (topsR === 0 && !app.tpnegi && app.tpmenma && app.tpegg) {
          remove(topOrder[topsR], 'show');
          checkOut();
          clearGame();
          humanIn();
        } else if (topsR === 1 && app.tpnegi && !app.tpmenma && app.tpegg) {
          remove(topOrder[topsR], 'show');
          checkOut();
          clearGame();
          humanIn();
        } else if (topsR === 2 && app.tpnegi && app.tpmenma && !app.tpegg) {
          remove(topOrder[topsR], 'show');
          checkOut();
          clearGame();
          humanIn();
        } else if (topsR > 2 && app.tpnegi && app.tpmenma && app.tpegg) {
          clearGame();
          checkOut();
          humanIn();
        }
      }
    });

  }
}

humanIn();
