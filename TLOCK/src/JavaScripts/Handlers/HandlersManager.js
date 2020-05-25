class HandlersManager {
  constructor(a) {
    this.handlers = {};
    this._api = a;
  }

  registerEvent(e, h) {
    $(document).on(e, h.handler);
  }

  registerCommand(id, h) {
    this.handlers[id] = h.handler;
  }

  listen() {
    let self = this;
    $(document).on("commandRec", function (e) {
      // let petIds = [9206, 32586, 15389, 13089, 30626];
      //  console.log(e.detail);

      let s = e.detail.split("|");
      let id = parseInt(s[0]);

      // if (petIds.includes(id)){
      //   console.log(e.detail)
      // }

      let cmd = s[1];

      let h = self.handlers[id];
      if (h) {
        h({
          detail: cmd,
          wholeMessage: e.detail
        }, self._api);
      }
      //console.log(e.detail)
    });
  }
}