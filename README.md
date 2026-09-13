# 🧱 Dev Stack — Build Your Ideal Development Stack

Dev Stack is a browsing tool for developers who are choosing the tools for
their next project. It lists frontend, backend, database, language, styling,
and DevOps technologies as cards you can compare side by side, and lets you
collect the ones you want into a personal "Your Stack" list — one click to
add, one click to remove.

## 🛠️ Built With

- **React 18** (Vite) — component structure and UI state
- **Tailwind CSS** + **DaisyUI** — styling and layout
- **react-toastify** — add / remove / duplicate / clear-all notifications
- **JSON** — the technology catalogue, loaded at runtime rather than hardcoded

## ✨ Features

1. **Build-a-stack workflow** — every technology card has an "Add to Stack"
   button; once added, the button disables itself and reads
   "✓ Added to Stack" so you always know what's already picked, and the
   "Your Stack" sidebar updates live with a running count.
2. **Guarded, undoable selections** — trying to add the same technology twice
   raises a toast warning instead of silently duplicating it, and each stack
   item has its own ✕ to remove just that one, plus a "Remove All" to start
   over.
3. **Fully responsive layout** — a sticky navbar that collapses to a
   hamburger menu on mobile, and a technology grid that reflows from three
   columns on desktop to two on tablet and one on mobile, with the stack
   panel stacking below.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## 📁 Project Structure

```
src/
  components/   # Navbar, Hero, TechnologyGrid, TechnologyCard, YourStack, Footer, Loader
  hooks/         # useTechnologies — fetches and loads the JSON catalogue
  App.jsx        # owns the "stack" state and the add/remove/clear logic
public/
  data/technologies.json   # the technology catalogue
```

---

## 📚 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly
inside JavaScript. React uses it because describing what a component should
look like in a markup-like syntax is easier to read and write than nested
`React.createElement()` calls, while still compiling down to plain
JavaScript.

**2. What is the difference between props and state?**
Props are values passed **into** a component by its parent — the component
receiving them cannot change them. State is data a component **owns and
manages itself**, and can update over time (for example, with `useState`).
Props flow down; state lives locally and can change what a component renders.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold a piece of data that persists
between renders and triggers a re-render when it changes. In this project,
`App.jsx` uses it to hold the `stack` array (the technologies the user has
added) and `Navbar.jsx` uses it to hold whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects — code that reaches outside the component, like
fetching data — after the component renders. Fetching the technology JSON is
exactly that kind of side effect, so the `useTechnologies` hook fetches the
file inside a `useEffect` that runs once when the app first mounts, then
stores the result in state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell which items were added, removed, or reordered
between renders, so it can update only the DOM nodes that actually changed
instead of re-rendering the whole list. Without a stable, unique key, React
can mismatch items and cause bugs or lose component state.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different markup depending on some
condition, instead of always rendering the same thing. `YourStack.jsx` does
this: when `stack.length === 0` it renders "Your stack is empty," and
otherwise it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down by giving the child component props, e.g.
`<TechnologyCard technology={tech} isInStack={...} />`. For a child to send
information back up, the parent passes a **function** down as a prop (e.g.
`onAdd`), and the child calls that function — usually with some data as an
argument — when something happens, like a button click. `App.jsx` passes
`handleAdd` down to `TechnologyGrid` → `TechnologyCard`, and clicking
"Add to Stack" calls `onAdd(technology)`, sending the chosen technology back
up to `App`.

---

## 📤 Submission

- GitHub Repository Link: https://github.com/charsamia27-beep/devstack
- Live Site Link:  https://devstack-six-iota.vercel.app

