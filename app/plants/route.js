import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      plant: this.store.findAll('plant')
    };
  },
  flashMessages: Ember.inject.service(),
  actions: {
    createPlant: function(data) {
      this.store.createRecord('plant', data).save()
      .then(() => this.get('flashMessages').success('You created a plant!'));
    },
    updatePlant: function(plant) {
      plant.save().then(()=>window.location.reload(true));
    },
    destroyPlant: function(plant) {
      plant.destroyRecord();
    }
  }
});
