export interface ApiResponse<T = unknown> {
    status : number
    success : boolean
    message : string
    data? : T
    error? : string
}