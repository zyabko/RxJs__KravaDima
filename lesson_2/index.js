// var button = document.querySelector('button');
//
// var btn$ = rxjs.fromEvent(button, 'click');
//
//
// btn$.subscribe(function(event) {
//   console.log(event);
// });

rxjs.fromEvent(document.querySelector('input'), 'keyup')
    .subscribe(e => console.log(e));