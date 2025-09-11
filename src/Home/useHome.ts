import { useState } from 'react';

type Task = {
    id: number;
    title: string;
    completed: boolean;
};

export default function useHomeLogic() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    const handleAddTask = () => {
        if (!newTask.trim()) return;
        const task: Task = {
            id: Date.now(),
            title: newTask,
            completed: false,
        };
        setTasks((prev) => [...prev, task]);
        setNewTask('');
    };

    const handleToggleTask = (id: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return {
        tasks,
        newTask,
        setNewTask,
        totalTasks,
        completedTasks,
        pendingTasks,
        handleAddTask,
        handleToggleTask,
        handleDeleteTask,
    };
}
