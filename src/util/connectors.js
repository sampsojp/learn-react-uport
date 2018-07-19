import { Connect, SimpleSigner } from 'uport-connect'
export let uport = new Connect('React Uport Truffle Boilerplate', {
  clientId: '2ofNaNxZcEjK6jFCnkjCAo98fhgoAEXKFac',
  network: 'rinkeby',
  signer: SimpleSigner('3dff3eeaf5f56eb252fe4e01b720b199c8520812d9e87c8336c79fcee01c3e3a')
})
export const web3 = uport.getWeb3()
