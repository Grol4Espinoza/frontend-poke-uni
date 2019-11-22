import React,{Component} from 'react'
import axios from 'axios'
class HomeContainer extends Component{
    
    componentDidMount(){
        axios.get('https:pokeapi.co/api/v2/pokemon/8/')
        .then(result=>{
            console.log(result.data)
        }).catch(console.log)
    }
    render(){
        return  <h3>Probando Api Pokemon </h3>
    }
} 
export default HomeContainer

