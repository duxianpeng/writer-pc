const CHECKING_FOR_UPDATE = 'CHECKING_FOR_UPDATE';
const UPDATE_AVAILABLE = 'UPDATE_AVAILABLE';
const UPDATE_DOWNLOADED = 'UPDATE_DOWNLOADED';
const UPDATE_ERROR = 'UPDATE_ERROR';
const UPDATE_NOT_AVAILABLE = 'UPDATE_NOT_AVAILABLE';




export function checkingForUpdate() {
    return {
      type: CHECKING_FOR_UPDATE,
    };
  }
  
  export function updateAvailable() {
    return {
      type: UPDATE_AVAILABLE,
    };
  }
  
  export function updateDownloaded(releaseNotes, releaseName, releaseDate, updateURL) {
    return {
      type: UPDATE_DOWNLOADED,
      payload: {
        releaseNotes,
        releaseName,
        releaseDate,
        updateURL,
      },
    };
  }
  
  export function updateError(error) {
    return {
      type: UPDATE_ERROR,
      error: true,
      msg: error.message,
    };
  }
  
  export function updateNotAvailable() {
    return {
      type: UPDATE_NOT_AVAILABLE,
    };
  }
  const initialState = {
    checkingForUpdate: false,
    updateAvailable: false,
    updateDownloaded: false,
    release: {},
    updateError: false,
    updateNotAvailable: false,
  };
  export default function system(state = initialState, action) {
    switch (action.type) {
      case CHECKING_FOR_UPDATE: {
        return {
          ...state,
          ...initialState,
          checkingForUpdate: true,
        };
      }
  
      case UPDATE_AVAILABLE: {
        return {
          ...state,
          ...initialState,
          updateAvailable: true,
        };
      }
  
      case UPDATE_DOWNLOADED: {
        const { releaseNotes, releaseName, releaseDate, updateURL } = action.payload;
        return {
          ...state,
          ...initialState,
          updateDownloaded: true,
          release: {
            releaseNotes,
            releaseName,
            releaseDate,
            updateURL,
          },
        };
      }
  
      case UPDATE_ERROR: {
        return {
          ...state,
          ...initialState,
          updateError: action.msg,
        };
      }
  
      case UPDATE_NOT_AVAILABLE: {
        return {
          ...state,
          ...initialState,
          updateNotAvailable: true,
        };
      }
  
      default:
        return state;
    }
}