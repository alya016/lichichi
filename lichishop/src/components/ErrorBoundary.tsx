import React, { Component, ErrorInfo } from 'react';


interface State {
    hasError:boolean;
}

interface Props {

}


export default class ErrorBoundary extends Component<Props,State>{
    state={
        hasError:false
    }
    render() {

        if(this.state.hasError){
            return("Profanity is against our policy. Please be tolerant and don't use slang")

            // alert("obscene language is against our policy")
            // window.location.reload();
        }
        return this.props.children;
    }

    public static getDerivedStateFromError(_:Error){
        return{hasError: true};
    }

    public componentDidCatch(error:Error, errorInfo: ErrorInfo)
 {
        console.error('Uncaugh error: ',error);
        console.log('Stack Trace: ', errorInfo);
    }
           


}
   


