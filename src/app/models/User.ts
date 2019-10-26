export default class User {

      _id?: string;


       constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public coins: number = 100,
    public moves: []
  ) {}


   public setId?() {
    this._id = User._makeId();
  }

  private static _makeId(length = 10) {
    let txt = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}

