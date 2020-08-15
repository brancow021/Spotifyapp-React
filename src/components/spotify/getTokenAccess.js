import { useState } from 'react'

let URL = 'http://spotify-get-token.herokuapp.com/spotify/dd354b8d516044c08bf47ef7965dc395/f02886333d34407596c21112cd660de3'

export const TokenAccess = () => {

  return fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      return res
    })

}