// components/ui/date-picker.tsx
"use client";

import * as React from "react";
import { format } from "date-fns";
// Importa los locales que necesites. 'es' para español, 'enUS' para inglés (u otros)
import { es, enUS } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- Importa useTranslation

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
    label?: string; // Aunque 'label' no se usa en este snippet, lo mantengo de tu código
}

export function DatePickerDemo({
    value,
    onChange,
    error,
    label,
}: DatePickerDemoProps) {
    const { i18n, t } = useTranslation(); // Obtén el objeto i18n y la función t

    const [isOpen, setIsOpen] = React.useState(false);
    const [isUserSelected, setIsUserSelected] = React.useState(false);

    // Mapea los códigos de idioma de i18n a los locales de date-fns
    const dateFnsLocale = React.useMemo(() => {
        switch (i18n.language) {
            case 'es':
                return es;
            case 'en':
                return enUS;
            // Añade más casos si usas otros idiomas (e.g., 'fr': return fr;)
            default:
                return enUS; // Un locale por defecto si el idioma no está mapeado
        }
    }, [i18n.language]); // Recalcula el locale cuando el idioma de i18n cambia

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
                        {value
                            ? format(value, "PPP", { locale: dateFnsLocale }) // <-- Pasa el locale dinámico aquí
                            : <span>{t("Pick a date")}</span> // <-- Usa t() para traducir "Pick a date"
                        }
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={value}
                        className="border-none shadow-none bg-background"
                        onSelect={handleDateChange}
                        locale={dateFnsLocale}
                    />
                </PopoverContent>
            </Popover>
            {error && (
                <p className="text-sm font-medium text-destructive">{error}</p>
            )}
        </div>
    );
}