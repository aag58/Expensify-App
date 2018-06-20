import React from 'react';
import ReactDom from 'react-dom';

const Info = (props)=>(
    <div>
        <p>INFO:</p>
        <p>This is some information: {props.info}</p>
    </div>
)

const WithAdminMessage = (WrappedComponent)=>{
    return (props)=>(
        <div>
            <p>This is some private Information...please dont share</p>
             <WrappedComponent {...props}/>   
        </div>
    )
}

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {!props.isAuthenticated && <p>you need to be looged in</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = WithAdminMessage(Info)
const AuthInfo = requireAuthentication(Info)

ReactDom.render(<AuthInfo isAuthenticated={true} info="IMPORTANT MESSAGE"/>, document.getElementById('app'));