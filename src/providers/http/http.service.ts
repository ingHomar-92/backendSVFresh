import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomService {

    constructor( private readonly httpService: HttpService){}

    public async lotesRecepcionAll(){
        try {
            const response = await firstValueFrom(
                this.httpService.get('https://tciconsultoria.com.mx/app/SV%20Fresh%20Avocado/Apis/DoQuery/Compras/detalle.php?related_compra=5691')
            );

            return response.data;
        } catch (error) {
            console.log(error);
            
        }
    }

    
}
