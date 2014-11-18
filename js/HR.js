/**
 *
 * @constructor
 */
var HR = function(name) {
    this.name = name;
    this.workerList = new Array();
};
/**
 *
 * @type {{workerList: Array, addWorker: Function, getWorkerList: Function}}
 */
HR.prototype = {
    addWorker: function(worker) {
        if (worker instanceof Human) {
            this.workerList.push(worker);
            worker.setEmployer(this);
        } else {
            console.log(worker + ' is not instance of Human');
        }
    },

    emergencyUpdated: function(propertyName, oldValue, newValue) {
        console.log('Property ' + propertyName + ' was ' + oldValue + ' and became ' + newValue);
    },

    getWorkerList: function() {
        return this.workerList;
    }
};


