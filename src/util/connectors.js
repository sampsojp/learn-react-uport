import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('ReactUport Box2', {
    clientId: '2ok5fycGvGXiU2t5KtBvntNJxkrKPhT9HJE',
    network: 'rinkeby',
    signer: SimpleSigner('509f9d88171b27d705e59076a4c70eec4ce1e23a0586ec678d0481b1c8f9b791')
  })

export const web3 = uport.getWeb3()
