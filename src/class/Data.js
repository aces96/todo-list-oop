class Data {
    get(key) {
        let data = localStorage.getItem(key);
        let ret;

        if (data == null) {
            ret = []
        } else {
            ret = JSON.parse(data);
        }

        return ret;
    }

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
        return 1;
    }
}

module.exports = Data