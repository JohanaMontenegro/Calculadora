import { Injectable } from '@nestjs/common';

@Injectable()
export class CalcularService {

    public getRestultado(operacion:string, num1:number, num2: number):string{
        let resultado = null;

        switch (operacion) {
            case 'sumar':
                resultado = { "resultado": `${num1 + num2}` };
                break;

            case 'restar':
                resultado = { "resultado": `${num1 - num2}` };
                break;

            case 'multiplicar':
                resultado = { "resultado": `${num1 * num2}` };
                break;
            case 'dividir':
                if(num2== 0){
                    resultado = { "resultado": ' Math Error' };
                }
                else{
                    resultado = { "resultado": `${num1 / num2}` };
                }
                
                break;
        }
        return resultado;
    }
}
