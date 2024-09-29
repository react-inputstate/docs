---
sidebar_position: 1
---

# Fields

### Text field

A basic input for `string` state.

```
// abstract layer
const textSpec = F.Text({
  defaultValue,
  required,
  requiredMessage,
  validate,
  disableTrim,
})

// concrete layer
const textInput = F.useInit(textSpec, { initValue })
```

#### Options

`defaultValue?: string` - the value that an instantiation of the spec gets by default.

- Defaults to `''`

`required?: boolean` - when true, treats `''` as invalid

- Defaults to `false`
- Changes the concrete input type from `TextInput<BlankableText>` to `TextInput<NonemptyText>` when true

`requiredMessage?: string` - the message to place in `error`

- Defaults to `'Required'`

`validate?: Validator<string, T extends string>`

- Defaults to no-op function (no narrowing)
- Note that validation does not apply to empty values: use `required` to control that
- See more about [validation](/docs/api/validation)

`disableTrim?: boolean` - turns off the trimming "pre-validation" transformation

- Defaults to `false`

#### Returns

- Unusable type `TextField<...>` - only used as input to the `F.useInit` function.

#### Concretize input

`initValue?: string` - an optional override to the abstract layer `defaultValue`

- No default value

#### Concretize output

- `TextInput<TValid>: ScalarInput<string, TValid>`
- See more about [Scalar fields](/docs/api/fields?#scalar-field).

### Toggle field

A basic input for `boolean` state.

```
// abstract layer
const toggleSpec = F.Toggle({
  defaultValue,
  required,
  requiredMessage,
})

// concrete layer
const toggleInput = F.useInit(toggleSpec, { initValue })
```

#### Options

`defaultValue?: boolean` - the value that an instantiation of the spec gets by default.

- Defaults to `false`

`required?: boolean` - when true, treats `false` as invalid

- Defaults to `false`
- Changes the concrete input type from `ToggleInput<boolean>` to `ToggleInput<true>` when true

`requiredMessage?: string` - the message to place in `error`

- Defaults to `'Required'`

#### Returns

- Unusable type `ToggleField<...>` - only used as input to the `F.useInit` function.

#### Concretize input

`initValue?: boolean` - an optional override to the abstract layer `defaultValue`

- No default value

#### Concretize output

- `ToggleInput<TValid>: ScalarInput<boolean, TValid>`
- See more about [Scalar fields](/docs/api/fields?#scalar-field).

### Choice field

A basic input for `T | null` state.

```
// abstract layer
const choiceSpec = F.Choice({
  defaultValue,
  required,
  requiredMessage,
})

// concrete layer
const choiceInput = F.useInit(choiceSpec, { initValue })
```

#### Options

`defaultValue?: T | null` - the value that an instantiation of the spec gets by default.

- Defaults to `null`

`required?: boolean` - when true, treats `null` as invalid

- Defaults to `false`
- Changes the concrete input type from `ChoiceInput<T | null, T | null>` to `ChoiceInput<T | null, T>` when true

`requiredMessage?: string` - the message to place in `error`

- Defaults to `'Required'`

#### Returns

- Unusable type `ChoiceField<...>` - only used as input to the `F.useInit` function.

#### Concretize input

`initValue?: T | null` - an optional override to the abstract layer `defaultValue`

- No default value

#### Concretize output

- `ChoiceInput<T | null, TValid>: ScalarInput<T | null, TValid>`
- See more about [Scalar fields](/docs/api/fields?#scalar-field).

### Scalar field

A basic input for `T | null` state.

```
// abstract layer
const scalarSpec = F.Scalar({
  defaultValue,
  prevalidate,
  validate,
})

// concrete layer
const scalarInput = F.useInit(scalarSpec, { initValue })
```

#### Options

`defaultValue: T` - the value that an instantiation of the spec gets by default.

- **Required**

`prevalidate?: (value: T) => T` - a validation to apply before validation runs

- Defaults to the identity function

`validate?: (value: T) => asserts value is TValid` - a narrowing validation

- Defaults to no-op function (no narrowing)
- See more about [validation](/docs/api/validation)

#### Returns

- Unusable type `ScalarField<...>` - only used as input to the `F.useInit` function.

#### Concretize input

`initValue?: T` - an optional override to the abstract layer `defaultValue`

- No default value

#### Concretize output

- `ScalarInput<T | null, TValid>: ScalarInput<T | null, TValid>`

### Group field

A nested input manager for named sub-input state. Note that this is also the correct way to effectively build Tuple fields.

```
// abstract layer
const groupSpec = F.Group({
  inputA: F.Text(),
  inputB: F.Text(),
}, {
  defaultValue,
})

// concrete layer
const groupInput = F.useInit(groupSpec, { initValue })
```

#### Options

`spec: { [key: string]: SubField }` - the sub-field values that this group manages

- **Required**

`defaultValue?: Partial<{ [key: string]: /* nested defaults */ }>` - the values that the sub-field instantiations of the spec get by default.

#### Returns

`const groupSpec: GroupField<...>`

- used as input to the `F.useInit` function
- `groupSpec.fields: { [key: string]: /* nested specs */ }`

#### Concretize input

`initValue?: Partial<{ [key: string]: /* nested init values */ }>` - an optional override to the abstract layer `defaultValue`

- No default value

#### Concretize output

- `GroupInput<...>`

### List field

A dynamically sized input for `T[]` state.

```
// abstract layer
const listSpec = F.List({
  inputA: F.Text(),
  inputB: F.Text(),
}, {
  defaultValue,
})

// concrete layer
const listInput = F.useInit(listSpec, { initValue })
```

#### Options

`spec: { [key: string]: SubField }` - the sub-field values that this group manages

- **Required**

`defaultValue?: Partial<{ [key: string]: /* nested default */ }>[]` - the values that nested instantiations of the spec get by default.

#### Returns

- Unusable type `ListField<...>` - only used as input to the `F.useInit` function.

#### Concretize input

`initValue?: Partial<{ [key: string]: /* nested default */ }>[]` - an optional override to the abstract layer `defaultValue`

- No default value

#### Concretize output

- `ListInput<...>`
