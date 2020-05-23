class NpcAutoLockAction extends BaseAutoLockAction{
    static get NAME(){
        return "NpcAutoLock"
    }

    constructor(){
        super();
    }

    get targetType(){
        return Npc;
    }
}