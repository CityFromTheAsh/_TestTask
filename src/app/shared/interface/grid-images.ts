export interface GridImages {
    pictures: Picture[]
    page: number,
    pageCount: number,
    hasMore: boolean,

}
interface Picture {
    id: string, 
    cropped_picture: string
}
