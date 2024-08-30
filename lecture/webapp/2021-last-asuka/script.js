'use strict';

const storage = localStorage;

PetiteVue.createApp({
  query: '',
  artistorculture: '',
  medium: 'Paintings',
  kdata: [],
  myList: false,
  search: true,

  msg: 'invisible',

  init() {
    const json = storage.fav;
    if (json == undefined) {
      return;
    }
    this.kdata = JSON.parse(json);
    console.log(this.kdata);
  },

  invisible() {
    if ((this.msg = 'visible')) {
      this.msg = 'invisible';
    }
  },

  keep(d) {
    this.kdata.push(d);
    storage.fav = JSON.stringify(this.kdata);
    this.msg = 'visible';
    console.log(d);
    console.log(this.kdata);
  },

  showList() {
    this.myList = true;
    this.search = false;
  },

  back() {
    this.search = true;
    this.myList = false;
  },

  async getResource() {
    const baseUrl =
      'https://collectionapi.metmuseum.org/public/collection/v1/search?';

    const query = new URLSearchParams({
      q: this.query,
      artistorculture: this.artistorculture,
      medium: this.medium
      //medium: this.medium,
      // geoLocation: this.geoLocation
      // culture: this.culture
    });

    console.log(this.kdata);
    console.log(this.artistorculture);
    const url = baseUrl + query;
    console.log(url);
    const res = await fetch(url);
    const obj = await res.json();
    this.data = obj;
    console.log(this.data);
    console.log(this.geoLocation);
    const baseUrl2 =
      'https://collectionapi.metmuseum.org/public/collection/v1/objects/';

    let url2 = [];

    for (const d of this.data.objectIDs) {
      console.log(d);
      url2.push(baseUrl2 + d);
    }

    console.log(url2);
    this.data2 = [];
    for (let i = 0; i < url2.length; i += 1) {
      const res2 = await fetch(url2[i]);
      const obj2 = await res2.json();
      this.data2.push(obj2);
    }

    console.log(this.data2.title);
  },

  data: false,
  data2: []
}).mount();
