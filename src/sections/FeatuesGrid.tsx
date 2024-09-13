import { CutCornerButton } from "../components/CutCornerButton";
import { TextButton } from "../components/TextButton";

const listItems = [
  "Experience unparalled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
];

export const FeaturesGrid = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col gap-56">
          <div>
            <h2 className="font-heading font-black text-4xl">
              Empowering the future of blockchain.
            </h2>

            <p className="text-xl text-zinc-400 mt-8">
              Blockforge provides robust and secture infrastructure to support the next generation of decentralized applications.
            </p>

            <ul className="flex flex-col gap-8 mt-12">
              {listItems.map((item) => (
                <li
                  className="flex"
                  key={item}
                >
                  <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 outline-fuchsia-500/10 rounded-full">
                    <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                  </div>

                  <span className="text-xl font-bold">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex gap-8 mt-12">
              <CutCornerButton>
                Get Started
              </CutCornerButton>

              <TextButton color={"fuchsia"}>
                Learn More
              </TextButton>
            </div>
          </div>

          <div className="font-heading font-black text-4xl">
            <h2>
              Blockforge leads the way.
            </h2>

            <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6">
              <p>
                Blockforge is dedicated to supporting the evolution of Web3 applications by delivering the necessary infrastructure and security for Web3.
              </p>

              <p>
                Blockforge champtions Web3 for everone. As a decentralized blockchain scaling platform, Blockforge enables developers to create scalable, user-friendly Apps with low transaction costs, all while ensuring robust security.
              </p>
            </div>

            <div>
              <CutCornerButton>
                Get Started
              </CutCornerButton>

              <TextButton color={"fuchsia"}>
                Learn more
              </TextButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}