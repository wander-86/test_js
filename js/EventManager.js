var EventManager = function() {
    this.eventList = {};
};

EventManager.prototype = {
    on: function(eventName, fn) {
        if (!this.eventList[eventName]) {
            this.eventList[eventName] = new Array();
        }

        if (typeof fn == 'function') {
            this.eventList[eventName].push(fn);
        }
    },

    execute: function(eventName, callbackData) {
        if (typeof this.eventList[eventName] == 'object') {
            for (var index = 0, l = this.eventList[eventName].length; index < l; index++) {
                this.eventList[eventName][index].call(window, callbackData);
            }
        }
    }
};