import { test } from 'qunit';
import moduleForAcceptance from 'first-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list spy test');

test('visiting /list-spy-test', function(assert) {
  visit('/list-spy-test');

  andThen(function() {
    assert.equal(currentURL(), '/list-spy-test');
  });
});
