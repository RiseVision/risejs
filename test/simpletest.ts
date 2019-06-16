import { expect } from 'chai';
import { rise } from '../src';

describe('simpleTest', () => {
  it('meows', async () => {
    const r = await rise.accounts.getAccount('8093718274007724701R');
    expect(r.success).true;

    expect(r.account.address).eq('8093718274007724701R');
  });

  it('transaction put', async () => {
    const w = await rise.transactions.put({
      id: '1',
      fee: 0,
      amount: 1,
      asset: null,
      senderPublicKey: new Array<string>(64).fill('a').join(''),
      senderId: '2R',
      recipientId: '1R',
      signature: new Array<string>(128).fill('a').join(''),
      signSignature: null,
      timestamp: 1,
      type: 0
    });
    expect(w.success).false;
  })
});
