
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message1: 'You loaded this page on ' + new Date(),
    message2: 'now Time is ' + new Date(),
  },
  watch: {
    message2:function(val, oldVal){
      return val;
    }
  }
})
var Timer = setInterval(function(){ app2.message2 = 'now Time is ' + new Date().format() },1000);

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript',descript: '' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});