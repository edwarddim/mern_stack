import React, {useState} from 'react'

const Tab = props => {

    const {tab, handleClick, idx} = props
    return (
        <>
            <button onClick={() => handleClick(idx)}>{tab.title}</button>
        </>
    )
}
export default Tab