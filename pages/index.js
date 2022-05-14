import NavTerminal from '../components/nav-terminal';

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col h-3/4 justify-center items-center">
      <h1 className="clanders-accent font-bold title">Cole Landers,</h1>
      <h3 className="max-w-lg text-center mt-6">
        a{' '}
        <span className="clanders-accent font-semibold">
          full stack web developer
        </span>{' '}
        who has a passion for using technology to create applications that help
        people.
      </h3>
      <div className="mt-10 flex justify-center w-1/3">
        <div className="inline-block terminal-icon">{'>'}</div>
        <NavTerminal></NavTerminal>
      </div>
    </div>
  );
}
