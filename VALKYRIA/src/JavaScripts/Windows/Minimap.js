class Minimap {
  constructor(a) {
    this._api = a;
  }

  createWindow() {
    this.minimap = WindowFactory.createWindow({
      width: 320,
      text: "Minimap"
    });

    this.canvas = jQuery("<canvas/>", {
      width: 300,
      height: 150
    });

    this.ctx = this.canvas.get(0).getContext("2d");
    this.canvas.appendTo(this.minimap);

    let self = this;

    this.canvas.click(function (e) {
      let pos = self.minimap.position();
      let x = (e.clientX - pos.left) * (window.b1) - window.b3;
      let y = (e.clientY - pos.top) * (window.b2) - window.b3;
      //Injector.injectScript('document.getElementById("preloader").moveShip(' + x + ',' + y + ');');
    });
  }

  draw() {
    let ct = this.ctx;
    ct.font = "10px Arial";

    ct.clearRect(0, 0, this.canvas.width() + 2, this.canvas.height() + 2);

    ct.strokeStyle = "white";
    ct.lineWidth = 1;
    ct.rect(1, 1, this.canvas.width() - 2, this.canvas.height() - 2);
    ct.stroke();

    ct.fillStyle = 'green';
    this._fillCircle(ct, window.hero.position.x / window.b1, window.hero.position.y / window.b2, 2);

    for (let property in this._api.ships) {
      let ship = this._api.ships[property];

      if (ship == null)
        continue;

      ship.update();
      let pos = ship.position;

      if (ship instanceof Npc)
        ct.fillStyle = "rgb(255, 0, 245)";
      else if (ship instanceof Enemy) {
        ct.fillStyle = "rgb(255, 0, 0)";
        if (ship.cloaked)
          ct.fillText(ship.name + " | Cloaked", pos.x / window.b1 + 1, pos.y / window.b2 + 13);
        else
          ct.fillText(ship.name, pos.x / window.b1 + 1, pos.y / window.b2 + 13);
      } else {
        ct.fillStyle = "rgb(0, 125, 255)";
        ct.fillText(ship.name, pos.x / window.b1 + 1, pos.y / window.b2 + 13);
      }
      this._fillCircle(ct, pos.x / window.b1, pos.y / window.b2, 2);
    }

    if (this._api.battlestation) {
      let bs = this._api.battlestation;

      if (bs.isEnemy && bs.factionId !== 0)
        ct.fillStyle = "rgb(255, 0, 0)";
      else if (bs.factionId === 0)
        ct.fillStyle = "rgb(76, 76, 76)";
      else
        ct.fillStyle = "rgb(0, 255, 0)";


      this._fillCircle(ct, bs.position.x / window.b1, bs.position.y / window.b2, 3);

      if (bs.clanTag !== "")
        ct.fillText("[" + bs.clanTag + "] " + bs.name, bs.position.x / window.b1 - 30, bs.position.y / window.b2 - 8);
      else {
        ct.fillStyle = "white";
        ct.fillText(bs.name, bs.position.x / window.b1 - 20, bs.position.y / window.b2 - 5);
      }

      for (let prop in this._api.battlestation.modules) {
        let mod = this._api.battlestation.modules[prop];
        this._fillCircle(ct, (mod.position.x) / window.b1, mod.position.y / window.b2, 2);
      }
    }

    ct.strokeStyle = "white";
    ct.lineWidth = 1;
    this._api.gates.forEach(gate => {
      let pos = gate.position;
      this._strokeCircle(ct, pos.x / window.b1, pos.y / window.b2, 4);
    });
  }

  _fillCircle(ctx, x, y, r) {
    this._drawCircle(ctx, x, y, r);
    ctx.fill();
  }

  _strokeCircle(ctx, x, y, r) {
    this._drawCircle(ctx, x, y, r);
    ctx.stroke();
  }

  _drawCircle(ctx, x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  }
}