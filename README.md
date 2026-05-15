# reactstrap-formik

Bindings for using [Formik](https://github.com/jaredpalmer/formik) with [Reactstrap](https://reactstrap.github.io/).

This is a maintained fork of [shoaibkhan94/reactstrap-formik](https://github.com/shoaibkhan94/reactstrap-formik), updated to support modern versions of React, Reactstrap, and Formik (including **React 19**). The original package has not been published since 2019, so this fork exists to keep the components working with current dependency versions.

Published on npm as **`reactstrap-formik-mvmorten`**.

[![npm version](https://img.shields.io/npm/v/reactstrap-formik-mvmorten.svg)](https://www.npmjs.com/package/reactstrap-formik-mvmorten)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

---

## Why this fork?

The original `reactstrap-formik` library hasn't been updated since 2019 and its peer dependencies (React 16, old Reactstrap, old Formik) make it unusable in modern projects without forcing legacy installs. This fork:

- Updates peer dependencies to support React 19, current Reactstrap, and current Formik
- Keeps the original component API intact, so it's a near drop-in replacement
- Is published under a new npm name to avoid clashing with the original package

If you're migrating from `reactstrap-formik`, you should be able to swap the import path and keep your existing JSX.

## Installation

```bash
npm install reactstrap-formik-mvmorten
```

Peer dependencies (install these in your app if you don't already have them):

```bash
npm install react react-dom reactstrap formik bootstrap
```

Make sure Bootstrap's CSS is imported somewhere in your app:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Usage

The library exposes adapter components designed to be passed to Formik's `<Field>` via the `component` prop. They wire up Formik's field state to Reactstrap's form components and surface validation feedback automatically.

### Basic example

```jsx
import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import * as Yup from "yup";
import {
  ReactstrapInput,
  ReactstrapSelect,
  ReactstrapRadio,
} from "reactstrap-formik-mvmorten";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  role: Yup.string().required("Pick a role"),
  contactMethod: Yup.string().required("Choose a contact method"),
});

export default function SignupForm() {
  return (
    <Formik
      initialValues={{ name: "", role: "", contactMethod: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {() => (
        <Form>
          <Field
            name="name"
            label="Full name"
            component={ReactstrapInput}
          />

          <Field
            name="role"
            label="Role"
            component={ReactstrapSelect}
            inputprops={{
              name: "role",
              id: "role",
              options: ["Engineer", "Designer", "Product"],
              defaultOption: "Select a role",
            }}
          />

          <Field
            name="contactMethod"
            label="Email"
            type="radio"
            value="email"
            component={ReactstrapRadio}
          />
          <Field
            name="contactMethod"
            label="Phone"
            type="radio"
            value="phone"
            component={ReactstrapRadio}
          />

          <Button type="submit" color="primary">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}
```

## Components

| Component          | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `ReactstrapInput`  | Text-style inputs (`text`, `email`, `password`, `number`, `textarea`, etc.) |
| `ReactstrapSelect` | Dropdown select. Pass options via `inputprops.options`.                    |
| `ReactstrapRadio`  | Single radio input — use one `<Field>` per option.                         |

All components:

- Receive Formik's `field` and `form` props automatically when used with `<Field component={...}>`
- Render a Reactstrap `FormGroup` with a `Label`, the input, and a `FormFeedback` for the error message
- Display validation errors after the field has been touched

## Live examples (original library)

These CodeSandbox examples from the original repo still illustrate the component API:

- [Text Input](https://codesandbox.io/s/xl6mx6w8z4)
- [Select Input](https://codesandbox.io/s/6l3oo28kq3)
- [Radio Input](https://codesandbox.io/s/0vm7yo754w)

## Development

Clone the repo and run the Storybook playground locally:

```bash
npm install
npm run storybook
```

To produce a production build of the library:

```bash
npm run build
```

## Versioning

This fork starts from where the original left off and uses its own version line. The `0.0.x` releases track dependency bumps and compatibility fixes; see [Releases](https://github.com/mvmorten/reactstrap-formik/releases) for the changelog. The most recent release adds React 19 compatibility.

## Credits

- Original library: [shoaibkhan94/reactstrap-formik](https://github.com/shoaibkhan94/reactstrap-formik)
- [Formik](https://github.com/jaredpalmer/formik) by Jared Palmer
- [Reactstrap](https://reactstrap.github.io/)

## License

[MIT](./LICENSE) — same as the original project.