import { ArrowRight, Wand2 } from "lucide-react";

function App() {
  return (
    <main className="bg-gray-50/70">
      {/*Navbar*/}
      <nav className="flex justify-between items-center p-4 mb-2">
        <div>
          <a href="/#" className="">
            <img
              src="/grok-logos/black/icons8-grok-144.png"
              alt=""
              className="w-11 inline-block "
            />
            <h1 className="text-4xl inline-block align-middle font-inter">
              Grok
            </h1>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/api" className="hover:font-semibold">
            Api
          </a>
          <a href="/company" className="hover:font-semibold">
            Company
          </a>
          <a href="/careers" className="hover:font-semibold">
            Careers
          </a>
          <a href="/news" className="hover:font-semibold">
            News
          </a>
        </div>
        <div className="flex space-x-4 justify-center items-center">
          <a href="/login">Login</a>
          <button
            className="bg-black hover:bg-black/80 cursor-pointer text-white font-bold py-2 px-4 rounded-3xl"
            type="button"
          >
            Try Grok
          </button>
        </div>
      </nav>
      {/*Heading*/}
      {/*Social proof*/}
      <div className="border border-gray-300 bg-gradient-to-br from-gray-300 to-white p-2 rounded-2xl flex justify-center items-center w-fit m-auto shadow-xs">
        {/*<Hammer className="inline-block" />*/}
        <img
          src="/grok-logos/black/icons8-grok-144.png"
          alt=""
          className="w-6"
        />
        <h3 className="text-sm ml-2">
          <span className="font-semibold"> 6.7M +</span> users worldwide
          building their businesses with Grok
        </h3>
      </div>
      <header className="text-center mt-4">
        <div>
          <h1 className="text-5xl font-bold">Meet Grok.</h1>
          <h2 className="text-2xl font-semibold">
            Your AI That Actually Gets You
          </h2>
        </div>
        <h2 className="text-xl w-2/3 m-auto mt-4 font-inter text-gray-600">
          Smart, fast, and a little witty - Grok turns everyday questions into
          <span className="text-black font-inter">
            {" "}
            clear answers, right inside your dashboard
          </span>
        </h2>
      </header>
      {/*CTA*/}
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="text-lg bg-black bg-gradient-to-br from-black to-white/45 text-white font-bold py-3  px-5 rounded-3xl cursor-pointer shadow-2xl hover:bg-white hover:bg-gradient-to-br hover:from-white hover:to-black transition-all will-change-contents"
        >
          <Wand2 className="inline-block mr-2" />
          <span>Try Grok</span>
          <ArrowRight className="inline" />
        </button>
      </div>
      {/*Dashboard image*/}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-radial from-[rgba(0,212,255,0.6)] via-[rgba(9,9,121,0.4)] to-transparent
                      w-[900px] h-[600px] rounded-full blur-xl"
          ></div>
        </div>

        <img
          src="/dashboard.png"
          alt="Dashboard"
          className="relative top-5 z-10 shadow-2xl rounded-xl w-5xl"
        />
      </div>
    </main>
  );
}

export default App;
