import { useContext, useRef } from 'react';
import AuthContext from '../Store/auth-context';
import classes from './ProfileForm.module.css'; 

const ProfileForm = () => {
  const newpasswordinputref=useRef()
  const authctx=useContext(AuthContext)

  const submithandler=(event)=>{
    event.preventDefault()

    const enterednewpassword=newpasswordinputref.current.value

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBDkpG4giwVEn4BW7tg43j21kROKJlRqP4',
    {
      method:'POST',
      body:JSON.stringify({
        idToken:authctx.token,
        password:enterednewpassword,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>{})
  }
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newpasswordinputref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
