import { expect } from 'chai';
import { rise, Rise } from '../src';
const wra = Rise.newWrapper('http://localhost:5512');
describe('simpleTest', () => {
  it('meows', async () => {

    const b = await wra.accounts.getAccount('8093718274007724701R');
    console.log(b);
  });

  it('transaction put', async () => {
    const w = await wra.transactions.postSingle({
      id: '1',
      fee: '0',
      amount: '1',
      asset: null,
      senderPubData: new Array<string>(64).fill('a').join(''),
      senderId: '2R',
      recipientId: '1R',
      signatures: [
        new Array<string>(128).fill('a').join('')
      ],
      timestamp: 1,
      type: 0,
      version: 0
    });
    console.log(w);
    expect(w.success).false;
  })
});
