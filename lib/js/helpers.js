    // LIB //

'use strict';

    // auf string testen

function isString(input) {
    return Object.prototype.toString.call(input) === '[object String]';
}

    // auf leere Zeichenkette testen

function isBlank(input) {
    return input.length === 0;
}

    // auf leere Zeichenkette testen mit trim!

function isBlank(s) {
    return s.trim().length === 0;
}


    // Name der Funktion ausgeben ?

function truncateString(str, len) {
    /////////////////////////////////////////////////////////////
    /* Name der FN ausgeben, funktioniert nur ohne use strict  */
    // console.log(arguments.callee.name);
    /////////////////////////////////////////////////////////////
    /* Falls nötig den String vor der Übergabe in FN trimen */
    return str /* .trim() */
      .substring(0, len);
    // return str/* .trim() */.slice(0,len);
}

    // Name verstecken : Vorname Nachname -> Vorname N. 

function abName(str) {
    var split = str.split(' '); //=> ['Max', 'Mustermann']
    if (split.length > 1) {
        /*     'Max'    + ' ' + 'M'                + '.'       */
        return split[0] + ' ' + split[1].charAt(0) + '.';
    }
    return split[0];
}

    //Email verstecken : rech.s...@t-online.de

function protEmail(str) {
    var half, split, part1, part2;
    split = str.split('@'); //=> ['rech.steffen','t-online.de']
    part1 = split[0]; //=> 'rech.steffen'
    part2 = split[1]; //=> 't-online.de'
    half = Math.ceil(part1.length / 2); //=> 6
    part1 = part1.slice(0, /* part1.length - */ half); //=> 'rech.s'
    return part1 + '...@' + part2; //=> 'rech.s...@t-online.de'
}

    // string alphabtisch sortieren

function alphabetizeOrder(str) {
    return str.split('').sort().join('').trim();
}

    // 
function deepCopy(temp) {
  return JSON.parse(JSON.stringify(temp));
}

    // Zufallszahl

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

    // Ersten Buchstaben zu Großbuchstaben machen

function ucFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

    // html schützen!

function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\'/g, '&apos;');
}

    // Zufälligen Farbwert ausgeben

function randomRGB() {
  var rgb = [];
  while (rgb.length < 3) {
    rgb.push(rand(0, 255));
  }
  return 'rgb(' + rgb + ')';
}


/* randomHex */
/* componentToHex */
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
/* rgbtToHex */
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function createEl(tag, txt) {
    tag = document.createElement(tag);
    if (txt) {
      txt = document.createTextNode(txt);
      tag.appendChild(txt);
    }
    return tag;
  }

function emptyEl(el) {
  while (el.firstChild) {
    el.firstChild.remove();
  }
}


function fragmentFromString(strHTML) {
  /* https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment */
  return document.createRange().createContextualFragment(strHTML);
}


  // ->  has checkValidity function in der helper.js -> alter browser gibt undefinded zurück, neue browser gibt true zurück
  function hasFormValidation() {
    return (typeof document.createElement('input').checkValidity === 'function');
  }
    // validiert ob ein feld angeklickt wurde
  function isChecked(collection) {
    var len = collection.length;
    for (var i = 0; i < len; i++) {
      if (collection[i].checked) {
        return true;
      }
    }
    return false;
  }