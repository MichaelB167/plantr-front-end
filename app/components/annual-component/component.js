import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyPlant: function() {
      this.sendAction('routeDestroyPlant', this.get('plant'));
    }
  }
});
