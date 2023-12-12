import createAsyncSlice from './helper/createAsyncSlice';

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    pages: 0,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload); 
    },
  },
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});



const { addPhotos } = photos.actions;
export const fetchPhotos = photos.asyncAction;

export const loadingNewPhotos = (page = 1) => async (dispatch) => {
    const { payload } = await dispatch(fetchPhotos(page));  
    console.log(payload);
    dispatch(addPhotos(payload));
  };

export default photos.reducer;
