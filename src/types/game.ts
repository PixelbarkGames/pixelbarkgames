export default interface Game {
    id: string;
    title: string;
    tagline: string;
    description: string;
    price: string;
    releaseDate: Date;
    platforms: string[];
    thumbnailImageUrl: string;
}