import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  solution: DS.attr()
  //also need the question it belongs to
});