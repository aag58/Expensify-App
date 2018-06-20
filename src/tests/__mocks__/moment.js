// import moment from 'moment';  --> this wont work as it will look for moment from __mocks__ dir and it will cause stack trace error
const moment  = require.requireActual('moment');

export default (timestamp=0)=>{
    return moment(timestamp);
}