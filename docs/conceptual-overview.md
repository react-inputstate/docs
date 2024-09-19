---
sidebar_position: 2
---

# Conceptual overview

Let's take a look at the core concepts.

### Abstract schema
Examples
```
F.Text()

F.Toggle()

F.Group({
  firstName: F.Text(),
  lastName: F.Text(),
}) 

F.SimpleList(F.Text())

// TodoListSpec
F.Group({
  title: F.Text(),
  eta: F.Date(),
  items: F.List({
    description: F.Text(),
    isComplete: F.Toggle(),
  }),
})
```

You can compose these abstract schemas together however you want, because they have nothing to do with React or hooks (you don't have to worry about breaking any rules of hooks), and each have a shared interface. Each of them defines how it will interact with its statefulness once some initializer gives it a statefulness to work with.

Because abstract schemas are really just specs, you can reuse them or compose them differently for different use cases. You can (and should) also write your own abstract schemas too! (TODO link guide here)

### Turn your abstract schema concrete
```
const inputState = F.useInit(F.Text())
```
`useInit` is the concretizer. It gives the schemas the statefulness they need in order to actual start tracking state accord to its spec, as well as optionally providing initial values to the state.

### Basic usage of concrete instantiation (i.e., the "input state")
Now that it's concrete, it's called the "input state" (as opposed to the "spec"). Your basic usage of the input state is to provide statefulness into a literal text input. React Input State is fully headless and completely agnostic to whatever you do for input UIs, but here's an example using the basic html input.
```
import { F } from 'react-inputstate'

export function Component() {
  const inputState = F.useInit(F.Text())

  return (
    <input
      value={inputState.value}
      onChange={(e) => inputState.update(e.target.value)}
    />
  )
}
```
