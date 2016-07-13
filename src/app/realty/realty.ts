export interface IRealty {
    booliId: number,
    floor: number,
    url: string,
    duration?: number,
    rooms: number,
    source?: {
        url: string,
        type: string,
        name: string
    }
    published?: string,
    rent: number,
    objectType?: string,
    livingArea: number,
    constructionYear?: number,
    location: {
        position: {
            latitude: number,
            longitude: number,
        }
        region?: {},
        namedAreas?: {},
        address: {
            streetAddress: string
        }
    }
    listPrice: number,
}