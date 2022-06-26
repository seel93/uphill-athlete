export interface AvyReport {
    RegId:           number;
    RegionId:        number;
    RegionName:      string;
    RegionTypeId:    number;
    RegionTypeName:  string;
    DangerLevel:     string;
    ValidFrom:       Date;
    ValidTo:         Date;
    NextWarningTime: Date;
    PublishTime:     Date;
    MainText:        string;
    LangKey:         number;
}
