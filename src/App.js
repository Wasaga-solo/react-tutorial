import React from 'react'
import Table from './components/Table'
import Form from './components/Form'
import List from './components/List'

class App extends React.Component{
    state={
        characters:[]
    }

    handleSubmit=(character)=>{
        this.setState({
            characters:[...this.state.characters,character]
        })
    }

    removeCharacter=(index)=>{
      const {characters}=this.state
      const newCharacters=characters.filter((character,i)=>
      {
          return i!==index
      }
      )
      this.setState({
          characters:newCharacters
      })
    }

    render(){

        return(
            <div className="container">
                <Table 
                characterData={this.state.characters}
                removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
                <List/>
            </div>
        )
    }
}

export default App;