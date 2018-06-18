Vue.component('testing-props', {
  props: ['title', 'author', 'url'],
  template: '<div><h1> Component </h1>' +
  '<h1><a :href="url">{{title}}</a></h1>' +
  '<p>{{author}}</p>' +
  '</div>'
});

new Vue({
  el: "#app",
  data: {
    title: "horas",
    author: "Andrés",
    url: "https://es.wikipedia.org/wiki/Andrés"
  }
});