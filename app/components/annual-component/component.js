import Ember from 'ember';

export default Ember.Component.extend({
  canUpdate: false,
  actions: {
    destroyPlant: function() {
      this.sendAction('routeDestroyPlant', this.get('plant'));
    },
    updatePlant: function() {
      this.set('plant.category', Ember.$('select').val());
      this.set('plant.plantedOn', new Date(this.get('plant.plantedOn')));
      this.sendAction('routeUpdatePlant', this.get('plant'));
      this.set('canUpdate', false);
      this.set('hasHarvested', false);
    },
    edit: function(){
      this.toggleProperty('canUpdate');
    },
  }
});
