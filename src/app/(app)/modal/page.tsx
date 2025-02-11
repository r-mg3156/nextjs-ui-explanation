"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FoldingInfoDialog from "../components/FoldingInfoDialog";
import PageTitle from "../components/PageTitle";

export default function ModalPage() {
  const [name, setName] = useState("Pedro Duarte");
  const [username, setUsername] = useState("@peduarte");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="relative min-h-screen w-full">
      <PageTitle>モーダル</PageTitle>
      <div className="flex justify-center mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <FoldingInfoDialog>
        <p className="text-xl ml-4 text-orange-500">メリット</p>
        <p className="text-xl ml-4">
          任意のタイミングで、背景にある本のページに自然に戻ることができる
        </p>
        <p className="text-xl ml-4 text-orange-500">デメリット</p>
        <p className="text-xl ml-4">
          子ウィンドウの操作が完了するまで他の操作が制限されるため、煩わしく感じる場合がある
        </p>
        <p className="text-xl ml-4 text-orange-500">ポイント</p>
        <p className="text-xl ml-4">
          一つの処理に集中して欲しい特別な状態であることを明示するために、親ウィンドウを暗くするのが一般的
        </p>
      </FoldingInfoDialog>
    </div>
  );
}
