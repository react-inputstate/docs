---
sidebar_position: 1
---

# Introduction

Get started with **React Input State** in 5 minutes.

### Installation

```
npm install react-inputstate
```

### Create your first input state

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

### F.Text
This is the "spec" you've created for your input shape. Right now, it's just a simple scalar value. We'll get to creating more complex, multi-dimensional inputs later.

### F.useInit
This is what gives statefulness to your spec.

### Preview to where the *real* value of this library comes in
```
const todoListSpec = F.Group({
  title: F.Text(),
  eta: F.Date(),
  items: F.List({
    description: F.Text(),
    isComplete: F.Toggle(),
  }),
})

export function TodoListForm() {
  const todoListInput = F.useInit(todoListSpec, {
    initValue: { eta: YourDateObject.nextWeek() },
  })

  return (
    <YourLayout.VStack>
      <YourCustomInput title="Title" {...todoListInput.title} />
      <YourCustomDateInput title="ETA" {...todoListInput.eta} />
      {todoListInput.items.map((itemInput) => (
        <YourLayout.HStack key={itemInput.listId}>
          <YourCustomToggle {...itemInput.isComplete} />
          <YourCustomInput {...itemInput.description} />
        </YourLayout.HStack>
      ))}
    </YourLayout.VStack>
  )
}

```
