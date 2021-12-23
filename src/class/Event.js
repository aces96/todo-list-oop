const Project = require("./Project");
const Tash = require("./Tach");
const Dom = require("./Dom");

class Event {
    createProject(e) {
        let name = document.getElementById('projectName').value
        let description = document.getElementById('projectDescription').value
        let prioritie = document.getElementById('prioritie').value

        let projectCreated = new Project().create(name, description, prioritie)

        // let allProj = data.get('project')

        new Dom().createProject(projectCreated.id, projectCreated.name, projectCreated.date, projectCreated.description, projectCreated.pro)

        return 1;
    }

    createTach() {

        let tashName = document.getElementById('tashName').value
        let tashDes = document.getElementById('tashDesription').value
        let status = document.getElementById('prioritie').value

        let tashCreated = new Tash().create(2, tashName, tashDes, status)

        new Dom().createTask(2, tashCreated.id, tashCreated.name, tashCreated.description, tashCreated.due_at, 0, tashCreated.status)
        return 1;
    }

    projectLoad(){
        let projectLoop = new Project().all()
        projectLoop.forEach(project => {
            new Dom().createProject(project.Id,project.name, project.description, project.date, project.finish, project.status)
        });
    }

    tachLoad() {
        let taskLoop = new Tash().all()
        taskLoop.forEach(task => {
            new Dom().createTask(task.projectId, task.id, task.name, task.description, task.due_at, task.finish, task.status)
        });
    }

    editTach(e) {
        let rowId = e.target.parentNode.parentNode.parentNode;
        return 1;
    }
}

module.exports = Event