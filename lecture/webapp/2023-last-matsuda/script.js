"use strict";

PetiteVue.createApp({
  // 料理を作るページ
  nquery: "pizza",
  nmaxCalories: 400,
  nminProtein: 30,
  nmaxCarbs: 100,
  nmaxFat: 50,
  nincludeIngredients: "tomato",
  ncuisine: "italian",
  data: false,

  // ＡＰＩ
  async init() {
    const url =
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?&limitLicense=false&ranking=2";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ba0744ce1bmsh204b8e80e8dd0dfp18c888jsneec3651a5086",
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };
    const params = new URLSearchParams({
      query: this.nquery,
      maxCalories: this.nmaxCalories,
      minProtein: this.nminProtein,
      maxCarbs: this.nmaxCarbs,
      maxFat: this.nmaxFat,
      includeIngredients: this.nincludeIngredients,
      cuisine: this.ncuisine,
    });

    const res = await fetch(`${url}&${params}`, options);
    const obj = await res.json();
    this.data = obj.results[0];
    console.log(JSON.stringify(this.data, null, 2));
  },

  async onFormChange() {
    await this.init();
  },

  // コンビニで買うページ
  store: "",
  price: "",
  cal: "",
  nut: "",
  showMessage: false,
  message: "",

  // 商品検索
  filteredProducts: [],

  get searchProducts() {
    this.filteredProducts = this.products
      .filter((el) => !this.store || el.pstore == this.store)
      .filter((el) => !this.cal || el.pcal <= this.cal)
      .filter((el) => !this.price || el.pprice <= this.price)
      .filter((el) => !this.nut || el.pnut == this.nut);

    return this.filteredProducts;
  },

  // カート
  cart: [],
  totalAmount() {
    return Math.round(this.cart.reduce((total, item) => total + item.price, 0));
  },
  totalCalories() {
    return Math.round(
      this.cart.reduce((total, item) => total + item.calories, 0)
    );
  },
  get totalshort() {
    const nutrientsInCart = this.cart.map((item) => item.nut);
    const nutrients = ["炭水化物", "脂質", "タンパク質"];

    const missingNutrients = nutrients.filter(
      (nutrient) => !nutrientsInCart.includes(nutrient)
    );

    return missingNutrients.length > 0 ? missingNutrients.join(", ") : "なし";
  },

  // カートに追加する
  addToCart(index) {
    this.cart.push({
      img: this.filteredProducts[index].pimage,
      name: this.filteredProducts[index].pname,
      price: this.filteredProducts[index].pprice,
      calories: this.filteredProducts[index].pcal,
      nut: this.filteredProducts[index].pnut,
    }),
      (this.message = "カートにアイテムが追加されました");
    (this.showMessage = true),
      setTimeout(() => {
        this.showMessage = false;
      }, 2500);
  },

  // カートから削除
  removeFromCart(index) {
    this.cart.splice(index, 1);
  },

  // カート内全削除
  clearFilters() {
    this.store = "";
    this.price = "";
    this.cal = "";
    this.nut = "";
  },

  // 商品一覧
  products: [
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/042268/D3BD43A11152A92F497CE5B8CA99B9E8.jpg",
      pname: "濃厚豚骨醤油仕立ての半熟煮玉子おむすび",
      pstore: "セブンイレブン",
      pprice: 194.4,
      pcal: 235,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/042268/",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l736850.png",
      pname: "バスチー　−バスク風チーズケーキ−",
      pstore: "ローソン",
      pprice: 265,
      pcal: 232,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1475013_1996.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0920117.jpg",
      pname: "たんぱく質が摂れる！サラダチキンロール",
      pstore: "ファミリーマート",
      pprice: 398,
      pcal: 306,
      pnut: "タンパク質",
      url: "https://www.family.co.jp/goods/sandwich/0920117.html",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/150184/9B28AACE7D7BFC9B47A1D0F9B0A00397.jpg",
      pname: "アメリカンドッグ",
      pstore: "セブンイレブン",
      pprice: 138.24,
      pcal: 249,
      pnut: "脂質",
      url: "https://www.sej.co.jp/products/a/item/150184/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/042401/35D9AD558CA384FB4E2CD78438C5CC56.jpg",
      pname: "おむすびランチ",
      pstore: "セブンイレブン",
      pprice: 453.6,
      pcal: 544,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/042401/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/040342/DE3BBB48E9685989B7D1E7FDFF7BDB66.jpg",
      pname: "鶏だし香る鶏そぼろごはん",
      pstore: "セブンイレブン",
      pprice: 388.8,
      pcal: 430,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/040342/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/100530/DCAF109E899E00A6759510AAD9CC6145.jpg",
      pname: "たんぱく質が摂れるおろしポン酢の豚しゃぶサラダ",
      pstore: "セブンイレブン",
      pprice: 475.2,
      pcal: 171,
      pnut: "タンパク質",
      url: "https://www.sej.co.jp/products/a/item/100530/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/042183/1C33F39279D26FB57B1B7F0BCCAE337F.jpg",
      pname: "一膳ごはん　たらこバター醤油（もち麦）",
      pstore: "セブンイレブン",
      pprice: 302.4,
      pcal: 313,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/042183/",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l737195.png",
      pname: "金しゃりおにぎり　いくら醤油漬",
      pstore: "ローソン",
      pprice: 268,
      pcal: 189,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1467730_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l724883.png",
      pname: "食物繊維が摂れる　枝豆と塩昆布おにぎり",
      pstore: "ローソン",
      pprice: 149,
      pcal: 173,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1455559_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l456069_6.png",
      pname: "からあげクン　レッド",
      pstore: "ローソン",
      pprice: 238,
      pcal: 225,
      pnut: "タンパク質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1390564_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l534447_3.png",
      pname: "Lチキ　レギュラー",
      pstore: "ローソン",
      pprice: 220,
      pcal: 250,
      pnut: "タンパク質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1390578_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l551143_1.png",
      pname: "素焼きアーモンド　35g",
      pstore: "ローソン",
      pprice: 218,
      pcal: 220,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1425184_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l551147_1.png",
      pname: "ブランクリームサンド　4個",
      pstore: "ローソン",
      pprice: 158,
      pcal: 172,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1441591_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l20210302chubo0003_1.png",
      pname: "三元豚の厚切りロースカツサンド(とんかつ まい泉監修ソース使用)",
      pstore: "ローソン",
      pprice: 484,
      pcal: 584,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1471238_1996.html",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/290071/06DECCA64C63F0D41FC9063019FAF482.jpg",
      pname: "７プレミアム　セブンブレッド　６枚入",
      pstore: "セブンイレブン",
      pprice: 172.8,
      pcal: 178,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/290071/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/290168/FC92A73BC3A8042C3FDEF10F9BD58852.jpg",
      pname: "７プレミアム　チョコ食パン２枚入",
      pstore: "セブンイレブン",
      pprice: 159.84,
      pcal: 195,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/290168/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/290018/A0D255A05C861D4C6CA9FE0D069CB98F.jpg",
      pname: "７Ｐ　塩パンチーズ４個入",
      pstore: "セブンイレブン",
      pprice: 170.64,
      pcal: 100,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/290018/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/450552/715D72350B6E098911B7739ED71BBDAE.jpg",
      pname: "７プレミアム　シュガーコーンマルチ",
      pstore: "セブンイレブン",
      pprice: 397.44,
      pcal: 147,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/450552/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/450376/353EADC8A8D00B1AD592BF5D892ABD8C.jpg",
      pname: "７プレミアム　ワッフルコーン　リッチミルク",
      pstore: "セブンイレブン",
      pprice: 213.84,
      pcal: 286,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/450376/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/450497/2ACCE9724FF35545348DF705AA377D17.jpg",
      pname: "ロッテ　爽　　　　　　バニラ",
      pstore: "セブンイレブン",
      pprice: 172.8,
      pcal: "",
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/450497/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/091607/3FCD847355DD6E9B748D333FA6D3AB0C.jpg",
      pname: "ホワイトソースの旨み　海老グラタン",
      pstore: "セブンイレブン",
      pprice: 496.8,
      pcal: 403,
      pnut: "脂質",
      url: "https://www.sej.co.jp/products/a/item/091607/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/093091/578C41E3B36AE0D012EFF7DF04F60081.jpg",
      pname: "秋を味わう　さつまいもグラタン",
      pstore: "セブンイレブン",
      pprice: 464.4,
      pcal: 306,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/093091/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/101457/C9C0EBD10EF62AA55C5AB3045896B92F.jpg",
      pname: "緑黄色野菜がとれる　ほうれん草の胡麻和え",
      pstore: "セブンイレブン",
      pprice: 237.6,
      pcal: 146,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/101457/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/101434/4D79E58ED63839EBDF67386DF342EEB9.jpg",
      pname: "みらいデリ　担々風ラーメンサラダ",
      pstore: "セブンイレブン",
      pprice: 410.4,
      pcal: 415,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/101434/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/102090/5C430EC612A77A6D403F845B074F0231.jpg",
      pname: "７プレミアム　　　　　ごぼうサラダ",
      pstore: "セブンイレブン",
      pprice: 159.84,
      pcal: 155,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/102090/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/250117/83EF667D5388CFACEDE71F0E5E952A92.jpg",
      pname: "７プレミアム　千切りキャベツ",
      pstore: "セブンイレブン",
      pprice: 108,
      pcal: 35,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/250117/",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l737583.png",
      pname: "1食分の野菜が摂れる　ちゃんぽん",
      pstore: "ローソン",
      pprice: 397,
      pcal: 199,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1475518_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l676930.png",
      pname: "お買い得！塩焼そば",
      pstore: "ローソン",
      pprice: 430,
      pcal: 661,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1461415_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l724965.png",
      pname: "NL　のむヨーグルト　いちご　190g",
      pstore: "ローソン",
      pprice: 148,
      pcal: 129,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1468851_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l732501.png",
      pname: "とろーりチーズとトマトのピザまん",
      pstore: "ローソン",
      pprice: 160,
      pcal: 188,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1473081_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l638845.png",
      pname: "つゆしみ大根",
      pstore: "ローソン",
      pprice: 120,
      pcal: 9,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1473267_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l728943.png",
      pname: "チョコデニッシュ",
      pstore: "ローソン",
      pprice: 138,
      pcal: 378,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1468861_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l734815.png",
      pname: "1食分の野菜が摂れるポトフ",
      pstore: "ローソン",
      pprice: 397,
      pcal: 191,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1475496_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l722970.png",
      pname: "これが厚切り豚焼肉弁当",
      pstore: "ローソン",
      pprice: 724,
      pcal: 679,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1462254_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l731340.png",
      pname: "これが豚生姜焼弁当",
      pstore: "ローソン",
      pprice: 592,
      pcal: 781,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1471094_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l720930.png",
      pname: "ウチカフェ　ショコラ＆ミルクワッフルコーン　180ml",
      pstore: "ローソン",
      pprice: 289,
      pcal: 276,
      pnut: "脂質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1467918_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l721961_2.png",
      pname: "Frozen Party　バナナ　235g",
      pstore: "ローソン",
      pprice: 340,
      pcal: 195,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1468667_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l731370.png",
      pname: "手巻寿司　納豆",
      pstore: "ローソン",
      pprice: 171,
      pcal: 177,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1473009_1996.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/4140245.jpg",
      pname: "森永製菓　inゼリー　ビタミン＋トリプルエッセンス",
      pstore: "ファミリーマート",
      pprice: 226,
      pcal: "",
      pnut: "炭水化物",
      url: "https://www.family.co.jp/goods/drink/4140245.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0411240.jpg",
      pname: "直巻　とり五目",
      pstore: "ファミリーマート",
      pprice: 145,
      pcal: "",
      pnut: "炭水化物",
      url: "https://www.family.co.jp/goods/omusubi/0411240.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0252867.jpg",
      pname: "ハッシュドポテト",
      pstore: "ファミリーマート",
      pprice: 128,
      pcal: 196.5,
      pnut: "脂質",
      url: "https://www.family.co.jp/goods/friedfoods/0252867.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0250009.jpg",
      pname: "鶏つくね串",
      pstore: "ファミリーマート",
      pprice: 160,
      pcal: 226,
      pnut: "タンパク質",
      url: "https://www.family.co.jp/goods/friedfoods/0250009.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0910033.jpg",
      pname: "ツナたまごサンド",
      pstore: "ファミリーマート",
      pprice: 278,
      pcal: 294,
      pnut: "脂質",
      url: "https://www.family.co.jp/goods/sandwich/0910033.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0910200.jpg",
      pname: "海老カツサンド",
      pstore: "ファミリーマート",
      pprice: 420,
      pcal: 377,
      pnut: "脂質",
      url: "https://www.family.co.jp/goods/sandwich/0910200.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1210668.jpg",
      pname: "チョレギサラダ",
      pstore: "ファミリーマート",
      pprice: 320,
      pcal: 80,
      pnut: "炭水化物",
      url: "https://www.family.co.jp/goods/salad/1210668.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1210736.jpg",
      pname: "たんぱく質が摂れる！豚しゃぶのサラダ",
      pstore: "ファミリーマート",
      pprice: 167,
      pcal: 80,
      pnut: "タンパク質",
      url: "https://www.family.co.jp/goods/salad/1210736.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1210743.jpg",
      pname: "たんぱく質が摂れる！鶏むね肉のサラダ",
      pstore: "ファミリーマート",
      pprice: 455,
      pcal: 179,
      pnut: "タンパク質",
      url: "https://www.family.co.jp/goods/salad/1210743.html",
    },

    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1130973.jpg",
      pname: "豆腐と枝豆のひじき和え",
      pstore: "ファミリーマート",
      pprice: 238,
      pcal: 138,
      pnut: "炭水化物",
      url: "https://www.family.co.jp/goods/sidedishes/1130973.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1160260.jpg",
      pname: "具だくさんタルタルソースのチキン南蛮",
      pstore: "ファミリーマート",
      pprice: 488,
      pcal: 452,
      pnut: "脂質",
      url: "https://www.family.co.jp/goods/sidedishes/1160260.html",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/301391/536F7FD09E23527A5805C9EA2F11F988.jpg",
      pname: "ジューシービーフメンチカツバーガー",
      pstore: "セブンイレブン",
      pprice: 288,
      pcal: 545,
      pnut: "脂質",
      url: "https://www.sej.co.jp/products/a/item/301391/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/301203/A7491CB79AB69E9E08F5DC3C95ADB7FC.jpg",
      pname: "ソーセージ揚げパン",
      pstore: "セブンイレブン",
      pprice: 171,
      pcal: 330,
      pnut: "脂質",
      url: "hhttps://www.sej.co.jp/products/a/item/301203/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/113383/F3D1730937FA33405BA139A67D1AD938.jpg",
      pname: "国産小麦のふんわり生どら焼　北海道十勝産小豆使用",
      pstore: "セブンイレブン",
      pprice: 270,
      pcal: 309,
      pnut: "炭水化物",
      url: "https://www.sej.co.jp/products/a/item/113383/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/102989/E9AF48B8B5025EF0FCBFA7EC184B9898.jpg",
      pname: "ニラと玉子の中華炒め",
      pstore: "セブンイレブン",
      pprice: 389,
      pcal: 324,
      pnut: "脂質",
      url: "https://www.sej.co.jp/products/a/item/102989/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/103409/8BFD4F34C2C9678D034236A9A85E088B.jpg",
      pname: "国産小麦使用ジューシー焼き餃子　５個入り",
      pstore: "セブンイレブン",
      pprice: 302,
      pcal: 366,
      pnut: "脂質",
      url: "https://www.sej.co.jp/products/a/item/103409/",
    },
    {
      pimage:
        "https://img.7api-01.dp1.sej.co.jp/item-image/150215/DBA046F339F462B83B521F84E4C75737.jpg",
      pname: "炭火焼き鳥（塩）",
      pstore: "セブンイレブン",
      pprice: 180,
      pcal: 74,
      pnut: "タンパク質",
      url: "https://www.sej.co.jp/products/a/item/150215/",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l745215.png",
      pname: "らあめん花月嵐監修　嵐げんこつらあめん）",
      pstore: "ローソン",
      pprice: 599,
      pcal: 525,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1478717_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l734645.png",
      pname: "鰹だしの旨み！わかめそば",
      pstore: "ローソン",
      pprice: 430,
      pcal: 323,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1475513_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l557179_3.png",
      pname: "NL　のむヨーグルト　生乳たっぷり　180g",
      pstore: "ローソン",
      pprice: 145,
      pcal: 148,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1390085_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l726413.png",
      pname: "ウチカフェ　カフェオレ　240ml",
      pstore: "ローソン",
      pprice: 178,
      pcal: 137,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1467453_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l721217_1.png",
      pname: "たんぱく質が摂れる　蒸し鶏と玉子のサラダ",
      pstore: "ローソン",
      pprice: 473,
      pcal: 209,
      pnut: "タンパク質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1467739_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l728102.png",
      pname: "コーンサラダ",
      pstore: "ローソン",
      pprice: 225,
      pcal: 54,
      pnut: "炭水化物",
      url: "https://www.lawson.co.jp/recommend/original/detail/1469653_1996.html",
    },
    {
      pimage:
        "https://www.lawson.co.jp/recommend/original/detail/img/l745216.png",
      pname: "ホッとな　おだし生パスタ〜鶏の柚子胡椒焼と国産きのこ〜",
      pstore: "ローソン",
      pprice: 559,
      pcal: 464,
      pnut: "タンパク質",
      url: "https://www.lawson.co.jp/recommend/original/detail/1478718_1996.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1944099.jpg",
      pname: "【ファミマのいちご狩り®対象】いちごのクレープ",
      pstore: "ファミリーマート",
      pprice: 368,
      pcal: 265,
      pnut: "脂質",
      url: "https://www.family.co.jp/goods/dessert/1944099.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/1131758.jpg",
      pname: "海老とブロッコリーのタルタルサラダ",
      pstore: "ファミリーマート",
      pprice: 298,
      pcal: 124,
      pnut: "脂質",
      url: "https://www.family.co.jp/goods/sidedishes/1131758.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0910132.jpg",
      pname: "【関東・関西】クラブハウスサンド",
      pstore: "ファミリーマート",
      pprice: 450,
      pcal: 284,
      pnut: "タンパク質",
      url: "https://www.family.co.jp/goods/sandwich/0910132.html",
    },
    {
      pimage: "https://www.family.co.jp/content/dam/family/goods/0920032.jpg",
      pname: "チーズバーガー",
      pstore: "ファミリーマート",
      pprice: 248,
      pcal: 286,
      pnut: "炭水化物",
      url: "https://www.family.co.jp/goods/sandwich/0920032.html",
    },
  ],
}).mount();
