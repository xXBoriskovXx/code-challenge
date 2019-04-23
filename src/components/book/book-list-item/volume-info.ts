export interface VolumeInfo {
	title: string;
	authors: string[];
	publishedDate: string;
	description: string;
	pageCount: number;
	printType: string;
	categories: string[];
	averageRating: number,
	ratingsCount: number,
	imageLinks: {
		smallThumbnail: string,
		thumbnail: string
	};
	previewLink: string;
	infoLink: string;
}