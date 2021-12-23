const Data = require("./Data");

class Dom {
    createProject(id, name, date, description, pro) {

        let project = document.querySelector('#project');
        let clonedProject = project.cloneNode(true);

        clonedProject.style.display = 'block';

        clonedProject.setAttribute('data-id', id)
        clonedProject.setAttribute('data-name', name)
        clonedProject.setAttribute('data-date', date)
        clonedProject.setAttribute('data-description', description)
        clonedProject.setAttribute('data-pro', pro)

        // // 

        clonedProject.getElementsByClassName('projectName')[0].innerText = name;

        clonedProject.setAttribute('id', 'pro_' + id)

        document.getElementById("newProject").appendChild(clonedProject);

        return 1;
    }

    createTask(projectId, tachId, name, description, due_at, finish, status) {

        let task = document.querySelector('#task');
        let clonedTask = task.cloneNode(true);

        clonedTask.style.display = 'table-row';

        clonedTask.setAttribute('data-projectId', projectId)
        clonedTask.setAttribute('data-tachId', tachId)
        clonedTask.setAttribute('data-name', name)
        clonedTask.setAttribute('data-description', description)
        clonedTask.setAttribute('data-due_at', due_at)
        clonedTask.setAttribute('data-finish', finish)
        clonedTask.setAttribute('data-status', status)

        clonedTask.getElementsByClassName('task-name')[0].innerText = name;
        clonedTask.getElementsByClassName('task-description')[0].innerText = description;
        clonedTask.getElementsByClassName('task-due_at')[0].innerText = due_at;
        clonedTask.getElementsByClassName('task-finish')[0].innerText = finish;
        clonedTask.getElementsByClassName('task-status')[0].innerText = status;

        document.getElementById("newTask").appendChild(clonedTask);

        clonedTask.setAttribute('id', 'task_' + tachId)

        ;
    }

    updateProject(id, key, value) {
        let project = document.getElementById('pro_' + id)
        if (key == 'name') {
            project.getElementsByClassName('projectName')[0].innerText = value;
        }
        project.setAttribute('data-' + key, value)

        return 1;
    }

    updateTask(tachId, key, value) {
        let task = document.getElementById('task_' + tachId)

        task.getElementsByClassName('task-' + key)[0].innerText = value;

        task.setAttribute('data-' + key, value)
        return 1;
    }


    deleteProject(id) {
        let delPro = document.getElementById('pro_' + id)
        delPro.remove();
    }

    deleteTask(tachId) {
        let delTask = document.getElementById('task_' + tachId)
        delTask.remove();
    }
}

module.exports = Dom
