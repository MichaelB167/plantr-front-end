import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('plants');
  this.route('plant', function() {
    this.route('annual');
    this.route('perennial');
    this.route('herb');
    this.route('vegetable');
    this.route('fruit');
    this.route('harvest');
  });
});

export default Router;
