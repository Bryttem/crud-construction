import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateMateDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  nombre: string;

  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @IsNotEmpty()
  @IsString()
  categoria: string;

}
