import React from "react";
import { useGetUsersQuery } from "../../services/authApi.ts";
import { useAppDispatch } from "../../../../app/hooks.ts";
import { setUser, setAuthMethod } from "../../authSlice.ts";
import { useState } from "react";
import {
  UserList,
  UserItem,
  SubmitButton,
} from "./JSONUserDropdown.styled.tsx";

const JsonUserDropdown = () => {
  const [showUsers, setShowUsers] = useState(false);
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const dispatch = useAppDispatch();

  const handleSelect = (user: any) => {
    dispatch(setUser(user));
    dispatch(setAuthMethod("jsonplaceholder"));
  };

  return (
    <div>
      <SubmitButton onClick={() => setShowUsers((prev) => !prev)}>
        {showUsers ? "Hide Test Accounts" : "Use Test Account"}
      </SubmitButton>

      {showUsers && (
        <>
          {isLoading && <p>Loading users...</p>}
          {isError && <p>Failed to load test users</p>}
          <UserList>
            {users?.map((user) => (
              <UserItem key={user.id}>
                <button onClick={() => handleSelect(user)}>
                  <img
                    src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${
                      user?.username ?? user?.name ?? "user"
                    }`}
                    alt="User Avatar"
                  />
                  {user.name} ({user.email})
                </button>
              </UserItem>
            ))}
          </UserList>
        </>
      )}
    </div>
  );
};

export default JsonUserDropdown;
