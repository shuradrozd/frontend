export class Book {
  constructor(
  public index: number,
  public author: string,
  public name: string,
  public orderDate: string,
  public user: string,
  // public id?: number, //for files storage
  public _id?: number,
  ) {}
}
