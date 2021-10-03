import {
    IsInt, IsNumber,
    IsOptional,
    IsString
} from 'class-validator';

import {Expose, Transform, Type} from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class FindDto {
    @ApiProperty({type: 'string'})
    @IsString()
    @IsOptional()
    @Expose()
    q: string;

    @ApiProperty({type: 'string', isArray: true})
    @IsString({each: true})
    @IsOptional()
    @Expose()
    categoriesIds: number[];
}