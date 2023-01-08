export interface Article {
    slug : string,
    title : string,
    subTitle : string,
    summary : string,
    imageUrl: string,
    bannerImageUrl : string,
    changePosition? : Boolean,
    markDownFile : string
}