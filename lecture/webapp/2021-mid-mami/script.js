'use strict';

PetiteVue.createApp({
    name: '',
    style: '',
    //各ラジオボタンのデータプロパティ
    all: '',
    skin: '',
    neck: '',
    sakotu: '',
    bust: '',
    waist: '',
    hand: '',
    hand2: '',
    leg: '',
    foot: '',
    show: { display: 'none' },
    //ゲッター
    get type() {
        return [
            this.all,
            this.skin,
            this.neck,
            this.sakotu,
            this.bust,
            this.waist,
            this.hand,
            this.hand2,
            this.leg,
            this.foot
        ];
    },
    count() {
        let typeA = this.type.filter((ev) => ev == 'A');
        let typeB = this.type.filter((ev) => ev == 'B');
        let typeC = this.type.filter((ev) => ev == 'C');
        if (typeA.length > typeB.length + typeC.length) {
            this.style = 'ストレート';
        }
        if (typeB.length > typeA.length + typeC.length) {
            this.style = 'ウェーブ';
        }
        if (typeC.length > typeA.length + typeB.length) {
            this.style = 'ナチュラル';
        }
        this.show = { display: 'block' };
    }
}).mount();