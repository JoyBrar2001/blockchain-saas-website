import { CutCornerButton } from "../components/CutCornerButton"
import { Hexagon } from "../components/Hexagon";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const HeaderSection = () => {
  return (
    <>
      <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg z-40">
        <div className="container">
          <div className="flex justify-between items-center h-24 md:h-28">
            <div>
              <img src="/assets/images/logo.svg" alt="Blockforge Logo" />
            </div>

            <div className="flex gap-4 items-center">
              <CutCornerButton className="hidden md:inline-flex">
                Get Started
              </CutCornerButton>

              <div className="size-10 relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="fixed size-full top-0 left-0 z-30 bg-zinc-900">
        <div className="absolute inset-2 rounded-md md:rounded-lg lg:rounded-xl bg-zinc-800 mt-28 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
            <Hexagon className="size-[700px]" />
          </div>

          <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
            <Hexagon className="size-[1100px]" />
          </div>

          <div className="h-full flex justify-center items-center">
            <nav className="flex flex-col items-center gap-12">
              {navLinks.map(({ title, href }) => (
                <a
                  className="text-4xl font-heading font-black text-zinc-500 hover:text-zinc-300 transition duration-300"
                  href={href}
                  key={title}
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div> */}
    </>
  );
}