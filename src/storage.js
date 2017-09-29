export const loadState = () => {
  try {
    const state = localStorage.getItem('state');
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (err) {
    console.log(err);
  }
};

export const saveState = (state) => {
  try {
    const serialiazable = JSON.stringify(state);
    localStorage.setItem('state', serialiazable);
  } catch (err) {
    console.log(err);
  }
};
