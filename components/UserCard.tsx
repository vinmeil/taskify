"use client";

import React, { useMemo } from "react";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { IUser } from "@/lib/database/models/user.model";
import UserDeleteModal from "./UserDeleteModal";
import { FaEdit } from "react-icons/fa";
import EditUserForm from "./EditUserForm";

const UserCard = ({ user }: { user: IUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const router = useRouter();

  const rerouteToMember = () => {
    router.push(`/member/${user._id}`);
  };

  return (
    <>
      <div
        onDoubleClick={rerouteToMember}
        className="min-w-full min-h-[10vh] max-h-[10vh] flex bg-white shadow-xl rounded-2xl custom-shadow cursor-pointer"
      >
        <span className="bg-accent rounded-l-2xl w-[40px] flex-shrink-0"></span>
        <div className="rounded-r-2xl flex flex-col p-10 overflow-hidden w-full">
          <div className="flex gap-3 items-center justify-between h-full w-full">
            <p className="font-bold text-2xl max-w-full">{user.name}</p>
            <div className="h-fit w-fit items-center justify-center flex gap-6">
              <button
                type="button"
                className="items-center justify-center py-2 px-6 bg-[#2fd42a] text-background rounded-lg flex gap-2 text-white opacity-80"
                onClick={() => setIsEditFormOpen(true)}
              >
                <FaEdit size={24} />
                <p>Edit</p>
              </button>
              <button
                type="button"
                className="items-center justify-center px-6 py-2 bg-red-500
                text-background rounded-lg flex gap-2 text-white opacity-80"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <FaRegTrashAlt size={16} />
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute">
      <UserDeleteModal isOpen={isOpen} setIsOpen={setIsOpen} user={user}/>
      <EditUserForm isOpen={isEditFormOpen} setIsOpen={setIsEditFormOpen} user={user}/>
      </div>
    </>
  );
};

export default UserCard;
