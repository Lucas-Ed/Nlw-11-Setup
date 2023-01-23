import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";
import Swal from 'sweetalert2'

const availableWeekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
];

export function NewHabitForm() {
    const [title, setTitle] = useState("");
    const [weekDays, setWeekDays] = useState<number[]>([]);

async function createNewHabit(event: FormEvent) {
    event.preventDefault();
    if (!title || weekDays.length === 0) {
        return;
    }
    await api.post("habits", {
        title,
        weekDays,
    });
    setTitle("");
    setWeekDays([]);

    // alert("Hábito criado com sucesso!");
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Hábito criado com sucesso!'
    })
}

function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
        const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);
        setWeekDays(weekDaysWithRemovedOne);
    } else {
        const weekDaysWithAddedOne = [...weekDays, weekDay];
        setWeekDays(weekDaysWithAddedOne);
    }
}

return (
    <form onSubmit={createNewHabit} className="w-full min-h-scren flex flex-col mt-6">
        <label className="font-semibold leading-tight" htmlFor="title">
        Qual seu comprometimento?
        </label>
    <input
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-zinc-900"
        type="text"
        id="title"
        value={title}
        placeholder="ex.: Exercícios, beber água, etc...?"
        autoFocus
        onChange={(event) => setTitle(event.target.value)}
    />

    <label className="w-full min-h-scren flex flex-col mt-6" htmlFor="">
        Qual a recorrência?
    </label>

    <div className="mt-3 flex flex-col gap-2">
        {availableWeekDays.map((weekDay, index) => {
            return (
            <Checkbox.Root
                key={index}
                checked={weekDays.includes(index)}
                className="flex items-center gap-3 group focus:outline-none"
                onCheckedChange={() => handleToggleWeekDay(index)}
            >
            <div className="transition-colors h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-300 group-focus:outline-none group-focus:ring-2 group-focus:ring-violet-700 group-focus:ring-offset-2 group-focus:ring-offset-background">
                <Checkbox.Indicator>
                    <Check size={20} className="text-white" />
                </Checkbox.Indicator>
            </div>
                <span className="text-white leading-tight">{weekDay}</span>
            </Checkbox.Root>
        );
        })}
    </div>

<button
        className="mt-6 rounded-lg p-4 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500 gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        type="submit"
    >
        <Check size={20} weight="bold" />
        Confirmar
    </button>
    </form>
);
}