class Slot{
    constructor(id){
        this._activatable = true;
        this.selected = false;
        this.id = id;
        this._secondarySlot = null;
        this._primarySlot = null;

        this.lastTimeSelected = null;

        this.switchTargetSlot = null;
    }

    get activatable(){
        return this._activatable;
    }

    set activatable(selectedStatus){
        if (!this.primarySlot && this.activatable != selectedStatus && ($.now() - this.lastTimeSelected) < 100){ //hack, sometimes slots after being activated dont change activatable state
            return;
        }
        this.lastTimeSelected = $.now();
        this._activatable = selectedStatus;
    }

    get isSecondary(){
        return this.primarySlot && !this.secondarySlot;
    }

    get secondarySlot(){
        return this._secondarySlot;
    }

    set secondarySlot(slot){
        this._secondarySlot = slot;
        slot.primarySlot = this;
    }

    set primarySlot(slot){
        this._primarySlot = slot;
    }

    get primarySlot() {
        return this._primarySlot;
    }
}