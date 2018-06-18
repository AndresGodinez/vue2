Vue.component('moviesComponent', {
  template: '<h1>Component</h1>' +
  '<span>anohter component</span>'
});
new Vue({
  el: '#app',
  data: {
    movieTitle: '',
    listMovies: [
      {
        name: 'predator',
        year: 1987,
        author: 'No one',
        image: 'http://www.factmag.com/wp-content/uploads/2017/07/predator-616x440.jpg'
      },
      {
        name: 'jurassic Word',
        year: 2000,
        author: 'No one',
        image: 'http://www.factmag.com/wp-content/uploads/2017/07/predator-616x440.jpg'
      },
      {
        name: 'back to future',
        year: 1995,
        author: 'No one',
        image: 'http://www.factmag.com/wp-content/uploads/2017/07/predator-616x440.jpg'
      },
      {
        name: 'inception',
        year: 2010,
        author: 'No one',
        image: 'http://www.factmag.com/wp-content/uploads/2017/07/predator-616x440.jpg'
      },
      {
        name: 'ready fro player one',
        year: 2014,
        author: 'No one',
        image: 'http://www.factmag.com/wp-content/uploads/2017/07/predator-616x440.jpg'
      },
    ],

  },
  methods: {},
  computed: {
    findByTitle() {
      return this.listMovies.filter((movieTitle) => movieTitle.name.includes(this.movieTitle))
    }
  }
});