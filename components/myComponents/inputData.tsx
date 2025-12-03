"use client"
import { CalendarDays } from "lucide-react";
import React, { useRef } from "react";
import { Input } from "../ui/input";

interface InputDataProps {
  name: string;
}

const InputData: React.FC<InputDataProps> = ({ name }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isIOS = /iPad|iPhone|iPod/.test(
    typeof navigator !== "undefined" ? navigator.userAgent : ""
  );

  const openPicker = () => {
    const el = inputRef.current;
    if (!el) return;

    if (el.showPicker && !isIOS) {
      el.showPicker();
      return;
    }

    // iOS fallback
    if (isIOS) {
      el.focus();
      return;
    }

    el.click();
  };

  return (
    <>
      <Input
        ref={inputRef}
        id={name}
        className="border-none outline-none shadow-none no-calendar-icon"
        placeholder="Rental date"
        type="datetime-local"
      />

      <button title="calendarButton" onClick={openPicker}>
        <CalendarDays className="cursor-pointer" />
      </button>
    </>
  );
};

export default InputData;
