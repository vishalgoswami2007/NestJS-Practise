import { IsEmail, IsNotEmpty, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class SignupDto {
  @IsEmail({}, { message: 'Bhai, valid email id dalo!' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @MinLength(6, { message: 'Password kam se kam 6 characters ka hona chahiye' })
  @IsNotEmpty()
  password: string;

  @IsEnum(Role, { message: 'Role sahi select karo, USER ya ADMIN' })
  @IsOptional()
  role?: Role;
}
