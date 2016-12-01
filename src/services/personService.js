import uuid from 'node-uuid';
import faker from 'faker';
import random from '../utils/random';
import axios from 'axios';

export default {

    getPersons: () => {
        return axios.get('/person').then(ret => ret.data)
        .catch(e => {
            console.log(e);
            throw e;
        });
    },

    generatePerson: () =>
    {
        return {
            id: uuid.v4(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            gender: random.pick(['m', 'f']),
            age: random.integer(10,100),
        };
    }


}