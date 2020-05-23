class SecondarySlot extends Slot{
    constructor(){
        super();
    }

    get switchAvailability() {
        return this.alter.activatable && !this.alter.selected;
    }
}