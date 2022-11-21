'use strict';

const storage = localStorage;

PetiteVue.createApp({
  //   msg: ['負けてください ! !', '勝ってください ! !'],
  //   num: 0,
  //   num2: 0,
  //   imgs: [
  //     'images/janken_gu.png',
  //     'images/janken_choki.png',
  //     'images/janken_pa.png'
  //   ],
  //   num2: Math.floor(Math.random() * 3),
  //   people: 'images/ouen_jersey_woman5_yellow.png',
  //   judge: '',

  name: '',
  // cnt: 1,
  // correct: 0,

  playerSet() {
    storage.player = this.name;
  },

  //   init(){
  // if(this.name == ''){
  //   this.name = storage.player
  // }
  //   },

  //   keySet(){
  //     storage.store = this.correct
  //   },

  //   result(n) {
  //     if (this.num == 0 && this.num2 == 0) {
  //       console.log('A');
  //       if (n == 2) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 1) {
  //         //スタイルをtrueに
  //         this.judge = this.name + 'さん、' + 'あなたは天才ですね';
  //         this.people = 'images/quiz_woman_maru.png';
  //         this.correct += 1;
  //         console.log(this.num);
  //       } else if (n == 0) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       }
  //     } else if (this.num == 0 && this.num2 == 1) {
  //       if (n == 2) {
  //         //スタイルをtrueに
  //         this.judge = this.name + 'さん、' + 'あなたは天才ですね';
  //         this.people = 'images/quiz_woman_maru.png';
  //         this.correct += 1;
  //       } else if (n == 1) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 0) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       }
  //     } else if (this.num == 0 && this.num2 == 2) {
  //       if (n == 2) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 1) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 0) {
  //         //スタイルをtrueに
  //         this.judge = this.name + 'さん、' + 'あなたは天才ですね';
  //         this.people = 'images/quiz_woman_maru.png';
  //         this.correct += 1;
  //       }
  //     } else if (this.num == 1 && this.num2 == 0) {
  //       if (n == 2) {
  //         //スタイルをtrueに
  //         this.judge = this.name + 'さん、' + 'あなたは天才ですね';
  //         this.people = 'images/quiz_woman_maru.png';
  //         this.correct += 1;
  //       } else if (n == 1) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 0) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       }
  //     } else if (this.num == 1 && this.num2 == 1) {
  //       if (n == 2) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 1) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 0) {
  //         //スタイルをtrueに
  //         this.judge = this.name + 'さん、' + 'あなたは天才ですね';
  //         this.people = 'images/quiz_woman_maru.png';
  //         this.correct += 1;
  //       }
  //     } else if (this.num == 1 && this.num2 == 2) {
  //       if (n == 2) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       } else if (n == 1) {
  //         //スタイルをtrueに
  //         this.judge = this.name + 'さん、' + 'あなたは天才ですね';
  //         this.people = 'images/quiz_woman_maru.png';
  //         this.correct += 1;
  //       } else if (n == 0) {
  //         //スタイルをtrueに
  //         this.judge = 'ざんねん...不正解です !!';
  //         this.people = 'images/quiz_woman_batsu.png';
  //       }
  //     }
  //   },
  //   load() {
  //     this.cnt += 1;
  //     this.num = Math.floor(Math.random() * 2);
  //     this.num2 = Math.floor(Math.random() * 3);
  //     this.people = 'images/ouen_jersey_woman5_yellow.png';
  //     this.judge = '';
  //     if (this.cnt > 5) {
  //       this.idx = 1;
  //       this.cnt = 5;
  //     }
  //   },

  styleList: [{ display: 'none' }, { display: 'block' }],
  idx: 0
}).mount();

// const storagedData = storage.store;
// document.getElementById('score').textContent = `スコア：${storagedData}点でした`;
