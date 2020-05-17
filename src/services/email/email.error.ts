export class InvalidURL extends Error {
  constructor(public message: string) {
    super(message);
    this.name = 'InvalidURL';
  }
}

export default InvalidURL;
