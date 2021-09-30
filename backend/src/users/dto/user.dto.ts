import {
    IsString, IsOptional, IsNumber, IsEnum, IsBoolean, IsObject, ValidateNested, IsInt
} from 'class-validator';

import {Expose, Transform, Type} from 'class-transformer';

export enum Education {
    SECONDARY,
    SECONDARY_SPECIAL,
    HIGHER
}

export class PersonDataFormat {
    @IsNumber()
    @IsOptional()
    @Expose()
    working_years?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    salary_revision_frequency?: number;

    @IsNumber()
    @IsOptional()
    @Expose()
    age?: number;

    @IsString()
    @IsEnum(Education)
    @IsOptional()
    @Expose()
    education?: Education;

    @IsNumber()
    @IsOptional()
    @Expose()
    salary?: number;

    @IsBoolean()
    @IsOptional()
    @Expose()
    have_children?: boolean;

    @IsBoolean()
    @IsOptional()
    @Expose()
    have_mentor?: boolean
}

export class StaffQuery {
    @IsString()
    @IsOptional()
    @Expose()
    data_from?: Date;

    @IsString()
    @IsOptional()
    @Expose()
    data_to?: Date;

    @IsObject()
    @Expose()
    @ValidateNested()
    @Type(() => PersonDataFormat)
    filter: PersonDataFormat;

    @IsInt()
    @IsOptional()
    @Expose()
    take: number;

    @IsInt()
    @IsOptional()
    @Expose()
    skip: number;
}

export class StaffResponse {
    data_from?: Date;
    data_to?: Date;
    filter: PersonDataFormat;
    staff: PersonDataFormat[];
}