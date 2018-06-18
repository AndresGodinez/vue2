let x = new Vue({
  el: '#app',
  data: {
    taskToDo: 'testing',
    listTasksToDo: [
      {text: 'create new task', complete: false, priority: true},
      {text: 'show videos', complete: false, priority: true},
      {text: 'show api', complete: false, priority: false},
    ],
    users : [
      {
        name: 'Andres',
        role: 'admin',
        priority: 1
      },
      {
        name: 'Pablo',
        role: 'user',
        priority: 2
      }
    ],
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
    },
    taskForUser(){
      user.name = 'Andres';
      return this.listTasksToDo.filter((user) => user.name);
    }
  }
});