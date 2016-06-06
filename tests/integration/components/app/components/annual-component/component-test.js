import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app/components/annual-component', 'Integration | Component | app/components/annual component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app/components/annual-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app/components/annual-component}}
      template block text
    {{/app/components/annual-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
