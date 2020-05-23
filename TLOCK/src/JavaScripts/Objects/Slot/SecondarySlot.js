class SecondarySlot extends Slot{
    constructor(){
        super();
    }

    get switchAvailability() {
        return !this.activatable && this.selected;
    }
}