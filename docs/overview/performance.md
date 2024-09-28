---
sidebar_position: 3
---

# Performance

### Overview

If you have portions of your component tree that are expensive to render, you might run into performance issues with managing statefulness high in the tree. React is very good about managing expensive re-rerenders, so it's only in very complex cases that it's worth it to optimize renders. With React Input State, all state objects returned from the `useInit` function are stable unless the internal value has changed. This means that you can use `memo` to prevent portions of the tree to render. React will still re-render high up in the tree on each change, but you can prevent that re-render loop from propagating downwards too deeply.

### Basic example

```jsx
interface InputProps {
  title: string
  value: string
  update: (newValue: string) => void
  focus: () => void
  blur: () => void
}

const TextInput = memo(({ title, value, update, focus, blur }: InputProps) => {
  const renderCountRef = useRef(0)
  renderCountRef.current += 1

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {`${title} - ${renderCountRef.current} rerenders`}
      <input
        style={{ maxWidth: 220 }}
        value={value}
        onChange={(e) => update(e.target.value)}
        onFocus={focus}
        onBlur={blur}
      />
    </div>
  )
})

const g = F.Group({
  firstName: F.Text({ defaultValue: 'Joe' }),
  lastName: F.Text({ defaultValue: 'Smith' }),
})

function Component() {
  const groupInput = F.useInit(g)

  return (
    <div>
      <TextInput title="First name" {...groupInput.firstName} />
      <TextInput title="Last name" {...groupInput.lastName} />
    </div>
  )
}
```
