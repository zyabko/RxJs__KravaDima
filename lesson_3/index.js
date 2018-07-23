// rxjs.of(5, '9', 14, 25, 'blablabla', [4, 2, 45])
//     .subscribe(
//       (x) => console.log(x),
//       (err) => console.log(err),
//       () => console.log('Completed')
//     )

function createSubscribe() {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log('Error: ', x);
    }
    ,
    complete() {
      console.log(name, ' completed.');
    }
  }
}

rxjs.of(5, '9', 14, 25, 'blablabla', [4, 2, 45])
  .subscribe(createSubscribe('of'));

console.log(rxjs)

var xxx = rxjs.Observable.create(function(observer) {
  observer.next(5, '9', 14, 25, 'blablabla', [4, 2, 45]);
});





xxx.pipe(take(5),)
  .interval(500)
  .subscribe(createSubscribe('interval'));
// rxjs.interval(500).take(5)
//   .subscribe(createSubscribe('interval'));