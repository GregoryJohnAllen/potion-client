import React from 'react'
import APIURL from '../../helpers/environment'

export function StoreIt() {

  fetch(`${APIURL}/shop/getall`, {
    method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': props.token
      })
  }).then(res = res.json())
  .then(res => {
    console.log(res)
    localStorage.setItem("potion", res)
  })
}


export default ShopTable;