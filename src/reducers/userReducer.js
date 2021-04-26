
const INITIAL_STATE = { requests: 0, error: null, users: {1: {id: 1, username: "jcompton", email: "j@c.com", city: "Seattle", state: "WA", zip: "98104", is_owner: true}}};

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default userReducer;

