export interface IParameterPossibility {
    possibilityName: string;
    possibilityValue: any;
}

export interface ISearchParameter {
    _id: string; // ObjectId
    parameterName: string;
    parameterGrayText: string;
    parameterHint: string;
    parameterType: string;
    parameterValueFrom: any;
    parameterValueTo: any;
    parameterValue: any;
    parameterPossibilities: IParameterPossibility[];
}

export interface IUserSearchParameter {
    parameter: string; // ObjectId
    valueFrom: number;
    valueTo: number;
}
