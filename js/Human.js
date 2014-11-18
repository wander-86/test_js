/**
 * @param human = {name: string, spouse: Human, phone: string}
 * @constructor
 */
Human = function(human) {
    this.name   = !human.name ? '' : human.name;
    this.spouse = !human.spouse ? false : human.spouse;
    this.phone  = !human.phone ? '' : human.phone;

    this.em = new EventManager();
};

Human.prototype = {
    setName: function(name) {
        var callbackData = {
            propertyName: 'name',
            oldValue: this.name,
            newValue: name
        };
        this.name = name;

        this.em.execute('update', callbackData);
    },

    setPhone: function(phone) {
        var callbackData = {
            propertyName: 'phone',
            oldValue: this.phone,
            newValue: phone
        };
        this.phone = phone;

        this.em.execute('update', callbackData);
    },

    /**
     * @param Human|bool spouse
     */
    setSpouse: function(spouse) {
        var callbackData = {
            propertyName: 'spouse'
        };

        if (spouse instanceof Human) {
            callbackData.oldValue = this.spouse.name ? this.spouse.name : false;
            callbackData.newValue = spouse.name;

            this.spouse = spouse;
            spouse.spouse = this;
        } else if(spouse === false) {
            callbackData.oldValue = this.spouse.name;
            callbackData.newValue = false;

            this.spouse = false;
        }

        this.em.execute('update', callbackData);
    }
};

Human.prototype.emploer = new Array();
Human.prototype.setEmployer = function(hr) {
    if (hr instanceof HR) {
        this.emploer.push(hr);

        this.em.on('update', function(callbackData) {
            hr.emergencyUpdated(callbackData.propertyName, callbackData.oldValue, callbackData.newValue);
        });
    }
};