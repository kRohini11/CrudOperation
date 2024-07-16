
import { userList } from "./Data";
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            const updateusr = state.find(user => user.id == id);
            if (updateusr) {
                updateusr.name = name
                updateusr.email = email
            }
        },
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const deleteusr = state.find(user => user.id == id)
            if (deleteusr) {
                return state.filter(f => f.id !== id)
            }
        }

    }
})

export const { addUser, updateUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;