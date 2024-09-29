---
sidebar_position: 2
---

# Validation

### Scalar validations

#### F.nonempty

Throws if the string is empty

```
const validate = F.nonempty(message)
```

Options

- `message?: string` - the error message in case of validation failure

Output

- `(value: string) => asserts value is NonemptyText`

#### F.lengthGreaterThan

Throws if the string length is less than or equal to the provided value

```
const validate = F.lengthGreaterThan(n, message)
```

Options

- `n: N extends number` - length to check
- `message?: string` - the error message in case of validation failure

Output

- `(value: string) => asserts value is TextLengthGreaterThan<N>`

#### F.required

Throws if the value is null

```
const validate = F.required(message)
```

Options

- `message?: string` - the error message in case of validation failure

Output

- `(value: string) => asserts value is TextLengthGreaterThan<N>`
