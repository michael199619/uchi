import {
    IsOptional,
    IsString
} from 'class-validator';

import {Expose, Transform, Type} from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class CategoriesDto {
    @ApiProperty({type: 'string'})
    @IsString()
    @Expose()
    name: string;

    @ApiProperty({type: 'string', isArray: true})
    @IsString({each: true})
    @IsOptional()
    @Expose()
    tags: string[];

    @ApiProperty({type: 'string'})
    @IsString()
    @IsOptional()
    @Expose()
    fileType?: string;

    @ApiProperty({type: 'string'})
    @IsString()
    @IsOptional()
    @Expose()
    searchType?: string;
}