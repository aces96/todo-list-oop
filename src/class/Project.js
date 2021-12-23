const Data = require("./Data");

class Project {
    create(name, description, pro) {
        let data = new Data()

        let allPro = data.get('project');

        let obj = {
            "id": Math.floor(Math.random() * 100000),
            "name": name,
            'date': new Date(),
            'description': description,
            'pro': pro
        }

        allPro.push(obj)

        data.set('project', allPro);

        return obj;
    }

    update(id, key, value) {
        let data = new Data()
        let allProj = data.get('project')
        let newObj = [];

        allProj.forEach(project => {


            if (project.id == id) {
                project[key] = value
                newObj.push(project)
            } else if (project.id != id) {
                newObj.push(project)
            }
        })
        data.set('project', newObj);

        return newObj;


    }

    delete(id) {
        let data = new Data()
        let allProj = data.get('project')
        let newObj = [];


        allProj.forEach(project => {

            if (project.id != id) {
                newObj.push(project)
            }

        })
        data.set('project', newObj);
        return newObj;
    }

    all() {
        let data = new Data()
        let allProj = data.get('project')
        return allProj;
    }

    get(id) {
        let data = new Data()
        let allProj = data.get('project')
        
        elmnt = allProj.find(project => project.id == id)
        return elmnt;
    }

    // getTachs(projectId) {
    //     return 1; // return tach of this product (Object)
    // }
}

module.exports = Project