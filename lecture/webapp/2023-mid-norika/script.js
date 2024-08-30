"use strict";

PetiteVue.createApp({
  budget: "", // 予算
  calorie: "", //摂取したいカロリー
  donuts: [], // ドーナツの一覧
  money: 0, // 支払額
  kcal: 0, //カロリー
  totalDonuts: 0, //合計個数

  //ポン・デ・リング
  PonDeRing() {
    this.money += 151;
    this.kcal += 217;
    this.totalDonuts += 1;
    this.donuts.push("ポン・デ・リング (151円/217kcal)");
  },

  Pon_Kokutou() {
    this.money += 151;
    this.kcal += 202;
    this.totalDonuts += 1;
    this.donuts.push("ポン・デ・黒糖 (151円/ 202kcal)");
  },

  pon_berry() {
    this.money += 162;
    this.kcal += 246;
    this.totalDonuts += 1;
    this.donuts.push("ポン・デ・ストロベリー (162円/246kcal)");
  },

  //オールドファッション
  old_fashion() {
    this.money += 151;
    this.kcal += 293;
    this.totalDonuts += 1;
    this.donuts.push("オールドファッション (151円/ 293kcal)");
  },
  choco_fashion() {
    this.money += 162;
    this.kcal += 330;
    this.totalDonuts += 1;
    this.donuts.push("チョコファッション (162円/330kcal)");
  },
  old_honey() {
    this.money += 162;
    this.kcal += 355;
    this.totalDonuts += 1;
    this.donuts.push("オールドファッションハニー (162円/355kcal)");
  },

  //フレンチクルーラー
  french() {
    this.money += 151;
    this.kcal += 154;
    this.totalDonuts += 1;
    this.donuts.push("フレンチクルーラー (151円/154kcal)");
  },
  angel() {
    this.money += 162;
    this.kcal += 192;
    this.totalDonuts += 1;
    this.donuts.push("エンゼルフレンチ (162円/192kcal)");
  },
  french_berry() {
    this.money += 162;
    this.kcal += 197;
    this.totalDonuts += 1;
    this.donuts.push("ストロベリーフレンチカスタード (162円/197kcal)");
  },

  //イーストドーナツ
  east_honey() {
    this.money += 151;
    this.kcal += 202;
    this.totalDonuts += 1;
    this.donuts.push("ハニーディップ (151円/202kcal)");
  },
  east_sugar() {
    this.money += 151;
    this.kcal += 192;
    this.totalDonuts += 1;
    this.donuts.push("シュガーレイズド (151円/192kcal)");
  },
  east_choco() {
    this.money += 162;
    this.kcal += 238;
    this.totalDonuts += 1;
    this.donuts.push("チョコリング (162円/238kcal)");
  },
  east_berry() {
    this.money += 162;
    this.kcal += 239;
    this.totalDonuts += 1;
    this.donuts.push("ストロベリーリング (162円/239kcal)");
  },
  east_angel() {
    this.money += 162;
    this.kcal += 201;
    this.totalDonuts += 1;
    this.donuts.push("エンゼルクリーム (162円/201kcal)");
  },
  east_castard() {
    this.money += 162;
    this.kcal += 214;
    this.totalDonuts += 1;
    this.donuts.push("カスタードクリーム (162円/214kcal)");
  },

  //チョコレート
  choco_choco() {
    this.money += 151;
    this.kcal += 239;
    this.totalDonuts += 1;
    this.donuts.push("チョコレート (151円/239kcal)");
  },
  choco_double() {
    this.money += 162;
    this.kcal += 265;
    this.totalDonuts += 1;
    this.donuts.push("ダブルチョコレート (162円/265kcal)");
  },
  choco_golden() {
    this.money += 162;
    this.kcal += 269;
    this.totalDonuts += 1;
    this.donuts.push("ゴールデンチョコレート (162円/269kcal)");
  },
  choco_coconut() {
    this.money += 162;
    this.kcal += 259;
    this.totalDonuts += 1;
    this.donuts.push("ココナツチョコレート (162円/259kcal)");
  },

  /*removeDonut関数＆pickup関数はchatGPT使用 */
  removeDonut(index) {
    const removedDonut = this.donuts[index];
    const price_calorie = this.pickup(removedDonut);

    // donutsから削除
    this.donuts.splice(index, 1);

    // 金額とカロリーを減算
    this.money -= price_calorie.price;
    this.kcal -= price_calorie.calories;

    // 合計個数を減算
    this.totalDonuts -= 1;
  },

  pickup(item) {
    // ドーナツの情報から価格とカロリーを抽出
    const find = /(\d+)円\/\s*(\d+)kcal/;
    const match = item.match(find);
    if (match) {
      const price = parseInt(match[1]);
      const calories = parseInt(match[2]);
      return { price, calories };
    }
    return { price: 0, calories: 0 };
  },

  check_budget() {
    // 予算と摂取したいカロリーが空でないか確認
    if (!this.budget || !this.calorie) {
      window.alert("「予算」と「理想カロリー摂取数」を入力してください");
      return;
    }

    if (this.kcal > this.calorie && this.money > this.budget) {
      const over_kcal = this.kcal - this.calorie;
      const over_price = this.money - this.budget;
      window.alert(
        `「予算」と「カロリー」の両方が想定よりも超えています！ \n  予算: ${over_price}円オーバー\nカロリー: ${over_kcal}kcalオーバー`
      );
    } else if (this.kcal > this.calorie) {
      const over_kcal = this.kcal - this.calorie;
      window.alert(
        `「予算」は想定内ですが、「カロリー」が${over_kcal}kcal超えています！`
      );
    } else if (this.money > this.budget) {
      const over_price = this.money - this.budget;
      window.alert(
        `「カロリー」は想定内ですが、「予算」が${over_price}円分オーバーです！`
      );
    } else {
      window.alert("想定内の「予算」と「カロリー」です！");
    }
  },
  resetForm() {
    // 予算と摂取したいカロリーを初期化
    this.budget = "";
    this.calorie = "";

    // ドーナツ関連の情報を初期化
    this.donuts = [];
    this.money = 0;
    this.kcal = 0;
    this.totalDonuts = 0;
  },
}).mount();
