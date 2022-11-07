# @tristanwritescode/class-name

This is a tiny library that assist in concatenating class names when rendering a react component. It automatically flattens nested arrays and filters out false / undefined values


## Installation

```shell
npm i -S @tristanwritescode/class-name
```

## Usage

```tsx
import styles from './MyComponent.module.scss'

function MyComponent({condition, className}: {condition: boolean, className?: string}) {
  return <div className={cn(styles.class1, condition && styles.class2, className)} />
}

```

