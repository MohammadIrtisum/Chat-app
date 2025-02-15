import { IconLock, IconMail } from "@tabler/icons-react";
import { PasswordInput } from "../components/PasswordInput";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";
import { Anchor } from "../components/Anchor";
import { useState } from "react";

const SignIn =()=>{
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordLessThanEight,SetIspasswordLessThanEight] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email",e.target.value);
   
  }

  const handlePasswordChange = (e) =>{

    if(e.target.value.length <8){
      SetIspasswordLessThanEight(true);
        }
    else{
      SetIspasswordLessThanEight(false);
    }

    setPassword(e.target.value);
  }

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

    return(
        <div className='max-w-md space-y-4'>
                <Text size='x1' weight='bold'>
                  Sign In
                </Text>
        
                <TextInput
                Iabel ="Email"
                placeholder='your@email.com'
                icon={<IconMail className='w-5 h-5 text-gray-400'/>}
                value={email}
                onChange={handleEmailChange}
                ></TextInput>
        
                <PasswordInput
                label='Password'
                placeholder='Enter your password'
                error={isPasswordLessThanEight && 'Password must be at least 8 characters'}
                icon={<IconLock className='w-5 h-5 text-gray-400'></IconLock>}
                value={password}
                onChange={handlePasswordChange}
                ></PasswordInput>
                <Button className='w-full' onClick={handleSignIn}>Sign In</Button>
                <div className='text-center'>
                  <text size="sm" className='text-gray-600'>
                  Don't have an account? <Anchor href="/signup">Sign Up</Anchor>
                  </text>
                </div>
                
              </div>
    )
}

export default SignIn;