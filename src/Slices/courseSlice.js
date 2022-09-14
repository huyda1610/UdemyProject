import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseAPI from "../Services/courseAPI";

const initialState = {
  course:[],
  courseList : [],
  courseDetail: [],
  courseIsLoading : false,
  courseListIsLoading: false,
  courseRegisterStatus: null,
};

export const getCourse = createAsyncThunk(
  "course/getCourse",
  async () => {
    try {
      const data = await courseAPI.getCourse();
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const getCourseList = createAsyncThunk(
  "course/getCourseList",
  async () => {
    try {
      const data = await courseAPI.getCourseList();
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const getCourseByCategory = createAsyncThunk(
  "course/getCourseByCategory",
  async (category) => {
    try {
      const data = await courseAPI.getCourseByCategory(category);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const adminUpdateCourse = createAsyncThunk(
  "course/adminUpdateCourse",
  async (course) => {
    try {
      const data = await courseAPI.adminUpdateCourse(course);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const adminAddCourse = createAsyncThunk(
  "course/adminAddCourse",
  async (course) => {
    try {
      const data = await courseAPI.adminAddCourse(course);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const registerCourse = createAsyncThunk(
  "course/registerCourse",
  async (value) => {
    try {
      const data = await courseAPI.registerCourse(value);
      return data;
    } catch (error) {
      throw error
    }
  }
);

export const adminDeleteCourse = createAsyncThunk(
  "course/adminDeleteCourse",
  async (value) => {
    try {
      const data = await courseAPI.adminDeleteCourse(value);
      return data;
    } catch (error) {
      throw error
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    resetCourseRegisterStatus: (state ) => {
      state.courseRegisterStatus = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCourse.pending, (state, { payload }) => {
      state.courseIsLoading = true;
    });
    builder.addCase(getCourse.fulfilled, (state, { payload }) => {
      state.courseIsLoading = false;
      state.course = payload;
    });
    builder.addCase(getCourse.rejected, (state, { error }) => {
      state.courseIsLoading = true;
      state.course = error;
    });

    builder.addCase(getCourseList.fulfilled, (state, { payload }) => {
      state.courseListIsLoading = true;
      state.courseList = payload;
    });
    builder.addCase(getCourseList.rejected, (state, { error }) => {
      state.courseListIsLoading = false;
      state.courseList = error;
    });

    builder.addCase(getCourseByCategory.pending, (state, { payload }) => {
      state.courseIsLoading = true;
    });
    builder.addCase(getCourseByCategory.fulfilled, (state, { payload }) => {
      state.courseIsLoading = false;
      state.courseDetail = payload;
    });
    builder.addCase(getCourseByCategory.rejected, (state, { error }) => {
      state.courseIsLoading = true;
      state.courseDetail = error;
    });

    builder.addCase(adminAddCourse.fulfilled, (state, { payload }) => {
      state.courseRegisterStatus = "success";
    });
    builder.addCase(adminAddCourse.rejected, (state, { error }) => {
      state.courseRegisterStatus = "failed";
    });

    builder.addCase(registerCourse.fulfilled, (state, { payload }) => {
      state.courseRegisterStatus = "success";
    });
    builder.addCase(registerCourse.rejected, (state, { error }) => {
      state.courseRegisterStatus = "failed";
    });

    builder.addCase(adminDeleteCourse.fulfilled, (state, { payload }) => {
      state.courseRegisterStatus = "success";
    });
    builder.addCase(adminDeleteCourse.rejected, (state, { error }) => {
      state.courseRegisterStatus = "failed";
    });

    builder.addCase(adminUpdateCourse.fulfilled, (state, { payload }) => {
      state.courseRegisterStatus = "success";
    });
    builder.addCase(adminUpdateCourse.rejected, (state, { error }) => {
      state.courseRegisterStatus = "failed";
    });
  },
});

// export actions
export const {resetCourseRegisterStatus} = courseSlice.actions;
// export reducer
export default courseSlice.reducer;
