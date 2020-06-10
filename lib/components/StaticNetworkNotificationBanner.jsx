import React, { useContext } from 'react'
import classnames from 'classnames'

import { WalletContext } from 'lib/components/WalletContextProvider'

export const StaticNetworkNotificationBanner = ({
}) => {
  let chainId
  const walletContext = useContext(WalletContext)
  const { _onboard } = walletContext || {}

  if (!_onboard.getState().wallet.name) {
    return null
  }

  chainId = _onboard.getState().appNetworkId

  let networkWords = 'mainnet 🥵'
  if (chainId === 3) {
    networkWords = `the Ropsten testnet 👍`
  } else if (chainId === 42) {
    networkWords = `the Kovan testnet 👍`
  } else if (chainId === 1234 || chainId === 31337) {
    networkWords = `the localhost 👍`
  }

  return <div
    className={classnames(
      'text-sm sm:text-base lg:text-lg sm:px-6 py-2 sm:py-3',
      {
        'text-white bg-red-800': chainId !== 42 && chainId !== 31337 && chainId !== 1234,
        'text-purple-400 bg-purple-1000': chainId === 42 || chainId === 31337 || chainId === 1234,
      }
    )}
  >
    <div
      className='text-center'
    >
      This works on Kovan and localhost.
      Your wallet is currently set to <span className='font-bold'>{networkWords}</span>
    </div>
  </div>
}