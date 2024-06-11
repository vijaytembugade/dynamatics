
export type TResultDataType = {
    AuthorWorklog?: AuthorWorklog;
}

export type AuthorWorklog = {
    activityMeta?: ActivityMeta[];
    rows?: Row[];
}

export type ActivityMeta = {
    label?: Label;
    fillColor?: FillColor;
}

export enum FillColor {
    PRReviewedColor = "#C2528B",
    PROpenColor = "#EF6B6B",
    CommitsColor = "#FAC76E",
    PRCommentsColor = "#0396A6",
    IncidentAlertsColor = "#5F50A9",
    PRMergedColor = "#61CDBB",
    IncidentsResolvedColor = "#8F3519",
}

export enum Label {
    Commits = "Commits",
    IncidentAlerts = "Incident Alerts",
    IncidentsResolved = "Incidents Resolved",
    PRComments = "PR Comments",
    PRMerged = "PR Merged",
    PROpen = "PR Open",
    PRReviewed = "PR Reviewed",
    Name = "name"
}

export type Row = {
    name?: string;
    totalActivity?: TotalActivity[];
    dayWiseActivity?: DayWiseActivity[];
    activeDays?: ActiveDays;
}

export type ActiveDays = {
    days?: number;
    isBurnOut?: boolean;
    insight?: string[];
}

export type DayWiseActivity = {
    date?: Date;
    items?: Items;
}

export type Items = {
    children?: Child[];
}

export type Child = {
    count?: string;
    label?: Label;
    fillColor?: FillColor;
}

export type TotalActivity = {
    name?: Label;
    value?: string;
}

export enum TabRoutes {
    users = "users",
    overview = "overview",
    timeline = "timeline"
}

export type GridRow = {
    [key in Label]?: string;
}
