'use strict';

PetiteVue.createApp({

  emo:"楽しい",
  style:"ソロ歌手",
  artist:"",
  song:"",

  url:"",

  msg:"",

  name:"",

  styleQuestion:{
    display:"block"
  },

  styleResult:{
  display:"none"
  },

  styleSize:{
    fontsize:"1.2em"
  },

  styleInput:{
    borderColor:"black"
  },

  diag(){


    if(this.name==""){
      window.alert("ニックネームを入力してください")

      this.styleInput={
        borderWidth:"3px",
        borderColor:"red"
      }

    }

    else{

    this.styleResult={
      display :"block"
    },

    this.styleQuestion={
    display:"none"
    }
  }


    //ソロ歌手

    if(this.emo=="楽しい" && this.style=="バンド"){
      this.artist="緑黄色社会",
      this.song="Mela!",
      this.url="https://www.youtube.com/embed/aRDURmIYBZ4"
      }

      else if(this.emo=="悲しい" && this.style=="バンド"){
        this.artist="Mr.Children",
        this.song="HANABI",
        this.url="https://www.youtube.com/embed/EXxaBXKjl6Q"
        }

        else if(this.emo=="爽やか" && this.style=="バンド"){
          this.artist="UVERworld",
          this.song="シャカビーチ～Laka Laka La～",
          this.url="https://www.youtube.com/embed/kk9djuXCmCY"
          }


        else if(this.emo=="落ち着く" && this.style=="バンド"){
          this.artist="flumpool",
          this.song="証",
          this.url="https://www.youtube.com/embed/bjwv4m-Aji4"
          }

        else if(this.emo=="盛り上がりたい" && this.style=="バンド"){
          this.artist="サカナクション",
          this.song="新宝島",
          this.url="https://www.youtube.com/embed/LIlZCmETvsY"
          }
  

    　//バンド
    if(this.emo=="楽しい" && this.style=="ソロ歌手"){
      this.artist="大原櫻子",
      this.song="サンキュー。",
      this.url="https://www.youtube.com/embed/J3nPlSy9YnY"
      }

      else if(this.emo=="悲しい" && this.style=="ソロ歌手"){
        this.artist="優里",
        this.song="ドライフラワー",
        this.url="https://www.youtube.com/embed/kzZ6KXDM1RI"
        }

        else if(this.emo=="爽やか" && this.style=="ソロ歌手"){
          this.artist="JY",
          this.song="好きな人がいること",
          this.url="https://www.youtube.com/embed/XHRlkVT4Dxg"
          }


        else if(this.emo=="落ち着く" && this.style=="ソロ歌手"){
          this.artist="Uru",
          this.song="Love Song",
          this.url="https://www.youtube.com/embed/RuSNeIcPamk"
          }

        else if(this.emo=="盛り上がりたい" && this.style=="ソロ歌手"){
          this.artist="菅田将暉",
          this.song="さよならエレジー",
          this.url="https://www.youtube.com/embed/XSkpuDseenY"
          }
          
    //アイドル

    if(this.emo=="楽しい" && this.style=="アイドル"){
      this.artist="日向坂46",
      this.song="アザトカワイイ",
      this.url="https://www.youtube.com/embed/m-FRFhvM1EA" 
      }

      else if(this.emo=="悲しい" && this.style=="アイドル"){
        this.artist="乃木坂46",
        this.song="サヨナラの意味",
        this.url="https://www.youtube.com/embed/M3eGhMORIpY"
        }

        else if(this.emo=="爽やか" && this.style=="アイドル"){
          this.artist="Sexy Zone",
          this.song="夏のハイドレンジア",
          this.url="https://www.youtube.com/embed/_a6SXtlEQB0"
          }


        else if(this.emo=="落ち着く" && this.style=="アイドル"){
          this.artist="Hey! Say! JUMP",
          this.song="ナイモノネダリ",
          this.url="https://www.youtube.com/embed/-RGJwOJ0tao"
          }

        else if(this.emo=="盛り上がりたい" && this.style=="アイドル"){
          this.artist="モーニング娘",
          this.song="LOVEマシーン",
          this.url="https://www.youtube.com/embed/6A7j6eryPV4"
          }

  　　　//ボーカロイド

    if(this.emo=="楽しい" && this.style=="ボーカロイド"){
      this.artist="Ayase",
      this.song="シニカルナイトプラン",
      this.url="https://www.youtube.com/embed/zyRt-nBM3dY" 
      }

      else if(this.emo=="悲しい" && this.style=="ボーカロイド"){
        this.artist="こめだわら",
        this.song="自堕楽",
        this.url="https://www.youtube.com/embed/zQ58S43lkP0"
        }

        else if(this.emo=="爽やか" && this.style=="ボーカロイド"){
          this.artist="みきとP",
          this.song="少女レイ",
          this.url="https://www.youtube.com/embed/JW3N-HvU0MA"
          }


        else if(this.emo=="落ち着く" && this.style=="ボーカロイド"){
          this.artist="ヨルシカ",
          this.song="夜明けと蛍",
          this.url="https://www.youtube.com/embed/EpFxTXgElLA"
          }

        else if(this.emo=="盛り上がりたい" && this.style=="ボーカロイド"){
          this.artist="Neru",
          this.song="脱法ロック",
          this.url="https://www.youtube.com/embed/u5mHVUwDf_0"
          }

               
    },

    retry(){
      this.styleResult={
        display :"none"
      },
  
      this.styleQuestion={
      display:"block"
      }

    },

    size1(){

      this.styleSize={
        fontSize:"1em"
      }
    },

    size2(){

      this.styleSize={
        fontSize:"1.25em"
      }
    },

    size3(){

      this.styleSize={
        fontSize:"1.5em"
      }
    }



}).mount();

//どうしても上手くいかなかったので普通のjavaScriptで書きました

  let diagButton=document.getElementById("diagButton");

  let retryButton=document.getElementById("retryButton");


  diagButton.addEventListener('click',() => {

    document.getElementById("share").classList.remove("display");

  });

  retryButton.addEventListener('click',() => {

    document.getElementById("share").classList.add("display");

  });