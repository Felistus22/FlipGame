import React, { useState } from 'react'

function Password() {
    
    let numbers = "1234567890";
    let symbols = "~!@#$%^&*()_+-|{}[];:<>,./?";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let length = 12;
    let allChars = numbers + symbols + lowerCase + upperCase ;
    const [newPassword, setNewPassword] = useState("");

    const handleGenerator = () => {
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        while(password.length < length){
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }
        setNewPassword(password);
        //passwordBox.value = password;
        
    }

  return (
    <div className='m-0 p-2 text-xl flex justify-center flex-col items-center bg-teal-900 text-gray-100 leading-10'>
      <h2> Password Generator</h2>
      <div className=''>
        <input type="text" placeholder="password" id="passwordBox" readOnly value={newPassword} />
        
      </div>
      <div className='border mt-2 bg-slate-100 text-teal-900 rounded-md'>
        <button onClick={handleGenerator}>Generate Password</button>
      </div>
    </div>
  )
}

export default Password
