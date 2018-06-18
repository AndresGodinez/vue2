new Vue({
  el:"#app",
  mounted(){
    this.queryResult();
  },
  data:{
    users:[],
  },
  methods:{
    queryResult(){
      axios.get('https://randomuser.me/api/?results=100')
        .then((results) => {
          console.log(results);
          this.users = results.data.results;
        })
    },

  },
  computed:{

  }
});