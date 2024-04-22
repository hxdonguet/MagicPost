import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { getRoles } from "@testing-library/react";

const employeeAdapter = createEntityAdapter()


const initialState = employeeAdapter.getInitialState();


export const employeeSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getEmployees: builder.query({
            query: () => '/employees/getAll',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedEmployees = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return employeeAdapter.setAll(initialState, loadedEmployees)
            },
            providesTags: [
                'getEmployee'
            ]
        }),
        getEmployeesByLocationId: builder.query({
            query: ({ id, role }) => {
                return `/employees?locationId=${id}&role=${role}`
            },
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedEmployees = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return employeeAdapter.setAll(initialState, loadedEmployees)
            },
            providesTags: [
                'getEmployeesByLocationId'
            ]
        }),

        getEmployeesById: builder.query({
            query: ({id}) => {
                return `/employees/profile?id=${id}`
            },
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedEmployees = responseData.map(e => {
                    e.id = e._id
                    return e
                });
                return employeeAdapter.setAll(initialState, loadedEmployees)
            },
            providesTags: [
                'getEmployeesById'
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
                'getEmployee',
                'getEmployeesByLocationId'
            ]
        }),
        updateEmployee: builder.mutation({
            query: initEmployee => ({
                url: `/employees/${initEmployee.id}`,
                method: 'PUT',
                body: {
                    ...initEmployee,
                }
            }),
            invalidatesTags: [
                'getEmployee',
                'getEmployeesByLocationId'
            ]
        }),
        deleteEmployee: builder.mutation({
            query: ({ id }) => ({
                url: `/employees/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: [
                'getEmployee',
                'getEmployeesByLocationId'
            ]
        }),
        changePassword: builder.mutation({
            query: (employee) => ({
                url: `/employees/changePass/${employee.id}`,
                method: 'POST',
                body: { ...employee }
            }),
            invalidatesTags: [
                'getEmployee',
                'getEmployeesByLocationId'
            ]
        }),
        
        
    })
})

export const {
    useGetEmployeesQuery,
    useGetEmployeesByLocationIdQuery,
    useGetEmployeesByIdQuery,
    useCreateEmployeeMutation,
    useUpdateEmployeeMutation,
    useDeleteEmployeeMutation,
    useChangePasswordMutation
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

