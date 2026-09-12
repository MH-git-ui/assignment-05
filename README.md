# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a single-page React application where you can browse frontend, backend,
database, language, styling, and DevOps technologies side by side, and put together your own
personal "stack" by adding whichever ones you'd choose for your next project.

## 🛠️ Technologies Used

- **React 19** + **TypeScript** — component-driven UI with static typing
- **Vite** — fast dev server and production bundler
- **Tailwind CSS v4** + **daisyUI** — utility-first styling and UI primitives
- **React-Toastify** — toast notifications for stack actions
- **JSON** — local data file powering the technology catalog

## ✨ Features

1. **Build-your-own stack:** Browse 15 technologies as responsive cards (3 columns on
   desktop, 2 on tablet, 1 on mobile) and add any of them to a live "Your Stack" sidebar
   with a single click — duplicates are blocked with a warning toast, and each added card
   becomes disabled and shows "✓ Added to Stack".
2. **Instant feedback with toasts:** Every stack action — adding, attempting a duplicate,
   removing, and clearing all — fires a react-toastify notification, so you're never left
   wondering whether an action went through.
3. **Data-driven and responsive by design:** The full technology catalog loads at runtime
   from a local JSON file (complete with a genuine loading state) instead of being
   hardcoded into a component, and the entire layout — navbar, hero, cards, and sidebar —
   adapts smoothly from mobile to desktop, all tied together by a single shared gradient
   theme (orange → pink → violet) running through the brand name, hero heading, and
   primary buttons.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

- Live Site Link: https://funny-alfajores-e399f1.netlify.app/#home

---

## 🧠 React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that allows HTML-like markup to be written directly inside
JavaScript/TypeScript files. React relies on it because it makes describing the intended UI
far more readable than manually calling `createElement` — the structure of a component
becomes visible at a glance, with ordinary JS expressions mixed in via `{}`.

**2. What is the difference between props and state?**
Props are values handed *into* a component by its parent — from the component's own
perspective they're read-only (e.g. `technology`, `onAdd` passed to `TechnologyCard`).
State, by contrast, is data a component owns and manages itself through `useState`, capable
of changing over time as the user interacts with it (e.g. the `stack` array in `App`). Props
flow downward; state lives locally and drives re-renders when it changes.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` gives a function component a piece of state that persists across renders and
triggers a re-render whenever it's updated. Here, it's used in `App.tsx` to track
`technologies`, the user's `stack`, `isLoading`, and `error`, and in `Navbar.tsx` to track
whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` handles side effects — operations that reach beyond rendering itself, like
network requests — once a component has rendered. Since fetching data shouldn't happen
during render, `App.tsx` uses `useEffect` with an empty dependency array to fetch
`technologies.json` a single time on mount, storing the result in state afterward.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` prop lets React distinguish list items across renders, so it can tell which items
were added, removed, or reordered rather than re-rendering the entire list from scratch.
Without a stable, unique key (here, each technology's `id`), React risks mismatching items,
leading to subtle bugs or lost component state.

**6. What is conditional rendering? Show one place you used it (example: the empty stack
message).**
Conditional rendering is displaying different UI based on some condition, rather than
always rendering identical markup. In `YourStack.tsx`, when `stack.length === 0` the
component shows a "Your stack is empty." placeholder; otherwise, it maps over the stack and
renders the actual list of added technologies.

**7. How do you pass data from a parent component to a child component, and how does a
child send something back to the parent?**
A parent hands data down to a child through props — for instance, `App` passes
`technologies`, `stackIds`, and the `onAdd` callback down to `TechnologyGrid`. To send
information back up, the parent passes a function down as a prop, which the child then
calls with whatever data it needs to share; `TechnologyCard` invokes the `onAdd(technology)`
prop when its button is clicked, which in turn runs `handleAdd` back in `App`.
