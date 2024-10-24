const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto sm:px-10 px-5">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 hover:text-white font-bold text-xl transition-colors"
          >
            Carlos
          </a>
          <button>
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
