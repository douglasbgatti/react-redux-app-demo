export const constants = {
  BUY_CAKE: "BUY_CAKE"
};

export const actions = {
  buyCake: (number = 1) => ({
    type: constants.BUY_CAKE,
    payload: number
  })
};
