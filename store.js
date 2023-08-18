// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  personal: {},
  educations: [{}],
  jobs: [{}],
  skills: [{}],
  languages: [{}],
  hobbys: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updatePersonal: (state, action) => {
      state.personal = action.payload;
    },
    updateEducations: (state, action) => {
      state.educations = action.payload;
    },
    updateJobs: (state, action) => {
      state.jobs = action.payload;
    },
    updateSkills: (state, action) => {
      state.skills = action.payload;
    },
    updateLanguages: (state, action) => {
      state.languages = action.payload;
    },
    updateHobbys: (state, action) => {
      state.hobbys = action.payload;
    },
    clearAllData: (state) => {
      return initialState
    },
  },
});

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const {
  updatePersonal,
  updateEducations,
  updateJobs,
  updateSkills,
  updateLanguages,
  updateHobbys,
  clearAllData,
} = dataSlice.actions;

export default store;
