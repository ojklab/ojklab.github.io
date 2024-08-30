'use strict';

PetiteVue.createApp({
  // データプロパティ
  list: false,
  listP: false,
  listV: false,
  apikey: 'AIzaSyARIuNYwWg6-mSb2iBdy9WJI1AQbO0wduw', // 自分で取得したものに置き換える
  channel: 'UCQ_MqAw18jFTlBB-f8BP7dw',
  uploads: '',
  value: '',
  // listS: '',
  flag: true,
  show: false,

  // メソッド
  async getProgramList() {
    this.show = true;
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.channel}&key=${this.apikey}`;
    const urlP = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${this.channel}&key=${this.apikey}`;

    if (this.channel == 'UCQ_MqAw18jFTlBB-f8BP7dw') {
      this.uploads = 'UUQ_MqAw18jFTlBB-f8BP7dw';
    } else if (this.channel == 'UCFbp2XdRpKfk7mYt_uT8dxw') {
      this.uploads = 'UUFbp2XdRpKfk7mYt_uT8dxw';
    } else if (this.channel == 'UC8g17oXkRt8buwQL8GU-NSw') {
      this.uploads = 'UU8g17oXkRt8buwQL8GU-NSw';
    } else if (this.channel == 'UCG4vehe_lfRQMKJducswRtw') {
      this.uploads = 'UUG4vehe_lfRQMKJducswRtw';
    }
    const urlV = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${this.uploads}&maxResults=50&key=${this.apikey}`;

    // APIを叩いてデータを取得
    const res = await fetch(url);
    const resP = await fetch(urlP);
    const resV = await fetch(urlV);

    if (res.ok) {
      const data = await res.json();
      this.list = data.items;
      console.log(data.items);
    } else {
      console.error(`${res.status} : ${res.statusText}`);
    }

    if (resP.ok) {
      const dataP = await resP.json();
      this.listP = dataP.items;
      console.log(dataP.items);
    } else {
      console.error(`${resP.status} : ${resP.statusText}`);
    }

    if (resV.ok) {
      const dataV = await resV.json();
      this.listV = dataV.items;
      console.log(dataV.items);
    } else {
      console.error(`${resV.status} : ${resV.statusText}`);
    }
  },
  filt() {
    this.flag = !this.flag;
    console.log(this.value);
    this.listV.filter(function (d) {
      if (d.snippet.title.indexOf('東大卒')) {
        console.log(d.snippet.title);
        // return d.snippet.title;
      }
      // return d.snippet.title.indexOf(this.value) !== -1;
    });
  }
}).mount();
