// console.log("はじめてのジャバスクリプト");

// console.log(23 + 5);

// console.log(2000 - 1800);

// console.log("18+5");

// ＊＊＊＊＊＊演習＊＊＊＊＊＊＊

// var point = 77;
// if (point >= 80) {
//     console.log("素晴らしい！おめでとう！");
// }
// // else if(point = 777){console.log("大当たり！")}
// else {
//     console.log("もっと頑張りましょう");
// }

// ＊＊＊＊＊＊＊演習＊＊＊＊＊＊＊

// jQueryおまじない($)を.aaに対して追加
// $(".aa").on("click", function () {
//     // おまじない
//     var random = Math.floor(Math.random() * 3 + 1);
//     console.log(random, "ランダムな数字の箱");

//     if (random === 1) {
//         console.log("大吉");
//         $("h1").html("大吉");
//     } else if (random === 2) {
//         console.log("中吉");
//         $("h1").html("中吉");
//     } else if (random === 3) {
//         console.log("小吉");
//         $("h1").html("小吉");
//     }

// jQuery（$）のおまじないを使います
// 次の公式で書き方が決まっている
// $(".aa").on("click", function(){
// alert(1);}
// )
// });

// 日付取得↓

// window.onload = function () {
//     var today = new Date();
//     console.log(today);

//     console.log("年=" + today.getFullYear());
//     console.log("月=" + (today.getMonth() + 1));
//     console.log("日=" + today.getDate());
//     console.log("時=" + today.getHours());
//     console.log("分=" + today.getMinutes());
//     console.log("秒=" + today.getSeconds());

//     console.log(today.getMonth() + 1, today.getDate());
// };


// **************以下アラーム************************



'use strict';
let currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let timerText = document.getElementById('timerText');
let set_btn = document.getElementById('set_btn');
let delete_btn = document.getElementById('delete_btn');
let option_hours;
let option_minutes;
let parent_list = document.getElementById('parent_list');
let record = []; //アラーム設定格納
let x = 0; // 計算用の変数

//アラーム設定用オブジェクト
let Setting = function (sethour, setminute) {
    this.sethour = sethour;
    this.setminute = setminute;
};

// 時計の"12:1"を"12:01"と表記
function adjustDigit(num) {
    let digit;
    if (num < 10) { digit = `0${num}`; }
    else { digit = num; }
    return digit;
}

// アラームセット
set_btn.addEventListener('click', function () {
    //アラームは最大5まで
    let lis = parent_list.getElementsByTagName('li');
    let len = lis.length;
    if (len >= 5) { return; }

    //設定時間を記録
    option_hours = document.alarm_form.option_hours.value;
    option_minutes = document.alarm_form.option_minutes.value;
    record[x] = new Setting(option_hours, option_minutes);

    //設定時間を表示
    let container_list = document.createElement('li');
    let list_content = document.createTextNode(`${record[x].sethour}時${record[x].setminute}分`);
    parent_list.appendChild(container_list);
    container_list.appendChild(list_content);

    //表示削除用ボタン
    let list_span = document.createElement('span');
    let id_li = document.createAttribute('id');
    let id_span = document.createAttribute('id');
    let span_content = document.createTextNode('削除');
    container_list.appendChild(list_span);
    list_span.appendChild(span_content);
    container_list.setAttributeNode(id_li);
    container_list.id = x;
    container_list.classList.add('deletes');
    list_span.classList.add('delete_btn');

    //設定時刻と表示を削除
    let deletes = document.getElementsByClassName('deletes');
    for (var i = 0, de_len = deletes.length; i < de_len; i++) {
        deletes[i].onclick = function () {
            record[this.id] = 'disabled';
            this.id = 'temp';
            var temp = document.getElementById('temp');
            temp.parentNode.removeChild(temp);
        };
    };
    x++;
});

//時計を動かす
function updateCurrentTime() {
    setTimeout(function () {
        currentDate = new Date();
        hours = adjustDigit(currentDate.getHours());
        minutes = adjustDigit(currentDate.getMinutes());
        seconds = adjustDigit(currentDate.getSeconds());
        timerText.innerHTML = `${hours}:${minutes}:${seconds}`;

        //アラーム機能
        for (var i = 0, len = record.length; i < len; i++) {
            if (record[i].sethour == currentDate.getHours() && record[i].setminute == currentDate.getMinutes() && seconds == 0) {
                // alert('The time is now!');
                // ↑alertを消して↓ランダム1,2,3のおまじないにアレンジした
                var random = Math.floor(Math.random() * 3 + 1);
                console.log(random, "ランダムな数字の箱");

                if (random === 1) {
                    console.log("名古屋名物つけてみそかけてみそ");
                    $(".aaa").html("古屋名物つけてみそかけてみそ");
                    $("#play-button1").get(0).play();
                } else if (random === 2) {
                    console.log("青森のソウルフード生姜味噌おでん");
                    $(".aaa").html("青森のソウルフード生姜味噌おでん");
                    $("#play-button2").get(0).play();
                } else if (random === 3) {
                    console.log("高知土佐の万能調味料ぬた");
                    $(".aaa").html("高知土佐の万能調味料ぬた");
                    $("#play-button3").get(0).play();
                }
                // ↑ランダムここまで
            };
        };
        updateCurrentTime();
    }, 1000);
} updateCurrentTime();


// ****************************

// 以下音源再生
$('button').click(function () {
    $("#play-button").get(0).play();
});







