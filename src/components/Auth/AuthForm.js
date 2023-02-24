import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailinputref=useRef()
  const passwordref=useRef()

  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setisLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submithandler=(event)=>{
    event.preventDefault()
    const enteredemail=emailinputref.current.value
    const enteredpassword=passwordref.current.value

    setisLoading(true)
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDkpG4giwVEn4BW7tg43j21kROKJlRqP4'
    }
    else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBDkpG4giwVEn4BW7tg43j21kROKJlRqP4'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
          email:enteredemail,
          password:enteredpassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then((res)=>{
        setisLoading(false)
        if(res.ok){
          return res.json()
        }
        else{
          return res.json().then((data)=>{
            let errormessage='Authentication Failed';
            if(data && data.error && data.error.message){
              errormessage=data.error.message
            }
            // alert(errormessage)
            throw new Error(errormessage)
          })
        }
      }).then((data)=>{console.log(data)}).catch((error)=>{
        alert(error.message)
      })
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailinputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordref}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login':'Create Account'}</button>}
          {isLoading && <p>sending request...</p>} 
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
