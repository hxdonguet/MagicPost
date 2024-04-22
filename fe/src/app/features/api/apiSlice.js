import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { setCrendential, logOut } from '../auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const token = getState().auth.token
        if(token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if(result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        const refreshResult = await baseQuery('/auth/refresh',api,extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data) {
            const user = api.getState.auth.user;
            //store the new token
            api.dispatch(setCrendential({...refreshResult.data,user}))
            //retry the orginal query with new access token
            result  = await baseQuery(args, api, extraOptions)

        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    // reducerPath:'api',
    baseQuery:baseQueryWithReauth,
    endpoints: (builder) => ({})
})

