"use strict";

/* ストアの定義 */
const store = PetiteVue.reactive({
  sMemos: [],
  oMemos: [],
});

/* メイン */
PetiteVue.createApp({
  // データプロパティ
  screen: 0,

  // メソッド
  setScreen(n) {
    this.screen = n;
  },

  // ストア
  store,

  // コンポーネント
  Screen1,
  Screen2,
  Screen3,

  option: "price",
  value: 1000,
  threshold: 0,

  clothes: [
    {
      type: "真夏に着たい赤いシャツ",
      price: 1000,
      color: "赤",
      look: "シャツ",
      buy: "販売中",
      image: "./img/redsyatu.PNG",
    },
    {
      type: "薄っぺらい黄色いブラウス",
      price: 1000,
      color: "黄",
      look: "ブラウス",
      buy: "売り切れ",
      image: "./img/yellowsyatu.PNG",
    },
    {
      type: "薄っぺらい白いブラウス",
      price: 1000,
      color: "白",
      look: "ブラウス",
      buy: "売り切れ",
      image: "./img/whitebrows.PNG",
    },
    {
      type: "フレッシュな青いスウェット",
      price: 1500,
      color: "青",
      look: "スウェット",
      buy: "販売中",
      image: "./img/bluesweto.PNG",
    },
    {
      type: "クマさん柄の茶色いセーター",
      price: 1500,
      color: "茶",
      look: "セーター",
      buy: "売り切れ",
      image: "./img/brownse-ta.PNG",
    },
    {
      type: "半額以下セール白いコート",
      price: 1500,
      color: "白",
      look: "コート",
      buy: "売り切れ",
      image: "./img/whiteco-to.PNG",
    },
    {
      type: "コットン製の気持ちいいセーター",
      price: 2000,
      color: "黄",
      look: "セーター",
      buy: "販売中",
      image: "./img/yellowse-ta.PNG",
    },
    {
      type: "赤い可愛いスウェット",
      price: 2000,
      color: "赤",
      look: "スウェット",
      buy: "売り切れ",
      image: "./img/redsweto.PNG",
    },
    {
      type: "清楚な茶色いワンピース",
      price: 2000,
      color: "茶",
      look: "ワンピース",
      buy: "売り切れ",
      image: "./img/brownwanpi.PNG",
    },
    {
      type: "パールのついた豪華な緑のブラウス",
      price: 3000,
      color: "緑",
      look: "ブラウス",
      buy: "販売中",
      image: "./img/greenbrows.PNG",
    },
    {
      type: "あったかい緑のセーター",
      price: 3000,
      color: "緑",
      look: "セーター",
      buy: "売り切れ",
      image: "./img/greense-ta.PNG",
    },
    {
      type: "裏地付あったかいスウェット",
      price: 3000,
      color: "黄",
      look: "スウェット",
      buy: "売り切れ",
      image: "./img/yellowsweto.PNG",
    },
    {
      type: "高級な白いワンピース",
      price: 4000,
      color: "白",
      look: "ワンピース",
      buy: "販売中",
      image: "./img/whitewanpi.PNG",
    },
    {
      type: "流行な緑のシアーシャツ",
      price: 4000,
      color: "緑",
      look: "シャツ",
      buy: "売り切れ",
      image: "./img/greensyatu.PNG",
    },
    {
      type: "青いトレンチコート",
      price: 4000,
      color: "青",
      look: "コート",
      buy: "売り切れ",
      image: "./img/blueco-to.PNG",
    },
    {
      type: "冬でもあったかいダッフルコート",
      price: 5000,
      color: "茶",
      look: "コート",
      buy: "販売中",
      image: "./img/brownco-to.PNG",
    },
    {
      type: "高級な青いシャツ",
      price: 5000,
      color: "青",
      look: "シャツ",
      buy: "売り切れ",
      image: "./img/bluesyatu.PNG",
    },
    {
      type: "豪華な赤いワンピース",
      price: 5000,
      color: "赤",
      look: "ワンピース",
      buy: "売り切れ",
      image: "./img/redwanpi.PNG",
    },
  ],

  filtering() {
    this.threshold = this.value;
  },

  get selectedclothes() {
    return this.clothes.filter((clo) => clo[this.option] == this.threshold);
  },

  order: 0,
  cost: [1000, 1500, 2000, 3000, 4000, 5000],
  tcolor: ["赤", "青", "黄", "緑", "白", "茶"],
  tlook: [
    "シャツ",
    "スウェット",
    "セーター",
    "ブラウス",
    "ワンピース",
    "コート",
  ],
  num: Math.floor(Math.random() * 6),

  clothstype: [
    "真夏に着たい赤いシャツ",
    "フレッシュな青いスウェット",
    "コットン製の気持ちいいセーター",
    "パールのついた豪華な緑のブラウス",
    "高級な白いワンピース",
    "冬でもあったかいダッフルコート",
  ],
  clothsimg: [
    "./img/redsyatu.PNG",
    "./img/bluesweto.PNG",
    "./img/yellowse-ta.PNG",
    "./img/greenbrows.PNG",
    "./img/whitewanpi.PNG",
    "./img/brownco-to.PNG",
  ],

  judge: "",
  prices: "",
  buy() {
    if (this.prices == this.cost[this.num]) {
      this.judge = "./img/buy.JPG";
    } else {
      this.judge = "./img/notbuy.JPG";
    }
  },
}).mount();

/* 画面1のコンポーネント関数 */
function Screen1() {
  return {
    $template: "#screen1-tmpl",

    // データプロパティ
    sMemo: "",

    // メソッド
    addMatter() {
      if (this.sMemo != "") {
        this.store.sMemos.push(this.sMemo);
        this.sMemo = "";
      }
    },
  };
}

/* 画面2のコンポーネント関数 */
function Screen2() {
  return {
    $template: "#screen2-tmpl",

    // データプロパティ
    oMemo: "",

    // メソッド
    addPerson() {
      if (this.oMemo != "") {
        this.store.oMemos.push(this.oMemo);
        this.oMemo = "";
      }
    },
  };
}

/* 画面3のコンポーネント関数 */
function Screen3() {
  return {
    $template: "#howto-tmpl",
  };
}
