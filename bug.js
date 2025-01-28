```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: Immediately sets count to 10, ignoring initial state
    setCount(10);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```