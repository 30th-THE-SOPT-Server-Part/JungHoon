import { ReviewInfo } from "../review/ReviewInfo";

export interface ReviewsResponseDto {
    reviews: ReviewInfo[];
    lastPage: number;
}