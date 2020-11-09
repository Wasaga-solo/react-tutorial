import React, {Component} from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

const Table=({characterData,removeCharacter})=>{
    return(
        <table>
        <TableHead/>
        <TableBody 
        characterData={characterData}
        removeCharacter={removeCharacter}
        />
    </table>
    )
}

export default Table