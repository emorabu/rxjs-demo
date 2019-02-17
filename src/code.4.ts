import { Observable, fromEvent } from "rxjs"; // rxjs 6 版本以上
/**
 *  import { fromEvent } from 'rxjs/Observable/fromEvent'; rxjs 6 以前
 *  
 *  */
var observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    var subscription = observable.subscribe(
        (x : any) => addItem(x)
    );
}, 2000);

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

