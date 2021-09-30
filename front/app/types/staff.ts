export enum Education {
    SECONDARY,
    SECONDARY_SPECIAL,
    HIGHER
}

export interface PersonDataFormat {
    working_years?: number,
    salary_revision_frequency?: number,
    age?: number,
    education?: Education,
    salary?: number,
    have_children?: boolean,
    have_mentor?: boolean
}

export interface StaffQuery {
    data_from?: Date,
    data_to?: Date,
    filter: PersonDataFormat
}

export interface StaffResponse {
    data_from?: Date,
    data_to?: Date,
    filter: PersonDataFormat,
    staff: PersonDataFormat[]
}

export interface ChartDataFormat {
    label: string
    data: number[],
    type: string
}