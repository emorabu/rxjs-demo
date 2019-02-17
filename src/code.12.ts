import { from } from "rxjs"; 
import { pluck } from 'rxjs/operators';
/**
 * import { from } from 'rxjs/Observable/from'
 * import 'rxjs/add/operator/pluck';
 *  from([...]).pluck(...)
 */

from([
    {first: 'Gary', last: 'Simon', age: 34},
    {first: 'Jane', last: 'Simon', age: 34},
    {first: 'John', last: 'Simon', age: 34},
]).pipe(
    pluck('first')
).subscribe(
    (x : any) => addItem(x)
);


function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

