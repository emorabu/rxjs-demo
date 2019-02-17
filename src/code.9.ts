import { AsyncSubject } from "rxjs"; // rxjs 6 版本以上
// import { AsyncSubject } from "rxjs/AsyncSubject"; // rxjs 6 版本以下

var subject = new AsyncSubject();// AsyncSubject complete() 前只会执行最后一次 next(), 如果将来没有complete(), 也不会去执行 next()

subject.subscribe(
    data => addItem('Observer 1:' + data),
    err => addItem(err),
    () => addItem('Observer is completed')
);

var i = 1;
var int = setInterval(() => subject.next(i++), 1000);

setTimeout(() => {
    var observer2 = subject.subscribe(
        data => addItem('Observer 2 '+ data)
    );
   subject.complete();
}, 5000);

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

