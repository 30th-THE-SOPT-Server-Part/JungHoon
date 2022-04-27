import { UserInfo } from "../user/UserInfo";
import { BlogInfo } from "./BlogInfo";

export interface BlogCreateDto {
    title: string;
    writer: UserInfo;
    context: string;
    createAt: Date;
}