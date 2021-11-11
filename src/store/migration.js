import { CACHE_INITIAL_STATE } from '../reducers/cache'
export default (state) => {
  if (!state) {
    return Promise.resolve({});
  }
  return Promise.resolve({
    ...state,
    cache: state.cache ? state.cache : CACHE_INITIAL_STATE,
    videoupload: {
      ...state.videoupload,
      coverToUpload: state?.videoupload?.coverToUpload || '',
      coverPhoto: state?.videoupload?.coverPhoto || '',
      resourceToDelete: state?.videoupload?.resourceToDelete || [],
      allCoverPhotos: state?.videoupload?.allCoverPhotos || []
    }
  });
}

export const PERSIST_VERSION = 2;