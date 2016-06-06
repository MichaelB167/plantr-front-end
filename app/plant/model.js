import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  category: attr('string'),
  harvest: attr('string'),
  name: attr('string'),
  quantity: attr('number'),
  plantedOn: attr('date'),
  expectedHarvest: attr('date'),
  careNotes: attr('string')
});
