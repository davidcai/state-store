interface IDoable {
  canDo: boolean;
}

class Doable implements IDoable {
  canDo: boolean;

  constructor(canDo: boolean) {
    this.canDo = canDo;
  }

  doIt() {
    if (this.canDo) {
      // eslint-disable-next-line
      console.log("Did it");
    } else {
      // eslint-disable-next-line
      console.log("Can't do");
    }
  }
}

export default new Doable(true);
