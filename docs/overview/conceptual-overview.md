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

`useInit` is the concretizer. It gives the schemas the statefulness they need in order to actual start tracking state according to its spec, as well as optionally providing initial values to the state.

### Basic usage of concrete instantiation (i.e., the "input state")

Now that it's concrete, it's called the "input state" (as opposed to the "spec"). Your basic usage of the input state is to provide statefulness into a literal text input. React Input State is fully headless and completely agnostic to whatever you do for input UIs, but here's an example using the basic html input.

```
import { F } from 'react-nuclear'

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

### Validation

For scalars, validation performs a "narrowing" function. For example, it maps a `string | null` to a `string`. In `TextField`, there are two validation options: `required` and `validate`. `validate` will only ever get called on a nonempty input. `required: true` will cause an error for an empty text input. A similar variant of this logic exists for `ChoiceField`.

### Checkpointing and resetting

In some cases, you'll want to save the current state to allow resetting back to a specific point. One example is: An inline form that will do some patch, and let the user reset back to the most recently saved point. You can `checkpoint` the state when the save is confirmed, and then any `reset` to the state will go back to that checkpointed value.

### Interaction state

There are three simple interaction states:

- `'clean'` - the user has not interacted with this field or the field has been `checkpoint`ed since its last interaction
- `'editing'` - the user is currently interacting with the field (i.e., no `blur` has been called since the last `focus`)
- `'dirty'` - the user has interacted with the field since the last `checkpoint`
