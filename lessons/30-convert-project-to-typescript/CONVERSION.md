# CONVERSION PART 1

## 1. Add tsconfig.json file

## 2. Rename .js files to .ts, .jsx to .tsx

## 3. Change imports of project source files - remove extensions

## 4. Modify package.json file

- add to scripts

```json
    "type-check": "tsc --noEmit"
```

- add to devDependencies

```json
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "5.9.3"
```

# CONVERSION PART 2 : TYPES

## 1. ClickButton.tsx Types

```ts
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

interface ClickButtonProps {
  message: string;
}

const ClickButton = (props: ClickButtonProps) => {
  const { message } = props;

```

## 2. CounterContext.tsx Types

```ts
import { useState, createContext, ReactNode } from "react";

/////////////
// CONTEXT
/////////////

interface CounterContextValue {
  counter: number;
  setCounter: (n: number) => void;
}

export const CounterContext = createContext<CounterContextValue | null>(null);

/////////////
// PROVIDER
/////////////

interface CounterProviderProps {
  children: ReactNode;
}

const CounterProvider = ({ children }: CounterProviderProps) => {
```

# CONVERSION PART 3 : NULLS

## 5. CounterContext.tsx helper

```ts
import { useState, createContext, useContext, ReactNode } from "react";

/////////////
// CONTEXT
/////////////

interface CounterContextValue {
  counter: number;
  setCounter: (n: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

/////////////
// HELPER
/////////////

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used within <CounterProvider>");
  return ctx;
}
```

## 6. Convert Banner.tsx to use helper

```ts
import { useCounter } from "../context/CounterContext";

const Banner = () => {
  const value = useCounter()

```

## 7. Convert ClickButton.tsx to use helper

```ts
import { useCounter } from "../context/CounterContext";

interface ClickButtonProps {
  message: string;
}

const ClickButton = ({ message }: ClickButtonProps) => {

  const value = useCounter();
```

## 8. Add type guard to App.tsx

```ts
if (!rootDivElement) {
  throw new Error('Could not find root element with id "root"');
}

const reactRoot = ReactDOM.createRoot(rootDivElement);
```

## 9. Run type check

```sh
npm run type-check
```

Type check should pass with no errors !

## 10. Run vite dev mode

```sh
npm run dev
```

check dev tools console.log for errors

## 10. Run vite build+preview

```sh
npm run build
npm run preview
```

check dev tools console.log for errors

# LESSON PLAN

1. tsconfig.json, rename files and imports, modify package.json
2. add types to our source code
3. fix nulls and run
