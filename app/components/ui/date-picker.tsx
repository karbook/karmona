// components/ui/date-picker.tsx
"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/utils/misc";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface DatePickerDemoProps {
  value?: Date;
  onChange: (date?: Date) => void;
  error?: string;
  label?: string;
}

export function DatePickerDemo({
  value,
  onChange,
  error,
  label,
}: DatePickerDemoProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isUserSelected, setIsUserSelected] = React.useState(false);

  React.useEffect(() => {
    if (value === undefined) {
      setIsUserSelected(false);
    }
  }, [value]);

  const handleDateChange = (date?: Date) => {
    onChange(date);
    if (date !== undefined) {
      setIsUserSelected(true);
    } else {
      setIsUserSelected(false);
    }
    setIsOpen(false);
  };
  const isEmptyState = value === undefined || (value !== undefined && !isUserSelected);


  return (
    <div className="flex flex-col gap-2 space-y-2">
      <Popover
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <PopoverTrigger asChild>
          <Button
            variant="date"
            data-empty={isEmptyState}
            className={cn(
              "w-full justify-start text-left font-semibold",
              error && "border-destructive text-destructive",
              "text-base sm:text-lg md:text-xl lg:text-3xl",
              "data-[empty=true]:text-gray-800 dark:data-[empty=true]:text-[#98a6b5]",
              "text-button-date-foreground",
              "h-17 sm:h-18 md:h-16 lg:h-16"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? format(value, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={value}
            className="border-none shadow-none bg-background"
            onSelect={handleDateChange}
          />
        </PopoverContent>
      </Popover>
      {error && (
        <p className="text-sm font-medium text-destructive">{error}</p>
      )}
    </div>
  );
}