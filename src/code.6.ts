import { BehaviorSubject } from "rxjs"; // rxjs 6 版本以上
// import { BehaviorSubject } from "rxjs/BehaviorSubject"; // rxjs 6 版本以下

var subject = new BehaviorSubject('First'); // 参数会 emitted

subject.subscribe(
    data => addItem('Observer 1:' + data),
    err => addItem(err),
    () => addItem('Observer is completed')
);

subject.next('The first thing has been sent'); 
subject.next('... Observer 2 is about to subscribe ..');
subject.next('it is strange');

var observer2 = subject.subscribe(
    data => addItem('Observer 2:' + data)
); // BehaviorSubject 可以收到订阅前的最后一条消息

subject.next('The second thing has been sent');
subject.next('The third thing has been sent');

observer2.unsubscribe();

subject.next('A final thing has been sent');// 第二个观测者取消订阅了, 因此只能被第一个观测者收到

function addItem(val : any){
    var node = document.createElement('li');
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

