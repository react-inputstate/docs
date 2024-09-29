---
sidebar_position: 3
---

# Extractors

Note that all extractors are run and made visible in an input's devtools.

### F.value

Recursively extracts the value type from inputs.

```
const input = F.useInit(F.Text())
const value1: string = F.value(input)

// for scalar fields, equivalently:
const value2: string = input.value

---

const input = F.useInit(
  F.Group({
    a: F.Text(),
    b: F.Toggle(),
  })
)
const value = F.value(input) // { a: string, b: boolean }
```
