import { ReplaySubject } from "rxjs"; // rxjs 6 版本以上
// import { ReplaySubject } from "rxjs/ReplaySubject"; // rxjs 6 版本以下

var subject = new ReplaySubject(30, 2000); // ReplaySubject 可以收到订阅前的最后m条消息, 参数为消息数量, 第二个参数为毫秒值, 表示一次性收到订阅前n毫秒内的消息

subject.subscribe(
    data => addItem('Observer 1:' + data),
    err => addItem(err),
    () => addItem('Observer is completed')
);

var i = 1;
var  int = setInterval(() => subject.next(i++), 1000);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2 '+ data)
    );
}, 5000);

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

