export class User {
    id: number;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    email: string;
}
export class IDataResponse {
    code: number;
    data: any;
    messages?: string;
}
