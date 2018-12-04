import * as React from 'react';

export class Login extends React.Component {

    render() {
        return(
            <div>
                <input type="text" placeholder="Login..." /><br/>
                <input type="password" placeholder="Password..." />
            </div>
        )
    }
}