class SlotsManager{
    constructor(){
        this.initSlots();
        this._unpairedTimerSlots = []; //from settings
    }

    initSlots(){
        this.slots = [];

        for (let i = 1; i <= 10; i++){
            this.slots.push(new Slot(i));
        }
    }

   handleSlotUpdate(slotId, state){
        let slot = this.getSlotById(slotId);
        //let slotStateChanged = slot ? this.isSlotStateChanged(slot, state) : false;

        if (slot) {
            this.updateSlot(slot, state);

            if (window.fightPresetsManager.fightPreset.attackAvailability) {
                this.handleAttack();
            }
        }
    }

    getSlotById(slotId){
        return this.slots.find(
            slot => slot.id == slotId
        );
    }

    handleAttack(){
        this.slots.filter(slot =>
            this.allTimerSlots.includes(slot.id) && slot.hasTimer
        )
        .forEach(slot =>
            this.handleSwitching(slot)
        );
    }

    handleSwitching(slot){
        let slotToSelect = !slot.secondarySlot && slot.activatable ? slot
            : slot.primarySlot && !slot.activatable && slot.selected ? slot.primarySlot
            : null;

        if (slotToSelect){
            this.handleSlotSelection(slotToSelect);
        }
    }

    handleSlotSelection(slot){
        if ($.now() - slot.lastTimeSelected > 200){
            window.api.pressKey(slot.id);
            slot.lastTimeSelected = $.now();
        }
    }

    get allTimerSlots(){
        return this._unpairedTimerSlots
            .concat(
                this.slots.filter(
                    slot => slot.primarySlot != null
                )
                .map(
                    slot => slot.id
                )
            )
    }

    updateUnpairedTimerSlots(ids){
        this._unpairedTimerSlots = ids;
    }

    updateSlotDependencies(primaryId, secondaryId){
        let primarySlot = this.getSlotById(primaryId);
        let secondarySlot = this.getSlotById(secondaryId);

        //console.log(`${primarySlot}, ${secondarySlot}`);

        if (primarySlot && secondarySlot){
            primarySlot.secondarySlot = secondarySlot;
        }
    }

   updateSlot(slot, state){
        slot.hasTimer = state.hasTimer;
        slot.activatable = state.activatable;
        slot.selected = state.selected;
    }

    // isSlotStateChanged(slot, state){
    //     return slot.activatable != state.activatable || slot.selected != state.selected;
    // }
}