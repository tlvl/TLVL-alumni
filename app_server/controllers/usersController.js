const User = require('../models/user');
const nearestStations = require('find-nearest-cities');

const findUserParams = (body) => {
  console.log(body);
  return {
    fullName: 'body.fullName',
    email: body.email,
    password: body.password,
    address: {
      country: 'EE',
      location: body.addr,
    },
  }
}

const create = (req, res, next) => {
  userParams = findUserParams(req.body);
  let newUser = User.create(userParams);

  //User.register(newUser, req.body.password, (error, user) => {
    if (newUser) {
      console.log('success', newUser);
      res.locals.redirect = '/map';
      //next();
    } else {
      console.log('error');
      res.locals.redirect = '/reg';
      //next();
    }
  //});
}

module.exports = {
  create,
}
