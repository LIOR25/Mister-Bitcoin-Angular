import uuid from 'uuid';

export default class User {
  _id?: string;

  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = '',
    public coins: number = 100,
    public moves?: []
  ) {}

  public setId?() {
    this._id = uuid();
  }
}
