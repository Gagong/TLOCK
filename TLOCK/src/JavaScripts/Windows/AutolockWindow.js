class AutolockWindow {
	createWindow() {
		this.autolockWindow = WindowFactory.createWindow({
			width: 320,
			text: "Autolocker"
		});

		let options = [
			{
				name: 'keyEnemy',
				type: 'text',
				span: true,
				labelBefore: true,
				labelText: 'Enemy key: ',
				appendTo: this.autolockWindow,
				attrs:{
					value: "",
					maxlength: "1",
				},
				eventType: 'keyup',
				event: function (){
					window.keyManager.updateAction(EnemyAutoLockAction.NAME, this.value);
				}
			},
			{
				name: 'keyNpc',
				type: 'text',
				span: true,
				labelBefore: true,
				labelText: 'Npc key: ',
				appendTo: this.autolockWindow,
				attrs:{
					value: "",
					maxlength: "1",
				},
				eventType: 'keyup',
				event: function (){
					window.keyManager.updateAction(NpcAutoLockAction.NAME, this.value);
				}
			},
			{
				name: 'laserSlots',
				type: 'text',
				span: true,
				labelBefore: true,
				labelText: 'Laser slots: ',
				appendTo: this.autolockWindow,
				attrs:{
					value: "|",
					maxlength: "3",
				},
				eventType: 'change',
				event: function (){
					let slots = this.value.split("|").map(slot => parseInt(slot));
					window.fightPresetsManager.fightPreset.slotsManager.updateSlotDependencies(slots[0], slots[1]);
				}
			},
			{
				name: 'rocketSlots',
				type: 'text',
				span: true,
				labelBefore: true,
				labelText: 'Rocket slots: ',
				appendTo: this.autolockWindow,
				attrs:{
					value: "|",
					maxlength: "3",
				},
				eventType: 'change',
				event: function (){
					let slots = this.value.split("|").map(slot => parseInt(slot));
					window.fightPresetsManager.fightPreset.slotsManager.updateSlotDependencies(slots[0], slots[1]);
				}
			},
			{
				name: 'otherSlots',
				type: 'text',
				span: true,
				labelBefore: true,
				labelText: 'Other slots: ',
				appendTo: this.autolockWindow,
				attrs:{
					value: "|",
					maxlength: "10",
				},
				eventType: 'change',
				event: function (){
					let slots = this.value.split("|").map(slot => parseInt(slot));
					window.fightPresetsManager.fightPreset.slotsManager.updateUnpairedTimerSlots(slots);
				}
			},
			{
				name: 'attackTarget',
				type: 'checkbox',
				labelText: 'Auto attack target',
				appendTo: this.autolockWindow,
				attrs:{
					checked: window.settings.autoattack
				},
				event: function () {
					window.settings.autoattack = this.checked;
				}
			},
		];

		options.forEach((option) => {
			this[option.name] = ControlFactory.createControl(option);
		});

	}
}