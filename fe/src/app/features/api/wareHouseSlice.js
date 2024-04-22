import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const employeeAdapter = createEntityAdapter()


const initialState = employeeAdapter.getInitialState();


export const warehouseSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllWarehouse: builder.query({
            query: () => '/warehouse',
            transformResponse: responeData => {
                const loadedWarehouse = responeData.map(e => {
                    e.id = e._id
                    return e
                })
                return employeeAdapter.setAll(initialState, loadedWarehouse)
            },
            providesTags: [
                'getAllWarehouse'
            ]
        }),

        createWarehouse: builder.mutation({
            query: initEmployee => ({
                url: '/warehouse',
                method: 'POST',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getAllWarehouse'
            ]
        }),
        updateWarehouse: builder.mutation({
            query: initEmployee => ({
                url:`/warehouse/${initEmployee.id}`,
                method: 'PUT',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getAllWarehouse',
                'getEmployeesByLocationId'
            ]
        }),
        deleteWarehouse: builder.mutation({
            query: ({id}) => ({
                url:`/warehouse/${id}`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: [
                'getAllWarehouse'
            ]
        })


    })
})

export const {
    useGetAllWarehouseQuery,
    useCreateWarehouseMutation,
    useUpdateWarehouseMutation,
    useDeleteWarehouseMutation
} = warehouseSlice

export const selectWarehouseResult = warehouseSlice.endpoints.getAllWarehouse.select()

const selectWarehouseData = createSelector(
    selectWarehouseResult,
    warehouseResult => warehouseResult.data
)
export const {
    selectAll: selectAllWarehouse,
    selectById: selectWarehouseById,
} = employeeAdapter.getSelectors(state => selectWarehouseData(state) ?? initialState)



// export default employeeSlice.reducer

