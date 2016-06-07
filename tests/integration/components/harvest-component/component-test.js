import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('harvest-component', 'Integration | Component | harvest component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{harvest-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#harvest-component}}
      template block text
    {{/harvest-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
