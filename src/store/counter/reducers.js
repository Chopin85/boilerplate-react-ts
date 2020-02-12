import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER_WITH_VALUE,
  DECREMENT_COUNTER_WITH_VALUE,
  SET_COUNTER,
  RESET_COUNTER
} from './actions';

const initialState = {
  firstName: '',
  lastName: '',
  status: '',
  jobTitle: '',
  profilePicture: '',
  contacts: [],
  communities: [],
  stats: {}
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;

    case DECREMENT_COUNTER:
      return state - 1;

    case INCREMENT_COUNTER_WITH_VALUE:
      return state + action.payload;

    case DECREMENT_COUNTER_WITH_VALUE:
      return state - action.payload;

    case SET_COUNTER:
      return action.payload;

    case RESET_COUNTER:
      return INITIAL_STATE.counter;

    default:
      return state;
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IDENTITY:
      return { ...state, ...action.identity };
    case SET_CONTACTS:
      const rhLeader = action.contacts.find(contact => contact.role === 'HR');
      return { ...state, contacts: action.contacts, rhLeader };
    case SET_COMMUNITIES:
      return { ...state, communities: action.communities };
    case SET_STATS:
      return { ...state, stats: action.stats };
    case SET_ECOSYSTEM:
      action.ecosystem.poste = action.ecosystem.poste.toLowerCase();
      action.ecosystem.poste =
        action.ecosystem.poste.charAt(0).toUpperCase() +
        action.ecosystem.poste.slice(1);
      action.ecosystem.expertises = action.ecosystem.expertises.map(
        expertise => expertise.expertise
      );
      return { ...state, ecosystem: action.ecosystem };
    case SET_PROFILE_PICTURE:
      return {
        ...state,
        profilePicture: action.profilePicture
      };

    default:
      return state;
  }
};

export default counterReducer;
