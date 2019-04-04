import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
      .catch((err) => {
        console.log(err);
      }) 
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba mv4 w-100 w-50-m w-25 mw6 shadow-5 center bw2">
        <main className="pa4">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw3 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw3 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="modal input-border pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 bw1"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw3 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="modal input-border b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 bw1"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="lh-copy">
              <input
                onClick={this.onSubmitSignIn}
                className="sega fw3 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p  onClick={() => onRouteChange('register')} className="sega fw3 f6 link db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;