"use strict";
PetiteVue.createApp({
  box: "",
  box2: "",
  box3: "",
  box4: "",
  box5: "",
  box6: "",
  box7: "",
  box8: "",
  box9: "",
  box10: "",
  box11: "",
  box12: "",
  box13: "",
  box14: "",
  box15: "",
  box16: "",
  box17: "",
  box18: "",
  box19: "",
  box20: "",
  box21: "",
  box21: "",
  box22: "",
  box23: "",
  box24: "",
  box25: "",
  box26: "",
  box27: "",
  box28: "",
  box29: "",
  box30: "",

  score: 0,
  message: "",
  scored: false,
  value: "",
  text1: "",
  text2: "",
  text3: "",
  text4: "",
  text5: "",
  text6: "",
  text7: "",
  text8: "",
  text9: "",
  text10: "",
  myStyle: { display: "none", color: "firebrick" },

  calculateScore() {
    this.score = 0;
    let src = 10;
    if (this.box === "切り干し大根") {
      this.score += src;
    }
    if (this.box2 === "肉") {
      this.score += src;
    }
    if (this.box3 === "青魚") {
      this.score += src;
    }
    if (this.box4 === "口内炎") {
      this.score += src;
    }
    if (this.box5 === "貧血") {
      this.score += src;
    }
    if (this.box6 === "キウイ") {
      this.score += src;
    }
    if (this.box7 === "骨粗しょう症") {
      this.score += src;
    }
    if (this.box8 === "ビタミンD") {
      this.score += src;
    }
    if (this.box9 === "がん") {
      this.score += src;
    }
    if (this.box10 === "チーズ") {
      this.score += src;
    }
    if (this.box11 === "茄子") {
      this.score += src;
      console.log("box11 matched: ", this.score);
    }
    if (this.box12 === "鰻") {
      this.score += src;
      console.log("box12 matched: ", this.score);
    }
    if (this.box13 === "トマト") {
      this.score += src;
      console.log("box13 matched: ", this.score);
    }
    if (this.box14 === "大根") {
      this.score += src;
      console.log("box14 matched: ", this.score);
    }
    if (this.box15 === "栗") {
      this.score += src;
      console.log("box15 matched: ", this.score);
    }
    if (this.box16 === "葱") {
      this.score += src;
      console.log("box16 matched: ", this.score);
    }
    if (this.box17 === "海老") {
      this.score += src;
      console.log("box17 matched: ", this.score);
    }
    if (this.box18 === "余り茶") {
      this.score += src;
      console.log("box18 matched: ", this.score);
    }
    if (this.box19 === "牡丹餅") {
      this.score += src;
      console.log("box19 matched: ", this.score);
    }
    if (this.box20 === "芋") {
      this.score += src;
      console.log("box20 matched: ", this.score);
    }
    if (this.box21 === "トリュフ") {
      this.score += src;
      console.log("box20 matched: ", this.score);
    }
    if (this.box22 === "こし") {
      this.score += src;
      console.log("box22 matched: ", this.score);
    }
    if (this.box23 === "心臓") {
      this.score += src;
      console.log("box23 matched: ", this.score);
    }
    if (this.box24 === "ナツメグ") {
      this.score += src;
      console.log("box24 matched: ", this.score);
    }
    if (this.box25 === "羊肉") {
      this.score += src;
      console.log("box25 matched: ", this.score);
    }
    if (this.box26 === "毒") {
      this.score += src;
      console.log("box26 matched: ", this.score);
    }
    if (this.box27 === "原料") {
      this.score += src;
      console.log("box27 matched: ", this.score);
    }
    if (this.box28 === "はちみつ") {
      this.score += src;
      console.log("box28 matched: ", this.score);
    }
    if (this.box29 === "味噌") {
      this.score += src;
      console.log("box29 matched: ", this.score);
    }
    if (this.box30 === "サラダ油") {
      this.score += src;
      console.log("box30 matched: ", this.score);
    }
    if (this.text1 === "たまねぎ") {
      this.score += src;
    }
    if (this.text2 === "40") {
      this.score += src;
    }
    if (this.text3 === "手品") {
      this.score += src;
    }

    if (this.text4 === "レモン") {
      this.score += src;
    }
    if (this.text5 === "梨") {
      this.score += src;
    }
    if (this.text6 === "ちくわ") {
      this.score += src;
    }
    if (this.text7 === "うどん") {
      this.score += src;
    }
    if (this.text8 === "6") {
      this.score += src;
    }
    if (this.text9 === "シュウマイ") {
      this.score += src;
    }
    if (this.text10 === "シチュー") {
      this.score += src;
    }
    if (this.score < 50) {
      //点数に合わせて表示される文を変える
      this.message = "次はがんばろう！";
    } else if (this.score <= 80) {
      this.message = "あと少し";
    } else {
      this.message = "よくできたね！";
    }
  },
  displayKaitou() {
    this.myStyle.display = "block";
  },
  method() {
    this.calculateScore();
    this.displayKaitou();
  },
  /* ここに変数（プロパティ）や関数（メソッド）を記述する */
}).mount();
