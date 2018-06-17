let x = new Vue({
	el: '#app',
	data:{
		toDo:'prueba',
		list:[]
	},
	methods:{
		addWorkToDo : function (){
			if (this.toDo && this.toDo != '')
			this.list.push({
				text: this.toDo,
				complete: false
			});
			this.toDo = '';
		},
		completeTask : function (item){
			console.log(item);
			item.complete= !item.complete;
		}
	}
});