import { apiSlice } from "../api/apiSlice";
import { logOut } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        logOut: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(logOut())
                    dispatch(apiSlice.util.resetApiState())
                } catch(err){
                    console.log(err)
                }
            }
        }),
        refresh: builder.mutation({
            query: ()=> ({
                url: '/auth/refresh',
                method: 'GET'
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogOutMutation,
    useRefreshMutation
} = authApiSlice