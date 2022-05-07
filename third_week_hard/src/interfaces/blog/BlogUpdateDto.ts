import { UserInfo } from "../user/UserInfo";

export interface BlogUpdateDto {
    title?: string;
    context?: string;
    updatedAt: Date;
}