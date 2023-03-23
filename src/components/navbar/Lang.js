import React from 'react'

function Lang(props) {

    const setLangId = props.setLangId
    const setShowLangs = props.setShowLangs

    const submit = ()  => {
      setLangId(props.id)
      setShowLangs(false)
    }

  return (
    <button key={props.id} className={props.langId == props.id && "active"} onClick={submit}> {props.lang} </button>
  )
}

export default Lang