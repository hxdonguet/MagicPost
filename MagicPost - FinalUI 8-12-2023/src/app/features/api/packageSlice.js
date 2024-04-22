import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


const packageAdapter = createEntityAdapter()
const initialState = packageAdapter.getInitialState();

export const packageSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllPackages : builder.query({
            query: () => '/packages',
            transformResponse: response => {
                console.log(response)
                return packageAdapter.setAll(initialState, response);
            },
            providesTags: [
                'getPackages'
            ]
        }),
        getPackageById: builder.query({
            query: id => `/packages/?id=${id}`,
            transformResponse: response => {
                return packageAdapter.setAll(initialState, response);
            },
            providesTags: [
                'getPackages'
            ]
        }),
        getPackageByStatus:builder.query({
            query: status => `/packages/?status=${status}`,
            transformResponse: response => {
                return packageAdapter.setAll(initialState, response);
            },
            providesTags: [
                'getPackages'
            ]
        }),
        createPackage: builder.mutation({
            query: iniitPackage => ({
                url: '/packages',
                method: 'POST',
                body: {
                    ...iniitPackage,
                }
            }),
            invalidatesTags: [
                'getPackages'
            ]
        }),
        updatePackage: builder.mutation({
            query: iniitPackage => ({
                url: '/packages',
                method: 'PUT',
                body: {
                    ...iniitPackage,
                }
            }),
            invalidatesTags: [
                'getPackages'
            ]
        }),
        deletePackage: builder.mutation({
            query: ({id}) => ({
                url: '/packages',
                method: 'DELETE',
                body: {id},
            }),
            invalidatesTags: [
                'getPackages'
            ]
        })
    })
})

export const {
    useGetAllPackagesQuery,
    useGetPackageByIdQuery,
    useGetPackageByStatusQuery,
    useCreatePackageMutation,
    useUpdatePackageMutation,
    useDeletePackageMutation
} = packageSlice


export const selectPackageResult = packageSlice.endpoints.getAllPackages.select()

const selectPackageData = createSelector(
    selectPackageResult,
    packageResult => packageResult.data
)
export const {
    selectAll : selectAllPackages,
    selectById : selectPackagesById,
} = packageAdapter.getSelectors(state => selectPackageData(state) ?? initialState)
