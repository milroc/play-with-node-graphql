import _ from 'lodash';
import Faker from 'faker';

import init from '../init';
import db from '../db';
import Person from '../person/PersonDB';

// Always re-ingest fake data and flush old fake data.
db.sync({force: true}).then(
  () => {
    _.times(10, () => Person.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email(),
    }).then((person) => person.createPost({
      title: `Sample title by ${person.firstName}`,
      content: 'Sample article',
    }))
  );
  },
  (err) => console.log('An Error occurred when creating the table', err),
);
