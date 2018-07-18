var stream$ = rxjs.Observable.create(function(observer) {
  observer.next('blabla!!!');

  setTimeout(function() {
    observer.complete();
  }, 5000);

  // setTimeout(function() {
  //   observer.error('Something went wrong');
  // }, 4000);

  setTimeout(function() {
    observer.next('kvakvakva!!!');
  }, 3000);

  observer.next('ыаыаыаыа!!!');
});

stream$.subscribe(
  function(data) {
    console.log('Subscribe' + ' ' + data);
  },
  function(error) {
    console.log('Error' + ' ' + error);
  },
  function() {
    console.log('Completed!');
  }
);

