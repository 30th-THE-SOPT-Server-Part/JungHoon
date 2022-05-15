import { UserInfo } from "../user/UserInfo";

export interface BlogInfo {
    title: string;
    writer: UserInfo;
    context: string;
}