const Navbar = () => {
    return (
      <nav className="navbar bg-orange-500 px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">PoshanSetu</a>
        <div className="space-x-6 hidden sm:block">
          <a href="/faq" className="text-white hover:text-orange-200">FAQ</a>
          <a href="/terms" className="text-white hover:text-orange-200">Terms & Conditions</a>
          <a href="/quizzes" className="text-white hover:text-orange-200">Quizzes</a>
          <a href="/leaderboard" className="text-white hover:text-orange-200">Leaderboard</a>
          <a href="/videos" className="text-white hover:text-orange-200">Videos</a>
          <a href="/doctor-consultation" className="text-white hover:text-orange-200">Doctor Consultation</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  