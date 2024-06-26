import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Должно быть строкой' })
  firstName: string;
  @IsString({ message: 'Должно быть строкой' })
  username: string;
  @IsString({ message: 'Должно быть строкой' })
  email: string;
  @IsString({ message: 'Должно быть строкой' })
  password: string;
}

export class UpdateUserDTO {
  @IsString({ message: 'Должно быть строкой' })
  firstName: string;
  @IsString({ message: 'Должно быть строкой' })
  username: string;
  @IsString({ message: 'Должно быть строкой' })
  email: string;
}
