import Ember from 'ember';

export function addOneId(id) {
  let newId = Number(id);
  return newId + 1;
}

export default Ember.Helper.helper(addOneId);
