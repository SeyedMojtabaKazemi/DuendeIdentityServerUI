import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../../Services/httpConfig"

export const createUser = createAsyncThunk(
    'user/createUser',
    async (data) => {
      try {
        const response = await API.post(`Identity/CreateUser`,data)
          .then((res) => {
            if (res.status === 200) {
              console.log('User created successfylly')
              return res.data
            }
          })
          .catch((error) => {
            console.log(error)
          })
        return response
      } catch (error) {
        console.log(error)
      }
    }
  )

  export const changeSecurityStamp = createAsyncThunk(
    'user/changeSecurityStamp',
    async () => {
      try {
        const response = await API.get(`Identity/UpdateSecurityStamp`)
          .then((res) => {
            if (res.status === 200) {
              console.log('change SecurityStamp successfylly')
              return res.data
            }
          })
          .catch((error) => {
            console.log(error)
          })
        return response
      } catch (error) {
        console.log(error)
      }
    }
  )

  export const initialState = {
    create: {
        loading: false
    },
    changeSecurityStamp: {
        loading: false
    },

  }


  export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.create.loading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.create.loading = false
            })
            .addCase(createUser.rejected, (state) => {
                state.create.loading = false
            })

        builder
            .addCase(createUser.pending, (state) => {
                state.changeSecurityStamp.loading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.changeSecurityStamp.loading = false
            })
            .addCase(createUser.rejected, (state) => {
                state.changeSecurityStamp.loading = false
            })
    }

})


export default userSlice.reducer