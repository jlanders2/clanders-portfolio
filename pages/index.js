import NavTerminal from '../components/nav-terminal';

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col h-3/4 justify-center items-center">
      <h2 className="clanders-accent font-bold">John Cole Landers</h2>
      <p className="max-w-sm text-center mt-6">
        Hey! I{"'"}m a{' '}
        <span className="clanders-accent">full stack web developer</span> with a{' '}
        <span className="clanders-accent">passion</span> for using technology to
        create applications that <span className="clanders-accent">help</span>{' '}
        people.
      </p>
      <div className="mt-10">
        <div className="inline-block terminal-icon">{'>'}</div>
        <NavTerminal></NavTerminal>
      </div>
    </div>
  );
}
