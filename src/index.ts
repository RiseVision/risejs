export * from 'dpos-api-wrapper';
import {dposAPI} from 'dpos-api-wrapper';

export const rise = dposAPI.newWrapper('https://wallet.rise.vision');
export const trise = dposAPI.newWrapper('https://twallet.rise.vision');
