import uuid from 'uuid';
import Move from './Move';

export default class User {
  _id?: string;

  constructor(
    public name: string = '',
    public coins: number = 100,
    public moves?: Move[]
  ) {}

  public setId?() {
    this._id = uuid();
  }
}
