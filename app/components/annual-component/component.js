import Ember from 'ember';

export default Ember.Component.extend({
  canUpdate: false,
  actions: {
    destroyPlant: function() {
      this.sendAction('routeDestroyPlant', this.get('plant'));
    },
    updatePlant: function() {
      this.set('plant.category', Ember.$('select').val());
      this.sendAction('routeUpdatePlant', this.get('plant'));
      this.set('canUpdate', false);
    },
    edit: function(){
      this.toggleProperty('canUpdate');
    },
    harvest: function() {
      this.set('plant.harvest', 'true');
      this.sendAction('routeUpdatePlant', this.get('plant'));
      this.set('canUpdate', false);
    }
  }
});
