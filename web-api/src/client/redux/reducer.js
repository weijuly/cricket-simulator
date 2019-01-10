import moment from 'moment';

const initialState = {
    date: moment().toISOString(),
    host: 'unknown'
};

const reducer = (state = initialState, action) => {
    console.log(`>> reducer recieved action: ${action.type}`);
    switch (action.type) {
        case 'UPDATE_PAGE':
            return {
                ...state,
                date: action.data.date,
                host: action.data.host
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;