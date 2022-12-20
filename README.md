# stopWatch_practice

JavaScriptでストップウォッチアプリを作成しました。

--memo--

・let second =0 を定義、setInterval()で1秒ごとに＋１する処理を実行。
・clearInterval()でストップウォッチの停止。setInterval()の戻り値をclearInterval（）の引数に渡すとsetInterval()が解除される。
・この2つの処理のみだとスタートボタンを続けて押した際にバグが発生するためif文で制御。

let timer=null

//スタートボタンメソッドに記述
if(timer===null){
setInterval()の処理
}

//ストップボタンのメソッドに記述
if(timer!==null){
clearInterval()の処理
}

・最後に全ての処理をclassにまとめる
