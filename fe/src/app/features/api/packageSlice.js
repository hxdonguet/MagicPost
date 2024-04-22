import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";


const packageAdapter = createEntityAdapter()
const initialState = packageAdapter.getInitialState();

export const packageSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllPackages : builder.query({
            query: () => '/packages/getAll',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedPackages = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return packageAdapter.setAll(initialState, loadedPackages);
            },
            providesTags: [
                'getPackages'
            ]
        }),
        getPackageById: builder.query({
            query: id => `/search?id=${id}`,
            transformResponse: response => {
                return packageAdapter.setAll(initialState, response);
            },
            providesTags: [
                'getPackagesById'
            ]
        }),
        getPackageByCurrentLocationId: builder.query({
            query: id => `/packages?currentLocationId=${id}`,
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedPackages = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return packageAdapter.setAll(initialState, loadedPackages);
            },
            providesTags: [
                'getPackagesByCurrentLocationId'
            ]
        }),

        getPackageByNextLocationId: builder.query({
            query: id => `/packages?nextLocationId=${id}`,
            transformResponse: responseData => {
                const loadedPackages = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return packageAdapter.setAll(initialState, loadedPackages);
            },
            providesTags: [
                'getPackagesByNextLocationId'
            ]
        }),
        getPackageByStatus:builder.query({
            query: status => `/packages/?status=${status}`,
            transformResponse: response => {
                return packageAdapter.setAll(initialState, response);
            },
            providesTags: [
                'getPackagesByStatus'
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
                // 'getPackages',
                'getPackagesByCurrentLocationId'
            ]
        }),
        updatePackage: builder.mutation({
            query: initPackage => ({
                url: `/packages/${initPackage.id}`,
                method: 'PUT',
                body: {
                    ...initPackage,
                }
            }),
            invalidatesTags: [
                'getPackages',
                'getPackagesByCurrentLocationId',
            ]
        }),
        receivePackage: builder.mutation({
            query: initPackage => ({
                url: `/packages/receive/${initPackage._id}`,
                method: 'PUT',
                body: {
                    ...initPackage,
                }
            }),
            invalidatesTags: [
                'getPackagesByNextLocationId',
                'getPackagesByCurrentLocationId',
            ]
        }),
        deletePackage: builder.mutation({
            query: ({id}) => ({
                url: `/packages/${id}`,
                method: 'DELETE',
                body: {id},
            }),
            invalidatesTags: [
                'getPackages',
                'getPackagesByCurrentLocationId'
            ]
        }),
        searchPackage: builder.mutation({
            query: ({id}) => ({
                url: `/search?id=${id}`,
                method: 'POST',
                body: {id},
            }),
            transformResponse: responseData => {
                const loadedPackages = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return packageAdapter.setAll(initialState, loadedPackages);
            },
            invalidatesTags: [
                
            ]
        })
    })
})

export const {
    useGetAllPackagesQuery,
    useGetPackageByIdQuery,
    useGetPackageByStatusQuery,
    useGetPackageByCurrentLocationIdQuery,
    useGetPackageByNextLocationIdQuery,
    useCreatePackageMutation,
    useUpdatePackageMutation,
    useDeletePackageMutation,
    useReceivePackageMutation,
    useSearchPackageMutation
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
