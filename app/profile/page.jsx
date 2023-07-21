"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setprompts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/posts`);
      const data = await response.json();

      setprompts(data);
    };

    if (session?.user.id) fetchPrompts();
  }, []);

  const handleEdit = (prompts) => {
    router.push(`/update-prompt?id=${prompts._id}`);
  };

  const handleDelete = async (prompt) => {
    const isConfirmed = confirm("Are you sure you want to delete prompt?");

    if (isConfirmed) {
      try {
        await fetch(`/api/prompt/${prompt._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPrompts = prompts.filter((p) => p._id !== prompt.id);
        setprompts(filteredPrompts);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
