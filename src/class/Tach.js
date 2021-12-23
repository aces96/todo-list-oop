

const Data = require("./Data");

class Tach {
    create(projectId, name, description, status, finish = 0) {

        let data = new Data()

        let allTACH = data.get('tach');
        let obj = {
            "id": Math.floor(Math.random() * 100000),
            "projectId": projectId,
            "name": name,
            'due_at': new Date().getTime(),
            'description': description,
            'status': status,
            'finish': finish
        }

        allTACH.push(obj)

        data.set('tach', allTACH);

        return obj; // return info with id of project

    }

    update(id, key, value) {
        let data = new Data
        let allTACH = data.get('tach');

        allTACH.find((o, i) => {
            if (o.id == id) {
                allTACH[i][key] = value;
                return true; // stop searching
            }
        });

        data.set('tach', allTACH);

        return 1;
    }

    delete(id) {
        let data = new Data

        let allTACH = data.get('tach');
        var filtered = allTACH.filter(function (value, index, arr) {
            return value.id != id;
        });

        data.set('tach', filtered);

        return 1; // return info with id of project
    }


    all() {
        let data = new Data()
        return data.get('tach');
    }

    get(id) {
        let data = new Data()
        let allTACH = data.get('tach')
        let tach = allTACH.find(tach => tach.id == id)
        return tach;
    }
}

module.exports = Tach