class Slot{
    constructor(id){
        this._activatable = true;
        this.selected = false;
        this.id = id;
        this.hasTimer = true;
        this._primarySlot = null;
        this._secondarySlot = null;

        this.lastTimeSelected = 0;
    }

    get activatable(){
        return this._activatable;
    }

    set activatable(selectedStatus){
        this._activatable = selectedStatus;
    }

    set secondarySlot(slot){
        this._secondarySlot = slot;
        slot.primarySlot = this;
    }

    get secondarySlot(){
        return this._secondarySlot;
    }

    set primarySlot(slot){
        this._primarySlot = slot;
    }

    get primarySlot() {
        return this._primarySlot;
    }
}