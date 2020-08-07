require('dotenv').config();
require('./lib/utils/connect')();

const app = require('./lib/app');
const Dog = require('./lib/models/Dog');

const PORT = process.env.PORT || 7890;

Dog
  .create({ name: 'spot', age: 5, weight: '20 lbs' })
  .then(console.log);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});
