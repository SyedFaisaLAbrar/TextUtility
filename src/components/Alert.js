import React from 'react'

export default function Alert(props) {
    const capitalizeFirst = (w) =>{
        let word = w.toLowerCase();
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }

  return (

    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalizeFirst(props.alert.type)} : {props.alert.msg}</strong>
    </div>
  )
}
