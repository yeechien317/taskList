import { useState } from 'react';

export function useSidebar() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };

    return { open, toggleDrawer };
}
