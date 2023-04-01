import { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <pre>{new Date().toLocaleTimeString()}</pre>
    </div>
  );
}

export default Clock;
