import { Controller, Get, Param } from '@nestjs/common';
import { CalcularService } from './calcular.service';

@Controller('calcular')
export class CalcularController {

    constructor(private service:CalcularService){

    }
    
    @Get(':operacion/:a/:b')
    ejecutar(@Param('operacion') operacion,@Param('a') a, @Param('b')b):string{
        let num1 = parseInt(a)
        let num2 = parseInt(b)
        
        return this.service.getRestultado( operacion, num1, num2 );
    }
}