const { createApp } = Vue;

createApp({
    data(){
        return{
            title:'Vue To Do List',
            newTask: '',
            tasks:[
                {
                    text: 'Fare colazione',
                    done: false
                },
                {
                    text: 'Seguire la lezione Boolean',
                    done: true
                },
                {
                    text: 'Fare l\' esercizio di Boolean',
                    done: true
                },
                {
                    text: 'Pranzare',
                    done: true
                },
                {
                    text: 'Andare dal barbiere',
                    done: false
                },
                {
                    text: 'Andare al compleanno di Bart',
                    done: false
                },
            ]
        }
    },

    methods: {
        cambiaStatoTask(index){
            this.tasks[index].done = !this.tasks[index].done;
        },
        eliminaTask(index){
            this.tasks.splice(index,1);
        },
        aggiungiTask(){
            let obj = {
                text: this.newTask,
                done: false
            }

            this.tasks.push(obj);

            this.newTask = '';
        }

    },
}).mount('#app')