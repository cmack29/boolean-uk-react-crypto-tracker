import { useEffect, useState } from 'react'

import { CRIPTO_LIST } from './constants'

import SideListItem from './components/SideListItem'

import MainDetail from './components/MainDetail'

function App() {
  // This piece of state keeps the id from the selected coin to be displayed in the MainDetail component
  const [selectedCripto, setSelectedCripto] = useState(null)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch(CRIPTO_LIST)
      .then(resp => resp.json())
      .then(result => setCoins(result))
  }, [])

  // This function gives you whether a coin has been selected or not
  // You will need this for the SideListItem component
  function isSelectedCripto(id) {
    return selectedCripto === id
  }

  return (
    /* These (<> </>) are called React Fragments, and allow us to return more than one top element */
    <>
      <aside className="side-list">
        <ul>
          {/* <li> */}
          {coins.map(coin => {
            return (
              <SideListItem item={coin} isSelectedCripto={isSelectedCripto} />
            )
          })}
          {/* </li> */}
          {/* <li>
            {coins.map(coin => {
              return (
                <MainDetail />
              )
            })}
          </li> */}
        </ul>
      </aside>
      <main className="main-detail">
        {selectedCripto ? 'MainDetail' : 'Select a coin bro!'}
        <MainDetail />
        {/* News feed component needs to go here */}
      </main>
    </>
  )
}

export default App
