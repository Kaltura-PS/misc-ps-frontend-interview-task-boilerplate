import {Video} from "../types/Video";
import {FC} from "react";

export interface Props {
    videos: Video[];
}

export const VideoList: FC<Props> = ({ videos }) => {
    return <div>TODO...</div>;
};
