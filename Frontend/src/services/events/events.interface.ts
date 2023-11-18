export interface IEvents {
    count: number
    news: IEventItemMini[]
}

export interface IEventItem {
    title: string
    description: string
    photo: string
    photo_album_url: string
    documents_url: string
    location: string
    event_date: Date
    social_media_mention: string
    registration_link: string
}

interface IEventItemMini {
    title: string
    photo: string
}
