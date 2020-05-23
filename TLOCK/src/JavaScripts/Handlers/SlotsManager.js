class SlotsManager{
    constructor(){
        this.initSlots();
        this.countdownableSlots = [2, 3]; //from settings
    }

    initSlots(){
        this.slots = [];

        for (let i = 1; i <= 10; i++){
            this.slots.push(new Slot(i));
        }
        this.slots[0].secondarySlot = this.slots[1];//from settings
    }

    getSlotById(slotId){
        return this.slots[slotId - 1];
    }

    // TODO: refactor
    switchSlot(slot) {
        let id = null;

        if (slot.primarySlot){
            if (slot.activatable && !slot.selected){
                id = slot.id;
            }
            else if (!slot.activatable && slot.selected){
                id = slot.primarySlot.id;
            }
        }
        else if (!slot.secondarySlot){
            if (slot.activatable){
                id = slot.id;
            }
        }

        if (id) {
            slot.activatable = false;
            window.api.pressKey(id);
        }
    }

    update(){
        this.slots.filter( slot =>
            this.countdownableSlots.includes(slot.id)
        )
        .forEach(slot =>
            this.switchSlot(slot)
        );
    }

    handleSlotUpdate(slotId, item){
        let slot = this.getSlotById(slotId);

        slot.activatable = item['activatable'];
        slot.selected = item['selected'];

        if ( window.hero.targetShip) {
            this.update();
        }
    }

     // getSlotIdToSwitch(slot){
    //     return slot.isSecondary && slot.activatable && !slot.selected ? slot.id
    //         : slot.isSecondary && !slot.activatable && slot.selected ? slot.primarySlot.id
    //         : null;
    // }
}