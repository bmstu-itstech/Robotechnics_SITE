export interface IAchievements {
    count: number
    achievements: IAchievementItem[]
}

interface IAchievementItem {
    title: string
    description: string
    photo: string
    photo_album: string
    media_mention: string
}