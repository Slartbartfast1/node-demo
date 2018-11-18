/**
 * 避免队列过长引起内存泄漏的简单方法
 * */
class limitTableMap {
    constructor(limit) {
        this.limit = limit || 100;
        this.map = {};
        this.keys = [];
    }

    set(key, value) {
        var map = this.map;
        var keys = this.keys;
        var hasOwnProperty = Object.prototype.hasOwnProperty();
        if (!hasOwnProperty.call(map, key)) {
            if (keys.length === this.limit) {
                let firstKey = keys.shift;
                delete map[firstKey];
            }
            keys.push(key);
        }
        map[key] = value;
    }

    get(key) {
        return this.map[key]
    }
}

module.exports = limitTableMap;