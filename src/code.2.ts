import { Observable } from "rxjs"; // rxjs 6 版本以上

var observable = Observable.create((observer: any) => {
    try {
        observer.next('Hey guys! ');
        observer.next('How are you! ');
        setInterval(() => {
            observer.next('I am good.');
        }, 2000);
        // observer.complete(); //执行了 complete() 或 error() 后将不再执行 next()
        // observer.next('never send ');

    } catch(err) {
        observer.error(err);
    }
});

var observer = observable.subscribe(
    (x : any) => addItem(x),
    (error : any) => addItem(error),
    () => addItem('completed')
);

var observer2 = observable.subscribe(
    (x : any) => addItem(x),
);

observer.add(observer2); // observer2 作为 observer 的子订阅, 即可实现取消父订阅后, 同时取消子订阅.

setTimeout(() => {
    observer.unsubscribe(); // 取消订阅
}, 6001);

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

