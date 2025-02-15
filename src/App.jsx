


import { IconLock, IconMail } from '@tabler/icons-react'
import { Button } from './components/Button'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './Style.css'
import { PasswordInput } from './components/PasswordInput'
import { Anchor } from './components/Anchor'
import { Heading } from './components/Heading'
import SignIn from './Pages/SignIn'

function App() {
  

  return (
    <div className="m-20 space-y-8">
      
{/* 
      <div className="space-y-4">
        <Text size="lg">Button Variants</Text>
        <div className="space-x-4">
          <Button>Default Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="light">Light Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>

      <div className="space-y-4">
        <Text size="lg">Heading Examples</Text>
        <div className="space-y-2">
          <Heading type={1}>Heading 1</Heading>
          <Heading type={2}>Heading 2</Heading>
          <Heading type={3}>Heading 3</Heading>
          <Heading type={4}>Heading 4</Heading>
          <Heading type={5}>Heading 5</Heading>
          <Heading type={6}>Heading 6</Heading>
        </div>
      </div> */}

      <SignIn></SignIn>
       
    </div>
  )
}

export default App