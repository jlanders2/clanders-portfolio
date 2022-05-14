export default function Footer() {
  return (
    <div className="container mx-auto flex justify-around items-center align-middle py-5">
      <p>
        Icons provided by{' '}
        <a className="hover:underline" href="https://icons8.com/">
          Icons8
        </a>
      </p>
      <p>Created by John Cole Landers</p>
      <p>
        View source code here -{'>'}{' '}
        <a
          className="hover:underline"
          href="https://github.com/jlanders2/clanders-portfolio"
        >
          github
        </a>{' '}
      </p>
      <p>
        Created using{' '}
        <a className="hover:underline" href="https://nextjs.org/">
          Next.js
        </a>
      </p>
    </div>
  );
}
