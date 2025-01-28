# Incorrect useEffect Hook Logic in React

This repository demonstrates a common but subtle error in React's `useEffect` hook. The issue arises from improperly setting the state within the effect, leading to unexpected behavior.

## Bug Description
The provided code snippet shows a component using `useEffect` to set the `count` state to 10. However, because the `useEffect` does not include any dependencies, it runs immediately after the component mounts, thus overriding the initial state. This causes the component to display `10` instead of the initial value of `0`.

## Solution
The solution involves making sure the effect only runs when necessary by providing the appropriate dependencies to the `useEffect` hook. In this example, an empty array as dependency ensures that it runs only once after mount. It's important to note that without dependency, it will run after every render. If it must re-run after any state update, make sure you include the state in the dependency array.