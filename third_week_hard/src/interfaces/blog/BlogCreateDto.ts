import { UserInfo } from "../user/UserInfo";

export interface BlogCreateDto {
    title: string;
    writer: UserInfo;
    context: string;
}