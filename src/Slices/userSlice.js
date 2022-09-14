import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../Services/userAPI";

const initialState = {
  user:[],
  userDetail: [],
  userStatus: null,
  userIsLoading: false,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (groupID) => {
    try {
      const data = await userAPI.getUser(groupID);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const getUserDetail = createAsyncThunk(
  "user/getUserDetail",
  async (account) => {
    try {
      const data = await userAPI.getUserDetail(account);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (info) => {
    try {
      const data = await userAPI.updateUser(info);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (account) => {
    try {
      const data = await userAPI.deleteUser(account);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const addUser = createAsyncThunk(
  "user/addUser",
  async (info) => {
    try {
      const data = await userAPI.addUser(info);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async () => {
    try {
      const data = await userAPI.getUserProfile();
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const removeRegisterCourseProfile = createAsyncThunk(
  "user/removeRegisterCourseProfile",
  async (value) => {
    try {
      const data = await userAPI.removeRegisterCourseProfile(value);
      return data;
    } catch (error) {
      throw error
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserStatus: (state ) => {
      state.userStatus = null;
    },
    resetUserData: (state ) => {
      state.user = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, { payload }) => {
      state.userIsLoading = true;
    });    
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.userIsLoading = false;
      state.user = payload;
    });
    builder.addCase(getUser.rejected, (state, { error }) => {
      state.userIsLoading = false;
      state.user = error;
    });

    builder.addCase(getUserDetail.fulfilled, (state, { payload }) => {
      state.userDetail = payload[0];
    });
    builder.addCase(getUserDetail.rejected, (state, { error }) => {
      state.userDetail = error;
    });

    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.userStatus = 1;
    });
    builder.addCase(updateUser.rejected, (state, { error }) => {
      state.userStatus = 0;
    });

    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      state.userStatus = 1;
    });
    builder.addCase(deleteUser.rejected, (state, { error }) => {
      state.userStatus = 0;
    });

    builder.addCase(addUser.pending, (state, { payload }) => {
      state.userIsLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, { payload }) => {
      state.userIsLoading = false;
      state.userStatus = 1;
    });
    builder.addCase(addUser.rejected, (state, { error }) => {
      state.userIsLoading = false;
      state.userStatus = 0;
    });
    builder.addCase(getUserProfile.pending, (state, { payload }) => {
      state.userIsLoading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.userIsLoading = false;
      state.userDetail = payload;
    });
    builder.addCase(getUserProfile.rejected, (state, { error }) => {
      state.userIsLoading = false;
      state.userDetail = error;
    });

    builder.addCase(removeRegisterCourseProfile.fulfilled, (state, { payload }) => {
      state.userStatus = 1;
    });
    builder.addCase(removeRegisterCourseProfile.rejected, (state, { error }) => {
      state.userStatus = 0;
    });
  },
});

// export actions
export const {resetUserStatus, resetUserData} = userSlice.actions;
// export reducer
export default userSlice.reducer;
