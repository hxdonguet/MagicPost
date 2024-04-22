import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const employeeAdapter = createEntityAdapter()


const initialState = employeeAdapter.getInitialState();


export const transactionPointSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllTransactionPoint: builder.query({
            query: () => '/transaction',
            transformResponse: responeData => {
                const loadedWarehouse = responeData.map(e => {
                    e.id = e._id
                    return e
                })
                return employeeAdapter.setAll(initialState, loadedWarehouse)
            },
            providesTags: [
                'getAllTransactionPoint'
            ]
        }),
        getTransactionPointById: builder.query({
            query: ({id}) => `/transaction/${id}`,
            transformResponse: responeData => {
                const loadedWarehouse = responeData.map(e => {
                    e.id = e._id
                    return e
                })
                return employeeAdapter.setAll(initialState, loadedWarehouse)
            },
            providesTags: [
                'getTransactionPointById'
            ]
        }),
        createTransactionPoint: builder.mutation({
            query: initEmployee => ({
                url: '/transaction',
                method: 'POST',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getAllTransactionPoint'
            ]
        }),
        updateTransactionPoint: builder.mutation({
            query: initEmployee => ({
                url:`/transaction/${initEmployee.id}`,
                method: 'PUT',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getAllTransactionPoint',
                'getEmployeesByLocationId'
            ],
        }),
        deleteTransactionPoint: builder.mutation({
            query: ({id}) => ({
                url:`/transaction/${id}`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: [
                'getAllTransactionPoint'
            ]
        })


    })
})

export const {
    useGetAllTransactionPointQuery,
    useGetTransactionPointByIdQuery,
    useCreateTransactionPointMutation,
    useUpdateTransactionPointMutation,
    useDeleteTransactionPointMutation
} = transactionPointSlice

export const selectTransactionPointResult = transactionPointSlice.endpoints.getAllTransactionPoint.select()

const selectTransactionPointData = createSelector(
    selectTransactionPointResult,
    transactionPointResult => transactionPointResult.data
)
export const {
    selectAll: selectAllTransactionPoint,
    selectById: selectTransactionPointById,
} = employeeAdapter.getSelectors(state => selectTransactionPointData(state) ?? initialState)



// export default employeeSlice.reducer

