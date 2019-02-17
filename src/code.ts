import { Observable, Subject, interval } from "rxjs"; 
import { skipUntil } from 'rxjs/operators';
/**
 * import { Observable } from 'rxjs/Observable'
 * import { Subject } from 'rxjs/Subject'
 * import { interval } from 'rxjs/Observable/interval'
 * import { skipUntil } from 'rxjs/add/operator/skipUntil'
 */

 var observable = Observable.create((data:any) => {
     var i = 1;
     setInterval(() =>{
        data.next(i++);
     }, 1000);
 });

 var subject = new Subject;

 setTimeout(() => {
     subject.next('Hey!');
 }, 3000);

 var newObservable = observable.pipe(
    skipUntil(subject)
 );// newObservable 获取到的消息是 3, 4, 5, ...,忽略了 1 2 即前2秒的消息 , 因为第3秒的时候才开始处理

 newObservable.subscribe(
     (x : any) => addItem(x)
 ); 


function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

