Vue.component('my-component',
  {
    template: '<div>' +
    '<h1>My component</h1>' +
    '<span>hello</span>' +
    '<p>probable</p>' +
    '<span>{{text}}</span>' +
    '</div>',
    data:function (){
      return {
        text:'this is a testing text'
      }
    },
  });

new Vue({
  el: '#app',
  data: {},
  methods: {},
  components: {}
});