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
				labelText: 'enemy keys',
				appendTo: this.autolockWindow,
				attrs:{
					value: ""
				},
				eventType: 'keyup',
				event: function (ev){
					window.keyManager.updateAction(EnemyAutoLockAction.NAME, ev.code);
				}
			},
			{
				name: 'keyNpc',
				type: 'text',
				labelText: 'npc keys',
				appendTo: this.autolockWindow,
				attrs:{
					value: ""
				},
				eventType: 'keyup',
				event: function (ev){
					window.keyManager.updateAction(NpcAutoLockAction.NAME, ev.code);
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