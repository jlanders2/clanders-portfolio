export default function NavTerminal() {
  let command = '';
  return (
    <>
      <input
        onKeyDown={readText.bind(this)}
        className="nav-terminal w-96 h-7"
      />
      <div>{command}</div>
    </>
  );
}

const readText = event => {
  if (event.keyCode == 13) {
    // do something with event.target.value;
    this.command = event.target.value;
  }
};

// this shit isn't completely right but im tired af
