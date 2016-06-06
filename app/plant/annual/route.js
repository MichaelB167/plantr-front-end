import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      plant: this.store.findAll('plant')
    };
  },
  actions: {
    createPlant: function(data) {
      this.store.createRecord('plant', data).save();
    }
  }
});
