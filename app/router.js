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
    this.route('all');
    this.route('annuals');
    this.route('perennials');
    this.route('herbs');
    this.route('vegetables');
    this.route('fruits');
    this.route('harvest');
  });
});

export default Router;
