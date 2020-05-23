class BaseAction{
    static get NAME(){
        ;
    }

    constructor(){
        this._keys = " ";
    }

    execute(){
      this.handleAction();
    }

    handleAction(){
      ;
    }

    get keys(){
        return this._keys;
    }

    set keys(keys){
        this._keys = keys;
    }
}