import { User } from "./User";

export interface Video {
    id: number;
    name: string;
    description: string;
    tags: string[];
    thumbnailUrl: string;
    owner: User;
}
