import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const user = {
    name: "Jane Doe",
    bio: "Web developer passionate about React and Tailwind CSS.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <UserProfile user={user} />
    </div>
  );
}

export default App;
