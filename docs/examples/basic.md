---
sidebar_position: 1
---

# Basic example

Here's a simple example for getting React Nuclear set up.

### Adding the basic UI

```
import { F } from 'react-nuclear'
import { TextInput, Layout } from '../my-custom-components'

const signUpInputSpec = F.Group({
  username: F.Text({ required: true }),
  firstName: F.Text({ required: true }),
  lastName: F.Text({ required: true }),
  password: F.Text({ required: true, validate: F.lengthGreaterThan(8) }),
})

export function SignUpPage() {
  const inputState = F.useInit(signUpInputSpec)

  return (
    <Layout.VStack>
      <TextInput title="First name" {...inputState.firstName} />
      <TextInput title="Last name" {...inputState.lastName} />
      <TextInput title="Username" {...inputState.username} />
      <TextInput password {...inputState.password} />
    </Layout.VStack>
  )
}
```
Now, you should have a super simple UI that will look something like this (depending on how you implement your Layout and TextInput).

<img src="/img/sign-up-ui.png" width="200" />

### Adding validation

Now let's define how we validate the form overall:
```
export function SignUpPage() {
  ...

  const handleSubmit = () => {
    const validation = F.validation(inputState)
  }

  ...
}
```
Notice the type annotation present on the `validation` object.

<img src="/img/sign-up-validation-type.png" width="400" />

If the user has properly input all the values, we can expect `validation.isValid` to be true. If that's the case, then `validation.validValue` will be populated with the output type.

```
export function SignUpPage() {
  ...

  const handleSubmit = () => {
    const validation = F.validation(inputState)
    if (validation.isValid) {
      const validData = validation.validValue
      // do something with the valid data
    } else {
      // the user should see some error on the invalid fields
    }
  }

  ...
}
```

### Finally, we end up with something like this:
```
import { F } from 'react-nuclear'
import { TextInput, Layout, Button } from '../my-custom-components'

const signUpInputSpec = F.Group({
  username: F.Text({ required: true }),
  firstName: F.Text({ required: true }),
  lastName: F.Text({ required: true }),
  password: F.Text({ required: true, validate: F.lengthGreaterThan(8) }),
})

export function SignUpPage() {
  const handleSubmit = () => {
    const validation = F.validation(inputState)
    if (validation.isValid) {
      const validData = validation.validValue
      Backend.handleSignUp(validData)
    } else {
      // the user should see some error on the invalid fields
    }
  }

  return (
    <Layout.VStack>
      <TextInput title="First name" {...inputState.firstName} />
      <TextInput title="Last name" {...inputState.lastName} />
      <TextInput title="Username" {...inputState.username} />
      <TextInput title="Password" {...inputState.password} />
      <Button onClick={handleSubmit}>Sign up</Button>
    </Layout.VStack>
  )
}
```

