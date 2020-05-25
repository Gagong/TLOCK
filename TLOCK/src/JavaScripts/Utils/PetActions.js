class PetActions{
    static get DEFAULT_ACTIONS (){
        return {
            'REVIVE': 4,
            'GUARD': 3,
            'ACTIVATE': 0,
            //...
        }
    }

    static get GEAR_ACTIONS(){
        return {
            'KAMI': 10,
            //..
        }
    }

    static get GEARD_COOLDOWN_STATUSES(){
        return {
            5: this.GEAR_ACTIONS['KAMI'],
            //..
        }
    }
}