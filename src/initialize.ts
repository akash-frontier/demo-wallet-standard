import { registerWallet } from './register.js';
import { DemoWalletWallet } from './wallet.js';
import type { DemoWallet } from './window.js';

export function initialize(demoWallet: DemoWallet): void {
    registerWallet(new DemoWalletWallet(demoWallet));
}
