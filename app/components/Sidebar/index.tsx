import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[#021350] text-white w-64 p-4 flex flex-col min-h-screen rounded-br-xl">
      {/* Logo or user picture */}
      <div className="flex items-center justify-center h-1/3">
        {/* Place logo picture here */}
        <img
          src="/path/to/logo-picture.jpg"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
      </div>
      {/* Navigation links */}
      <div className="flex flex-col justify-between flex-grow p-6">
        <ul className="space-y-2">
          <li>
            <Link href="/">
              <div className="block py-2 hover:text-blue-500">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/inbox">
              <div className="block py-2 hover:text-blue-500">Inbox</div>
            </Link>
          </li>
          <li>
            <Link href="/tasks">
              <div className="block py-2 hover:text-blue-500">Tasks</div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div className="block py-2 hover:text-blue-500">Profile</div>
            </Link>
          </li>
        </ul>
        {/* User info */}
        <div className="mt-4">
          {/* Place user picture here */}
          <img
            src="/path/to/user-picture.jpg"
            alt="User"
            className="w-12 h-12 rounded-full mx-auto"
          />
          <p className="mt-2 text-center">User Name</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
