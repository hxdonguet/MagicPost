import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const employeeAdapter = createEntityAdapter()
const initialState = employeeAdapter.getInitialState();


export const employeeSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query({
            query: () => '/employees',
            transformResponse: respone => {
                return employeeAdapter.setAll(initialState, respone)
            },
            providesTags: [
                'getEmployee'
            ]
        }),
        createEmployee: builder.mutation({
            query: initEmployee => ({
                url: '/employees',
                method: 'POST',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getEmployee'
            ]
        }),
        updateEmployee: builder.mutation({
            query: initEmployee => ({
                url:`/employees/${initEmployee.id}`,
                method: 'PUT',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getEmployee'
            ]
        }),
        deleteEmployee: builder.mutation({
            query: ({id}) => ({
                url:`/employees/${id}`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: [
                'getEmployee'
            ]
        })


    })
})

export const {
    useGetEmployeesQuery,
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation
} = employeeSlice

export const selectEmployeeResult = employeeSlice.endpoints.getEmployees.select()

const selectEmployeesData = createSelector(
    selectEmployeeResult,
    employeeResult => employeeResult.data
)
export const {
    selectAll: selectAllEmployees,
    selectById: selectEmployeeById,
} = employeeAdapter.getSelectors(state => selectEmployeesData(state) ?? initialState)



// export default employeeSlice.reducer

