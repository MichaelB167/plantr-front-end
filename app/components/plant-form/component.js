import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  plantProperties: Ember.computed('form', function(){
    return {
      category: this.get('form.category'),
      harvest: this.get('form.harvest'),
      name: this.get('form.name'),
      quantity: this.get('form.quantity'),
      plantedOn: new Date(this.get('form.plantedOn')),
      expectedHarvest: new Date(this.get('form.expectedHarvest')),
      careNotes: this.get('form.careNotes')
    };
  }),
  actions: {
    createPlant: function() {
      this.sendAction('routeCreatePlant', this.get('plantProperties'));
      this.set('form', {});
    },
    selectValue () {
      this.set('form.storage', Ember.$('select').val());
    }
  }
});
