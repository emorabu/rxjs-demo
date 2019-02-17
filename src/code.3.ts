import { Observable } from "rxjs"; // rxjs 6 版本以上
import { share } from 'rxjs/operators';
/**
 import  'rxjs/add/operator/share';// rxjs 6 版本以下
 Observable.create(function(){}).share();
 *  */

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
}).pipe(share());// share 在多个订阅者间共享源
/**
 * 使时间上靠后的观测者订阅的结果和早的观测者 在Observable emmit item 时同一时间保持一致
 * 靠后的观测者可能收不到一些早期的消息, 这就是 host observable
 */

var observer = observable.subscribe(
    (x : any) => addItem(x),
    (error : any) => addItem(error),
    () => addItem('completed')
);


setTimeout(() => {
    var observer2 = observable.subscribe(
        (x : any) => addItem('subscriber 2 : ' + x),
    );
}, 1000);

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

