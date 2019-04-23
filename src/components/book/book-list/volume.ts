import { VolumeInfo } from "../book-list-item/volume-info";

export interface Volume {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: VolumeInfo;
}