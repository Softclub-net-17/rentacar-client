"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export function LoginDialog({ openLogin, setOpenLogin }) {
  const handleGoogleLogin = () => {
    // 👉 инҷо логикаи real Google login-атро гузор:
    // мисол: signIn("google")
    console.log("Google login");
  };

  const handleAppleLogin = () => {
    // 👉 инҷо логикаи real Apple login-атро гузор:
    // мисол: signIn("apple")
    console.log("Apple login");
  };

  return (
    <Dialog open={openLogin}>
      
      <DialogTrigger></DialogTrigger>

      <DialogContent className="max-w-sm rounded-2xl p-6">
        <DialogHeader className="space-y-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Войти</DialogTitle>
                {/* <DialogClose
                onClick={() => setOpenLogin(false)}
                className="rounded-full p-1 hover:bg-muted"
                >
                <X className="w-4 h-4" />
                </DialogClose> */}
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            Войдите в аккаунт, чтобы продолжить.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex w-[100%] items-center  flex-col gap-3">
          
          <Link
            href={"/register"}
            className="p-[10px] text-center w-[300px] hover:border-[#5937e0] hover:text-[#5937e0] border-2 transition-all duration-300 hover:border-2 border-[#5937e0] hover:bg-white hover:border-2 rounded-[10px] px-[20px] text-white bg-[#5937e0]"
          >
            Зарегистрироваться
          </Link>
          <Link
            href={"/login"}
            className="p-[10px] font-bold text-[#5937e0] border-[#5937e0] text-center w-[300px]  hover:bg-[#806fc7b3] border-2 transition-all duration-300 hover:text-white px-[20px] rounded-[10px]"
          >
            Войти
          </Link>
        </div>

        {/* Агар хоҳӣ, поёнаш матн/ссылкаҳо */}
        {/* <p className="mt-4 text-xs text-muted-foreground text-center">
          Продолжая, вы соглашаетесь с нашими Условиями и Политикой конфиденциальности.
        </p> */}
      </DialogContent>
    </Dialog>
  );
}
