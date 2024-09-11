let taskFormEl=document.getElementById('task-form');
let taskEl=document.getElementById('task-el');

taskFormEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let task=taskEl.value.trim();
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
    taskEl.value="";
});

function displayTasks()
{
    let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

    if(taskList.length!=0)
    {
        let eachTask='';
        for(let task of taskList)
        {
            eachTask+=`<li class="list-group-item list-group-item-warning mb-2">
                                <span>${task}</span>
                                <button class="float-end ms-2">
                                    <i class="fa-regular fa-trash-can"></i>
                                </button>
                                <button class="float-end">
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </button>
                            </li>`;
        }
        document.querySelector('#display').innerHTML=eachTask;
    }
}
displayTasks();