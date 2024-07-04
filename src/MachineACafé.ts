import {Pièce} from "./Pièce";
import {HardwareFake} from "../test/utilities/HardwareFake";
import {HardwareInterface} from "./hardware/hardware.interface";

export class MachineACafé {
    constructor(hardware: HardwareInterface) {
        hardware.RegisterMoneyInsertedCallback((montant: number) => {
            this.insérer(Pièce.Parse(montant))
        })
    }

    private static readonly PrixDuCafé = Pièce.CinquanteCentimes;

    nombreCafésServis: number = 0;
    argentEncaisséEnCentimes: number = 0;

    public insérer(pièce: Pièce) {
        if(pièce.EstInférieureA(MachineACafé.PrixDuCafé)) return

        this.nombreCafésServis ++
        this.argentEncaisséEnCentimes += 50
    }
}