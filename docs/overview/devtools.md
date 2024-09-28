---
sidebar_position: 4
---

# Devtools

### Overview

One of the great parts (for you!) about React Nuclear is that developer experience is one of the core parts of what makes it valuable. The Devtools makes it super easy to answer questions like:
* what value is actually stored in state?
* what is my validated value for this input?
* why is my input invalid?
* which fields have been touched?

During development, bugs will oftentimes make it very difficult to know what fields are causing issues. But, with React Nuclear Devtools, you're able to get insight into exactly what values you're code is working with at any point of time, without using annoying print statements.

![Devtools Screenshot](/img/devtools-screenshot.png)

### In your code

```
import { Devtools } from 'react-nuclear'

function Component() {
  return (
    <div>
      <Devtools state={inputState} />
      <TextInput {...inputState} />
    </div>
  )
}
```
