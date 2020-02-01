import React,{Component} from 'react';
import Header from './plugins/Header';
import Header2 from './plugins/Header2';
import Footer from './plugins/Footer';
import Contents from './plugins/Contents';
import './style/style.css';

class App extends Component{
  render(){
    return(
      <div className="App">
           <Header/>
           <Header2 />
              <Contents/>
           <Footer /> 
        
      </div>
    )
  }
}

export default App;
