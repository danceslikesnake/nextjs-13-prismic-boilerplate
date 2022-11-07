This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, setup Prismic

```bash
yarn setup
```

## Slice Machine

Add this line to your `sm.json` file

```bash
"localSliceSimulatorURL": "http://localhost:3000/slice-simulator",
````

To create Slices, run the Slice Machine

```bash
yarn slicemachine
```
