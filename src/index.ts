export * from 'dpos-api-wrapper';
export { convertWrapper } from './convertWrapper';

import { dposAPI } from 'dpos-api-wrapper';
import { convertWrapper } from './convertWrapper';


export const rise = convertWrapper(dposAPI.newWrapper('https://wallet.rise.vision'));
export const trise = convertWrapper(dposAPI.newWrapper('https://twallet.rise.vision'));


