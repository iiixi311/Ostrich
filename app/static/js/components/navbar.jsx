import React from 'react';
const Navbar = React.createClass({

    // TODO Move to approriate place 
    signInCallback(authResult) {
        if(authResult['code']) {
            $.ajax({
                type: 'POST',
                url: '/googlesignin',
                data: {'data': authResult['code']},
                success: function(response) {
                    $('#googleAuth').attr('style', 'display:none');
                }
            });
        } else {
            alert('There was a login error');
        }
    }, 
    startAuth() {
        auth2.grantOfflineAccess({'redirect_uri':'postmessage'}).then(this.signInCallback);
    },
    render() {
        return(
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
               <a className="navbar-brand page-scroll" href="#page-top">
                    <img className="navbar-logo pull-left" src="/static/img/logo.png" />
                    <div className="pull-left navbar-brand-name">Ostrich</div>
                </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="">
                        <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li className="">
                        { this.props.user === null ?
                            <a id="googleAuth" href="#" onClick={this.startAuth}>Sign in with Google</a>
                            :
                            <a>{this.props.user.name}</a>
                        }
                    </li>
               </ul>
            </div>
        </div>
        </nav>
        );
    }
});

export default Navbar;
