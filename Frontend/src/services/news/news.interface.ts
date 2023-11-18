export interface INews {
    count: string
    news: INewsItem[]
}

interface INewsItem {
    title: string
    description: string
    new_url: string
    photo: string
}