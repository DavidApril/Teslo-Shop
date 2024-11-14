import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
    uniqueItems: true,
  })
  @IsEmail()
  @IsString()
  email: string;

  @ApiProperty({
    description:
      'User password - must contain uppercase, lowercase, and number',
    example: 'Abc123456',
    minLength: 6,
    maxLength: 50,
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  fullName: string;
}