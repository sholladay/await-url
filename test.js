import test from 'ava';
import awaitUrl from '.';

test('awaitUrl()', async (t) => {
    await t.notThrows(awaitUrl('example.com'));
});
