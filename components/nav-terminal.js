import { useState } from 'react';

export default function NavTerminal() {
  let [command, setCommand] = useState();

  const handleCommand = async event => {
    if (event.keyCode == 13) {
      setCommand(event.target.value);
    }
  };

  return (
    <>
      <input
        onKeyDown={handleCommand}
        className="nav-terminal w-full h-7"
        placeholder="try something like -> cd projects"
      />
    </>
  );
}
