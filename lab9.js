//convert this es5 class to es6
// function Foo(options) {
//    this.index = options.index;
//    this.name = options.name || 'foo';
//    var items = options.items;
//    var self = this;
//    function bar() {
//    self.say();
//    }
//    items.forEach(function() {
//    self.say();
//    });
//    for (var i = 0; i < items.length; i++) {
//    bar();
//    }
// }
// Foo.prototype.say = function() {
//    console.log(arguments);
// }

class Foo {
   constructor(options, name = "foo") {
      this.index = options;
      this.name = name;
   }
   bar() {
      this.say();
   }
}
Foo.prototype.say() = function() {
   console.log(arguments);
}