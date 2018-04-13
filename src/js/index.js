import React from 'react' 
import ReactDOm from 'react-dom'
import styles from '../css/style.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(
            (prevState) => ({
                counter: prevState.counter + 1
            })
        )
    }
    render(){
        return(
            <button className="btn_like " type="button" onClick={this.handleClick} >
                {this.state.counter}  &nbsp;
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
             </button>

        )
    }
}
class Apps extends React.Component{

    constructor(props){
        super(props);
        this.state={
            quotations:[],
            title:'Give your Quotes here',
            counter:0
        }
        this.addQuotes = this.addQuotes.bind(this);
        this.removeToDo = this.removeToDo.bind(this);
        this.handleCounter=this.handleCounter.bind(this);

    }

    addQuotes(event){
        event.preventDefault();
        //console.log(this.refs);
        let name=this.refs.name.value;
        let quotes=this.refs.quotes.value;
        let counter = this.state.counter;
        console.log('-----',counter)
        console.log(name,quotes)
        let quotation={name, quotes, counter}
        counter++;
        let quotations=this.state.quotations;

        quotations.push(quotation);
     
        this.setState({quotations:quotations, counter:counter});

        console.log(quotations)

        this.refs.quotationForm.reset();

    }

   handleCounter(){

    let counter=this.state.counter;
    counter++
    this.setState({counter:counter})

   }

    removeToDo(index){
        console.log(index);
        let quotations = this.state.quotations
        let quotation=quotations.findIndex(function(quotation){
            return quotation.counter===index
        })

        
        console.log(quotation);
        quotations.splice(quotation,1);
        this.setState({quotations:quotations})

    }
    render(){
        let title = this.state.title;
      
        let quotations=this.state.quotations
        let c=this.state.counter
        return(
           
            <div className="container">
                <h1 className="text-primary">{title}</h1>
                <div className="user-form col-md-6 ">
            <form ref="quotationForm">
            <div className="authname ">
                        <input type="text" className="form-control" placeholder="Enter your name" ref="name" />
            </div>
                <div className="quotes">
                     <textarea type="text" className="form-control" placeholder="Quotes" ref="quotes" rows="10" /> 
                </div>
                <div className=" col-md-12">
                
                    <button className="addBtn" onClick={this.addQuotes} >Add</button>
                </div>
                        
            </form>
            </div>
            <h2>List of quotes</h2>
            <div className=" col-md-6 ">
                {
                    quotations.map((quotation => < div key = {
                                    quotation.counter
                                }
                                className = "quotelist" >
                <div className="row">
                        <div className="authorname col-md-4" >{quotation.name}</div>
                      
                        <div className="quotetext col-md-4">{quotation.quotes}</div>
                                <LikeButton />
                          <div className="removeBtn text-right col-md-2">
                            <i className="fa fa-trash-o" onClick={this.removeToDo.bind(null, quotation.counter)} ></i>
                                   
                        </div>
                               
                        </div>
                </div>))}
            </div>
            </div>
        )
    }
 
}
ReactDOm.render(<Apps />, document.getElementById('root'))
