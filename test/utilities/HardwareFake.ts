import {HardwareInterface} from "../../src/hardware/hardware.interface";
import {Pièce} from "../../src/Pièce";

export class HardwareFake implements HardwareInterface {
    private _moneyInsertedCallback: (coinValue: number) => void = () => {};

    MakeACoffee(): boolean {
        throw new Error("Method not implemented.");
    }

    RegisterMoneyInsertedCallback(callback: (coinValue: number) => void): void {
        this._moneyInsertedCallback = callback;
    }

    public SimulerInsertionPièce(pièce: Pièce): void {
        this._moneyInsertedCallback(pièce.getMontant())
    }
}