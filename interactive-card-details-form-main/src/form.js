import { Link,createContext, useState ,useContext} from "react";



const Context= createContext();

function Form(){
    
 const [user,setUser]= useState({fullname:"",date:"",number:"",cvc:""});
 const  Handler =(e)=>{
    setUser({...user,[e.target.name] :e.target.value})
 }

const Submit=(e)=>{
    <Link to="/thank" />
}
 return(
    <Context.Provider value={user}>
                 <Component />
    <form onClick={Submit} className="form">

        <label htmlFor="fullname">CARDHOLDER NAME<br />

        <input type="text" name="fullname"  onChange={Handler} required className="len"/>

        </label><br />

        <label htmlFor="number">CARD NUMBER<br />

        <input type="text" className="len"name="number" pattern="[0-9]{16}"onChange={Handler}title="16 numbers requried" required/>

        </label><br />

        <div className="dc">

        <label htmlFor="date" style={{float:"left",display:"inline",paddingTop:"19px",backgroundColor:""}}>EXP.DATE<br />

        <input type="date"name="date" required style={{width:"100px"}} />

        </label><br />

        <label htmlFor="number" style={{float:"right",display:"inline"}}>CVC<br />

        <input type="text" name="cvc" pattern="[0-9]{3}" style={{width:"80px"}}/>

        </label><br />

        </div><br/><br/>

        <label htmlFor="submit">

        <button required className="len"style={{backgroundColor:"rgb(28, 3, 51)",color:"white",fontSize:"9px",height:"25px"}}>Confirm</button>

        </label>

        <p name="fullname" onChange={Handler}>micah </p>
          
    </form>
 
    </Context.Provider>
      
 );
}
  
function Component(){
  return(
    <Layout />
  );
}

function Layout(){
    const user=useContext(Context);
    return(
     <div className="main">
           <div className="left" />
    
                   <img src="bg-card-front.png" alt="card" className="card "/>
                   <p className="cardnumber">{user.number}</p>
                   <p className="cardname">{user.fullname}</p>
                   <p className="cardcvc">{user.cvc}</p>     
                   <img src="bg-card-back.png" alt="Card Logo" className="bcard" />
                     
           
            <div className ="right">
               
            </div>
     </div>
    );
}


export default Form