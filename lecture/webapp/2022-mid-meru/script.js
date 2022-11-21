'use strict';

PetiteVue.createApp({
  url: 'introduction.html',
  home_url: 'home.html',
  in_text: 'ヘアサロン、アパレルショップへ行き、',
  in_text2: 'それぞれの選択肢からひとつづつ選んでいってね！',
  yazirusi: '↓',
  yazirusi1: '→',
  start_pg: '',
  bg_color: '  background-image: url(./image/start_bg.png);',
  se_text: '',
  food_check: false,
  ho_text: 'はじめまして？　おげんきですか！',
  kesu: '',
  borderImg: '',
  change_text() {
    this.in_text = '完成したら、フォトスタジオへ！';
    this.in_text2 = '完成した写真が見れるよ！良かったらシェアしてね！';
    this.yazirusi = '';
    this.yazirusi1 = '';
    this.start_pg = '▶';
    this.ho_text = '暇だな～。。。　お出かけしよう！！';
    this.kesu = 'display:none;';
  },
  hairStyle() {
    this.bg_color = ' background-color: #77A88D; color:#468060;';
  },
  apareruStyle() {
    this.bg_color = ' background-color: rgb(121, 174, 196); color:#205C84;';
  },

  photoStyle() {
    this.bg_color = ' background-color: #CECE70; color:#534C29;';
  },
  startStyle() {
    this.bg_color = '  background-image: url(./image/start_bg.png);';
  },
  secret_text() {
    this.se_text = '!シークレットもあるよ!';
  },

  box: 'twin',
  c_box: 'white',
  fashion: 'pa-ka-',

  get border_style() {
    if (this.c_box == 'pink') {
      return ' border: solid 10px #C993B0';
    }
    if (this.c_box == 'blue') {
      return ' border: solid 10px #6EACD5';
    }
    if (this.c_box == 'black') {
      return ' border: solid 10px  rgb(37, 38, 39)';
    }
    if (this.c_box == 'white') {
      return ' border: solid 10px  white';
    }
    return ' border: solid 10px rgb(131, 90, 28)';
  },

  get myStyle() {
    if (
      this.fashion == 'se-ta-' &&
      this.box == 'short' &&
      this.c_box == 'blue'
    ) {
      return '';
    }
    if (
      this.fashion == 'se-ra-' &&
      this.box == 'twin' &&
      this.c_box == 'black'
    ) {
      return '';
    }
    if (this.box == 'harf' && this.c_box == 'pink') {
      return '';
    } else {
      return 'display:none';
    }
  },

  get food() {
    if (
      this.fashion == 'se-ta-' &&
      this.box == 'short' &&
      this.c_box == 'blue'
    ) {
      return 'Greatシークレット!!フードを被る？';
    }
    if (
      this.fashion == 'se-ra-' &&
      this.box == 'twin' &&
      this.c_box == 'black'
    ) {
      return 'Niceシークレット!!お団子ツインテールにする？';
    }

    if (this.box == 'harf' && this.c_box == 'pink') {
      return 'シークレット!!服をミニドレスにする？';
    } else {
      return '';
    }
  },
  get hair_style() {
    console.log(this.box);
    if (this.box == 'twin') {
      return './image/hair_twin.png';
    }
    if (this.box == 'harf') {
      return './image/hair_harf.png';
    }

    if (this.box == 'short') {
      return './image/hair_short.png';
    }
  },
  get hair_color() {
    if (this.c_box == 'white') {
      return './image/white.png';
    }
    if (this.c_box == 'blue') {
      return './image/blue.png';
    }
    if (this.c_box == 'black') {
      return './image/black.png';
    }
    if (this.c_box == 'pink') {
      return './image/pink.png';
    }
  },

  get fashion_style() {
    if (this.fashion == 'pa-ka-') {
      return './image/pa-ka-.png';
    }

    if (this.fashion == 'meido') {
      return './image/meido.png';
    }
    if (this.fashion == 'se-ra-') {
      return './image/se-ra-.png';
    }
    if (this.fashion == 'se-ta-') {
      return './image/se-ta-.png';
    }
  },
  get a_style() {
    if (this.box == 'harf' && this.c_box == 'pink' && this.food_check == true) {
      return './image/kansei/dress.png';
    }
    if (
      this.box == 'twin' &&
      this.c_box == 'black' &&
      this.fashion == 'se-ra-' &&
      this.food_check == true
    ) {
      return './image/kansei/twindango.png';
    }
    if (
      this.fashion == 'se-ta-' &&
      this.c_box == 'blue' &&
      this.food_check == true &&
      this.box == 'short'
    ) {
      return './image/kansei/secret.png';
    }

    if (this.fashion == 'pa-ka-') {
      if (this.box == 'harf') {
        if (this.c_box == 'pink') {
          return './image/kansei/p_p_harf.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/p_b_harf.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/p_w_harf.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/p_bl_harf.png';
        }
      }
      if (this.box == 'short') {
        if (this.c_box == 'pink') {
          return './image/kansei/p_p_short.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/p_b_short.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/p_w_short.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/p_bl_short.png';
        }
      }
      if (this.box == 'twin') {
        if (this.c_box == 'pink') {
          return './image/kansei/p_p_dango.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/p_b_dango.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/p_w_dango.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/p_bl_dango.png';
        }
      }
    }

    if (this.fashion == 'meido') {
      if (this.box == 'harf') {
        if (this.c_box == 'pink') {
          return './image/kansei/me_p_harf.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/me_b_harf.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/me_w_harf.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/me_bl_harf.png';
        }
      }
      if (this.box == 'short') {
        if (this.c_box == 'pink') {
          return './image/kansei/me_p_short.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/me_b_short.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/me_w_short.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/me_bl_short.png';
        }
      }
      if (this.box == 'twin') {
        if (this.c_box == 'pink') {
          return './image/kansei/me_p_dango.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/me_b_dango.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/me_w_dango.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/me_bl_dango.png';
        }
      }
    }

    if (this.fashion == 'se-ra-') {
      if (this.box == 'harf') {
        if (this.c_box == 'pink') {
          return './image/kansei/sei_p_harf.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/sei_b_harf.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/sei_w_harf.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/sei_bl_harf.png';
        }
      }
      if (this.box == 'short') {
        if (this.c_box == 'pink') {
          return './image/kansei/sei_p_short.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/sei_b_short.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/sei_w_short.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/sei_bl_short.png';
        }
      }
      if (this.box == 'twin') {
        if (this.c_box == 'pink') {
          return './image/kansei/sei_p_dango.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/sei_b_dango.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/sei_w_dango.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/sei_bl_dango.png';
        }
      }
    }

    if (this.fashion == 'se-ta-') {
      if (this.box == 'harf') {
        if (this.c_box == 'pink') {
          return './image/kansei/se_p_harf.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/se_b_harf.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/se_w_harf.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/se_bl_harf.png';
        }
      }
      if (this.box == 'short') {
        if (this.c_box == 'pink') {
          return './image/kansei/se_p_short.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/se_b_short.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/se_w_short.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/se_bl_short.png';
        }
      }
      if (this.box == 'twin') {
        if (this.c_box == 'pink') {
          return './image/kansei/se_p_dango.png';
        }
        if (this.c_box == 'blue') {
          return './image/kansei/se_b_dango.png';
        }
        if (this.c_box == 'white') {
          return './image/kansei/se_w_dango.png';
        }
        if (this.c_box == 'black') {
          return './image/kansei/se_bl_dango.png';
        }
      }
    }

    console.log(this.food_check);
  }
}).mount();

//使用フォント
(function (d) {
  var config = {
      kitId: 'bit3lzi',
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
    }, config.scriptTimeout),
    tk = d.createElement('script'),
    f = false,
    s = d.getElementsByTagName('script')[0],
    a;
  h.className += ' wf-loading';
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != 'complete' && a != 'loaded')) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);

(function (d) {
  var config = {
      kitId: 'bit3lzi',
      scriptTimeout: 3000,
      async: true
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive';
    }, config.scriptTimeout),
    tk = d.createElement('script'),
    f = false,
    s = d.getElementsByTagName('script')[0],
    a;
  h.className += ' wf-loading';
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || (a && a != 'complete' && a != 'loaded')) return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config);
    } catch (e) {}
  };
  s.parentNode.insertBefore(tk, s);
})(document);
