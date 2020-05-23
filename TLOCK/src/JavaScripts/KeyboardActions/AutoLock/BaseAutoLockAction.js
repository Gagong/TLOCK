class BaseAutoLockAction extends BaseAction{
    constructor(){
        super();
    }

    handleAction(){
        window.settings.autoattack ? window.hero.lockAndAttack(this.targetType)
        : window.hero.lock(this.targetType);
    }

    get targetType(){
        ;
    }
}