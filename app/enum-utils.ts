export class EnumUtils {  
	type EnumType = { [key : number]: string };

  private _elements: (number | string)[];
  private _keys: string[];
  private _values: number[];

  constructor(enumParam: EnumType) {
    this._elements = Object.keys(enumParam).map(s => enumParam[s]);
    this._keys = this._elements.filter(s => typeof s === 'string') as string[];
    this._values = this._elements.filter(s => typeof s === 'number') as number[];
  }

  public getFirstElement(): number {
    return this._values[0];
  }

  public getLastElement(): number {
    return this._values[this._values.length - 1];
  }

  public getNextElement(currentElement: number): number {
    let currentIndex: number = this._values.indexOf(currentElement);
    if ( currentIndex === this._values.length - 1) {
      throw new RangeError('The current element is the last element of the Enum.');
    }
    if (currentIndex === -1) {
      throw new Error('Current element of Enum not found.');
    }
    return this._values[++currentIndex];
  }

  public getPreviousElement(currentElement: number): number {
    let currentIndex: number = this._values.indexOf(currentElement);
    if ( currentIndex === 0) {
      throw new RangeError('The current element is the first element of the Enum.');
    }
    if (currentIndex === -1) {
      throw new Error('Current element of Enum not found.');
    }
    return this._values[--currentIndex];
  }
}
