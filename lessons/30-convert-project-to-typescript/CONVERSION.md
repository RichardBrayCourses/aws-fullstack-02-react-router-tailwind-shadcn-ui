# Conversion Steps

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

## 5. Modify CounterContext.tsx to add types

```ts
import { useState, createContext, useContext, ReactNode } from "react";

interface CounterContextValue {
  counter: number;
  setCounter: (n: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

interface CounterProviderProps {
  children: ReactNode;
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used within <CounterProvider>");
  return ctx;
}

const CounterProvider = ({ children }: CounterProviderProps) => {
  // rest

```

## 6. Modify Banner.tsx

```ts
import { useCounter } from "../context/CounterContext";

const Banner = () => {
  const value = useCounter()

```

## 7. Modify ClickButton.tsx

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
