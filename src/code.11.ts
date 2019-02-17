import { Observable } from "rxjs"; // rxjs 6 版本以上
import { map } from 'rxjs/operators';
/**
 * import 'rxjs/add/operator/map';
 * Observable.create(...).map(...)
 */

Observable.create((observer : any) => {
    observer.next('Hey guys!');
}).pipe(
    map(
        (val : any) => val.toUpperCase()
    )
).subscribe(
    (x : any) => addItem(x)
);


function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

