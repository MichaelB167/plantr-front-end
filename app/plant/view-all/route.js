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
    },
    updatePlant: function(plant) {
      plant.save();
    },
    destroyPlant: function(plant) {
      plant.destroyRecord();
    }
  }
});
