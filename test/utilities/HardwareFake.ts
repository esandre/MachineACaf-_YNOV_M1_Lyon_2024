import {ButtonCodes, HardwareInterface} from "../../src/hardware/hardware.interface";
import {Pièce} from "../../src/Pièce";
import { TypeDeCafé } from "../../src/TypeDeCafé";

export class HardwareFake implements HardwareInterface {
    FlushStoredMoney(): void {
        throw new Error("Method not implemented.");
    }
    CollectStoredMoney(): void {
        throw new Error("Method not implemented.");
    }
    IsCupPresent(): boolean {
        throw new Error("Method not implemented.");
    }
    ProvideCup(): void {
        throw new Error("Method not implemented.");
    }
    RegisterButtonPressedCallback(callback: (buttonCode: ButtonCodes) => void): void {
        throw new Error("Method not implemented.");
    }
    TryPullWater(): boolean {
        throw new Error("Method not implemented.");
    }
    PourMilk(): boolean {
        throw new Error("Method not implemented.");
    }
    PourWater(): boolean {
        throw new Error("Method not implemented.");
    }
    PourSugar(): boolean {
        throw new Error("Method not implemented.");
    }

    private _moneyInsertedCallback: (coinValue: number) => void = () => {};
    private _typeCoffeeCallback: (type: TypeDeCafé) => void = () => {}
    private _invocationsMakeACoffee: number = 0;

    MakeACoffee(): boolean {
        this._invocationsMakeACoffee ++;
        return true;
    }

    RegisterMoneyInsertedCallback(callback: (coinValue: number) => void): void {
        this._moneyInsertedCallback = callback;
    }

    RegisterTypeOfCoffeeCallback(callback: (type: TypeDeCafé) => void): void {
        this._typeCoffeeCallback = callback;
    }

    public SimulerInsertionPièce(pièce: Pièce): void {
        this._moneyInsertedCallback(pièce.getMontant())
    }

    public SimulerSélectionCafé(type: TypeDeCafé): void {
        this._typeCoffeeCallback(type)
    }

    public CountInvocationsMakeACoffee() {
        return this._invocationsMakeACoffee;
    }
}