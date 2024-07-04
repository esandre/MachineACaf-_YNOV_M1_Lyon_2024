import {Pièce} from "./Pièce";

export class MachineACafé {
    nombreCafésServis: number = 0;
    argentEncaisséEnCentimes: number = 0;

    insérer(pièce: Pièce) {
        if(pièce == Pièce.VingtCentimes) return

        this.nombreCafésServis ++
        this.argentEncaisséEnCentimes += 50
    }
}