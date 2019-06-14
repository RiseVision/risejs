import { expect } from 'chai';
import { rise } from '../src';

describe('simpleTest', () => {
  it('meows', async () => {
    const r = await rise.accounts.getAccount('8093718274007724701R');
    expect(r.success).true;

    expect(r.account.address).eq('8093718274007724701R');

  })
});
