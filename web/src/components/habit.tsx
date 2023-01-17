interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return(
        <p>{props.completed}</p>
    )
}