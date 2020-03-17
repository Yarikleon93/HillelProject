import { Animal } from './animal.js';

export class Dog extends Animal {
    color = 'brown';
    phase = Math.random() * 1500;
    pixels = [
        { x: -2, y: -2 },
        { x: -3, y: -1 },
        { x: -2, y: -2 },
        { x: -2, y: -1 },
        { x: -1, y: -3 },
        { x: -1, y: -2 },
        { x: -1, y: -1 },
        { x: -1, y: 0 },
        { x: -1, y: 1 },
        { x: -1, y: 2 },
        { x: 0, y: -1 },
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 1, y: 0 },
        { x: 2, y: -1 },
        { x: 2, y: 0 },
        { x: 3, y: -1 },
        { x: 3, y: 0 },
        { x: 3, y: 1 },
        { x: 3, y: 2 }
    ];

    move = function() {
        this._x = this._x + Math.sin((Math.PI * ((Date.now() + this.phase) % 2000)) / 1000);
        this._y = this._y + Math.cos((Math.PI * ((Date.now() + this.phase) % 4000)) / 2000);
    };
}
