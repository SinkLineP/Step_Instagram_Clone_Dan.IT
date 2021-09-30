import { useEffect } from 'react';
import Header from '../components/header';
// import { doesUsernameExist } from '../services/firebase';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Log In-Instagram';
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <form method="POST">
          <input
            aria-label="Enter your email address"
            type="text"
            placeholder="Email address"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          />
          <input
            aria-label="Enter your password"
            type="password"
            placeholder="Password"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
          />
          <button type="submit" className="bg-blue-medium text-white w-full rounded h-8 font-bold">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
