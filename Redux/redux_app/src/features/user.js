import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import Login from '../components/Login'
const userSlice = createSlice(
    {
        name: "User",
        initialState: { value: { name: "", age: 0, email: "" } },
        reducers: {
            Login: (state, action) => {
                state.value = action.payload;
            },
        }
    })
