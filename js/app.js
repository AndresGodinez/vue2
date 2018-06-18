let x = new Vue({
  el: '#app',
  data: {
    taskToDo: 'testing',
    listTasksToDo: [
      {text: 'create new task', complete: false, priority: true},
      {text: 'show videos', complete: false, priority: true},
      {text: 'show api', complete: false, priority: false},
    ]
  },
  methods: {
    addTaskToDo: function () {
      if (this.taskToDo && this.taskToDo != '')
        this.listTasksToDo.push({
          text: this.taskToDo,
          complete: false,
          priority : true
        });
      this.taskToDo = '';
    },
    completeTask: function (task) {
      console.log(task);
      task.complete = !task.complete;
    },
    changePriority(task){
      console.log(task);
      task.priority = !task.priority;
    }
  },
  computed:{
    priorityTasks(){
      return this.listTasksToDo.filter((task) => task.priority )
    }
  }
});