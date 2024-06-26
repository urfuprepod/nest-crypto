import { IsString } from "class-validator";

export class WatchListDTO {
    
    @IsString()
    assetId: string;
    @IsString()
    name: string;
}