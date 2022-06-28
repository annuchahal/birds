import React from 'react';

function InputFields() {
  return (
    <div >
      <form>
        <div className="content">
          <label>Username or Email</label>
          <input type="text" name="Username" placeholder="" required="true" />
          <label>Password</label>
          <input type="password" name="Password" placeholder="" required="true" />
        </div>
      </form>
    </div>
  );
}
export default InputFields;
