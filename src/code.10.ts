import { Observable,merge } from "rxjs"; // rxjs 6 版本以上

var observable = Observable.create((observer : any) => {
    observer.next('Hey guys!');
});
var observable2 = Observable.create((observer : any) => {
    observer.next('How is it going?');
});

var newObservables = merge(observable, observable2);

newObservables.subscribe(
    (data : any) => addItem(data)
);

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

