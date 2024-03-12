import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class PrefixDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    country: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    code: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: 'El prefijo unión del campo root y de sufijo'})
    prefix: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    idd: {
        root: string;
        suffixes: string[];
    };
}
