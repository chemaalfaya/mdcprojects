export class Item {
    constructor(public name: string, public icon: string) { }

    toString(): string {
        return this.name;
    }
}
