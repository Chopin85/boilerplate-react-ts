export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const INCREMENT_COUNTER_WITH_VALUE = 'INCREMENT_COUNTER_WITH_VALUE';
export const DECREMENT_COUNTER_WITH_VALUE = 'DECREMENT_COUNTER_WITH_VALUE';
export const SET_COUNTER = 'SET_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export function setIdentity(identity) {
  return {
    type: SET_IDENTITY,
    identity: identity
  };
}

export function setContacts(contacts) {
  return {
    type: SET_CONTACTS,
    contacts: contacts
  };
}

export function setCommunities(communities) {
  return {
    type: SET_COMMUNITIES,
    communities: communities
  };
}

export function setStats(stats) {
  return {
    type: SET_STATS,
    stats
  };
}

export function setEcosystem(ecosystem) {
  return {
    type: SET_ECOSYSTEM,
    ecosystem
  };
}

export const getProfile = () => {
  return async dispatch => {
    const communitiesLabels = await refService.getCommunitiesLabels();
    i18n.addResources('en', 'communitiesLabels', communitiesLabels.en);
    i18n.addResources('fr', 'communitiesLabels', communitiesLabels.fr);
    const [
      identity,
      contacts,
      communities,
      stats,
      ecosystem
    ] = await Promise.all([
      userService.getIdentity(),
      userService.getContacts(),
      userService.getCommunities(),
      userService.getStats(),
      userService.getUserEcosystem()
    ]);
    dispatch(setIdentity(identity));
    dispatch(setContacts(contacts));
    dispatch(setCommunities(communities));
    dispatch(setStats(stats));
    dispatch(setEcosystem(ecosystem));
  };
};

export const getStats = () => {
  return async dispatch => {
    const stats = await userService.getStats();
    dispatch(setStats(stats));
  };
};

export const setProfilePicture = profilePicture => {
  return {
    type: SET_PROFILE_PICTURE,
    profilePicture
  };
};

export const getProfilePicture = () => {
  return async dispatch => {
    const profilePicture = await userService.getProfilePicture();
    dispatch(setProfilePicture(profilePicture));
  };
};

export const updateProfilePicture = file => {
  const formData = new FormData();

  formData.append('file', file);

  return async dispatch => {
    const response = await userService.updateProfilePicture(formData);
    await dispatch(getProfilePicture());
    return response;
  };
};
