'use strict'

// 今日の日付を取得
const dateToday = new Date();
// 明日の日付を取得（参考：https://iwasawa-officialweb.com/2021/05/04/js-date/#toc6）ここから
const dateTommorrow = new Date();
dateTommorrow.setDate(dateTommorrow.getDate() + 1);
//1週間分の日付を取得
function nextData (d) {
  let dateNext = new Date();
  return dateNext.setDate(dateNext.getDate() + d);
}
// ここまで

// nextData関数の返り値をまとめておく
const dateNext2 = nextData(2);
const after2 = new Date(dateNext2);
const dateNext3 = nextData(3);
const after3 = new Date(dateNext3);
const dateNext4 = nextData(4);
const after4 = new Date(dateNext4);
const dateNext5 = nextData(5);
const after5 = new Date(dateNext5);
const dateNext6 = nextData(6);
const after6 = new Date(dateNext6);
const dateNext7 = nextData(7);
const after7 = new Date(dateNext7);

// 曜日の取得方法（参考：https://www.azukipan.com/posts/javascript-date/）ここから
const day1 = dateToday.getDay();
const wk = ["日", "月", "火", "水", "木", "金", "土"];
const week1 = wk[day1];
// 明日の曜日
const day2 = dateTommorrow.getDay();
const week2 = wk[day2];
// 1週間後の曜日
const day3 = after7.getDay();
const week3 = wk[day3];
// ここまで

// 必要な要素を取得
const btns = document.querySelectorAll('input[type="button"]');
const deadlines = document.getElementsByClassName(('deadline'));

// nの値（カラーの番号）を保持（chatGPTの回答を参考にしました）
let nValue;

PetiteVue.createApp({
  // データプロパティ
  text: '',
  date: '',

  // タスクの表示
  today: dateToday.toLocaleDateString(),
  tommorrow: dateTommorrow.toLocaleDateString(),
  next: after7.toLocaleDateString(),

  next2: after2.toLocaleDateString(),
  next3: after3.toLocaleDateString(),
  next4: after4.toLocaleDateString(),
  next5: after5.toLocaleDateString(),
  next6: after6.toLocaleDateString(),
  next7: after7.toLocaleDateString(),

  // 今日の曜日
  day1: week1,
  // 明日の曜日
  day2: week2,
  // 1週間後の曜日
  day3: week3,

  // カラーボタンが押されたときのイベント
  color (n) {
    // カラーボタンのトグル（nはカラーの番号）
    if (btns[n].value == 'on') {
      btns[n].style.border = 'solid 2px black';
      btns[n].value = 'off';
    } else if (btns[n].value == 'off') {
      btns[n].style.border = 'none';
      btns[n].value = 'on';
    }

    // nの値（カラーの番号）を保持（chatGPTの回答を参考にしました）
    nValue = n;
  },

  // 追加ボタンが押されたときのイベント
  add () {
    // タスクを追加する度にvalueをonにする→初期状態に戻す
    btns[nValue].value = 'on';

    // チェックボックスの生成
    let task = document.createElement('input');
    task.type = 'checkbox';
    task.id = 'checkbox';
    // チェックがついたらタスク削除
    task.addEventListener("click", () => {
      task.remove();
      label.remove();
      br.remove();
    });

    // ラベル（テキスト）の生成
    let label = document.createElement('label');
    label.for = 'checkbox';
    label.textContent = this.text;

    let br = document.createElement('br');

    // 選択されたカラーをラベル（テキスト）の背景色にする
    if (btns[nValue].id == 'red') {
      label.style.backgroundColor = 'lightcoral';
    }

    if (btns[nValue].id == 'orange') {
      label.style.backgroundColor = 'sandybrown';
    }

    if (btns[nValue].id == 'yellow') {
      label.style.backgroundColor = 'khaki';
    }

    if (btns[nValue].id == 'green') {
      label.style.backgroundColor = 'lightgreen';
    }

    if (btns[nValue].id == 'bluegreen') {
      label.style.backgroundColor = 'aquamarine';
    }

    if (btns[nValue].id == 'blue') {
      label.style.backgroundColor = 'lightskyblue';
    }

    if (btns[nValue].id == 'purple') {
      label.style.backgroundColor = 'plum';
    }

    if (btns[nValue].id == 'pink') {
      label.style.backgroundColor = 'pink';
    }

    // 入力された日付と締切日を比較する（chatGPTの回答を参考にしました）
    const dateObj = new Date(this.date);
    const todayObj = new Date(this.today);
    const tommorrowObj = new Date(this.tommorrow);
    // 「来週まで」は7日間いる
    const nextObj2 = new Date(this.next2);
    const nextObj3 = new Date(this.next3);
    const nextObj4 = new Date(this.next4);
    const nextObj5 = new Date(this.next5);
    const nextObj6 = new Date(this.next6);
    const nextObj7 = new Date(this.next7);

    // 入力された日付の時間を0にする→比較が可能になる（chatGPTの回答を参考にしました）
    dateObj.setHours(0, 0, 0, 0);

    // 入力された日付が今日なら・・・
    if (dateObj.getTime() == todayObj.getTime()) {
      deadlines[0].appendChild(br);
      deadlines[0].appendChild(label);
      deadlines[0].insertBefore(task, label);

      this.text = '';
      this.date = '';
      btns[nValue].style.border = 'none';
    }

    // 入力された日付が明日なら・・・
    if (dateObj.getTime() == tommorrowObj.getTime()) {
      deadlines[1].appendChild(br);
      deadlines[1].appendChild(label);
      deadlines[1].insertBefore(task, label);

      this.text = '';
      this.date = '';
      btns[nValue].style.border = 'none';
    }

    // 入力された日付が1週間後なら・・・
    if (dateObj.getTime() == nextObj2.getTime()
     || dateObj.getTime() == nextObj3.getTime()
     || dateObj.getTime() == nextObj4.getTime()
     || dateObj.getTime() == nextObj5.getTime()
     || dateObj.getTime() == nextObj6.getTime()
     || dateObj.getTime() == nextObj7.getTime()) {
      deadlines[2].appendChild(br);
      deadlines[2].appendChild(label);
      deadlines[2].insertBefore(task, label);

      this.text = '';
      this.date = '';
      btns[nValue].style.border = 'none';
    }
  }
}).mount();