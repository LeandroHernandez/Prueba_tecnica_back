import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IDocumentType } from 'src/common/interfaces/document-type.interface';
import { IGender } from 'src/common/interfaces/gender.interface';
import { IHobbie } from 'src/common/interfaces/hobbie.interface';

export class UserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documentTypeId: IDocumentType;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documentNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  names: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  surnames: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  username: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsOptional()
  position: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  genderId: IGender;
  @ApiProperty()
  @IsOptional()
  community: string;
  @ApiProperty()
  @IsOptional()
  companyWhereWork: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  division: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  country: string;
  @ApiProperty()
  @IsOptional()
  hobbies?: IHobbie[];
}
