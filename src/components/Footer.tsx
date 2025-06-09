const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 text-center border-t border-white/10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} ShuHaRi Renewables. All Rights Reserved.
      </p>
      <p className="mt-2 text-xs text-gray-400">Email: info@shuhari.co.in | Call: +91 96195 96561</p>
    </footer>
  );
};

export default Footer;
