"use strict";

PetiteVue.createApp({
  enp: {
    color: "darkolivegreen",
    fontWeight: "bold",
    fontSize: "xx-large",
  },
  enp2: {
    fontWeight: "bold",
  },

  full: 0,
  sto: 0,
  num: 0,
  take: 10,
  dish: [
    "img/osara.png",
    "img/osara.png",
    "img/osara.png",
    "img/osara.png",
    "img/osara.png",
    "img/osara.png",
  ],

  pan: [
    "img/pan/bacon_epi.png",
    "img/pan/cheese_pan.png",
    "img/pan/choco_korone.png",
    "img/pan/frenchtoast.png",
    "img/pan/melonpan.png",
    "img/pan/mentai_pan.png",
    "img/pan/roll_pan.png",
    "img/pan/shiopan.png",
  ],

  food: [
    "img/food/spaghetti_carbonara.png",
    "img/food/spaghetti_genovese.png",
    "img/food/spaghetti_ikasumi.png",
    "img/food/spaghetti_meatsauce.png",
    "img/food/spaghetti_neapolitan.png",
    "img/food/spaghetti_pescatora.png",
    "img/food/spaghetti_tarako.png",
    "img/food/spaghetti_wafuu.png",
  ],

  sweets: [
    "img/sweets/cake_cheese.png",
    "img/sweets/cake_chocolate.png",
    "img/sweets/cake_chocomint.png",
    "img/sweets/cake_mille_crepe.png",
    "img/sweets/pannacotta.png",
    "img/sweets/purin.png",
    "img/sweets/purin_mango.png",
    "img/sweets/tiramisu.png",
  ],

  text: "",

  name(a) {
    this.text = a.currentTarget.value;
  },

  add(a) {
    this.num <= 5
      ? (this.sto += a)
      : window.alert("これ以上テーブルに置けないよ！");
    this.num += 1;
  },

  eat() {
    if (this.sto <= 1200) {
      this.take -= 1;
    } else if (this.sto <= 1800) {
      window.alert("一度にたくさん食べ過ぎたかも…\n少し休憩しよう");
      this.take -= 2;
    }

    if (this.sto <= 1800) {
      this.full += this.sto;
      this.sto = 0;
      this.reset();
      if (this.full >= 6000) {
        this.enp.color = "darkorange";
      }
    } else {
      window.alert("一度に食べられません！");
      this.reset();
    }

    if (this.take <= 0) {
      this.end();
    } else if (this.take <= 3) {
      this.enp2.color = "indianred";
    }
  },

  reset() {
    this.sto = 0;
    this.num = 0;
    this.dish = [
      "img/osara.png",
      "img/osara.png",
      "img/osara.png",
      "img/osara.png",
      "img/osara.png",
      "img/osara.png",
    ];
  },

  table(x) {
    if (this.num <= 6) {
      this.dish[this.num - 1] = x;
    }
  },

  start() {
    this.reset();
    this.full = 0;
    this.take = 10;
    this.enp.color = "darkolivegreen";
    this.enp2.color = "darkolivegreen";
  },

  end() {
    this.full < 6000
      ? window.alert(
          "合計で" + this.full + "ポイント獲得しました！満足できましたか？"
        )
      : window.alert(
          "合計で" + this.full + "ポイント獲得しました！おなかいっぱいですね！"
        );
    this.start();
  },
}).mount();
