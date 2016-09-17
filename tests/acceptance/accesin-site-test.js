import { test } from 'qunit';
import moduleForAcceptance from 'first-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accesin site');

test('visiting /accesin-site', function(assert) {
  visit('/accesin-site');

  andThen(function() {
    assert.equal(currentURL(), '/accesin-site');
  });
});
