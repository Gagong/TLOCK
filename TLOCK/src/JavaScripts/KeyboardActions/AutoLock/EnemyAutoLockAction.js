class EnemyAutoLockAction extends BaseAutoLockAction {
    static get NAME(){
        return "EnemyAutoLock";
    }

    constructor() {
        super();
    }

    get targetType(){
        return Enemy;
    }
}