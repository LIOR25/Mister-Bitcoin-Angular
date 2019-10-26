import uuid from 'uuid';

export default class Contact {
  _id?: string;

  constructor(
    public name: string = '',
    public email: string = '',
    public phone: string = ''
  ) {}

  public setId?() {
    this._id = uuid();
  }
}
