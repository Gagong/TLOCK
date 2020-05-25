class KeyEventsManager{
    constructor(){
        this.actions = {};

    }

    updateAction(actionName, keys){
        this.actions[actionName].keys = keys;
        console.log(this.actions[actionName].keys);
    }

    getActionByKey(key){
        console.log(key.key);
        return Object.values(this.actions).find((action) =>
            action.keys.includes(key.key)
            //action.keys == key.code
        )
    }

    registerAction(actionName, action){
        this.actions[actionName] = action;
    }

}
