export const motionTheme = {
    dropdown: {
        initial: {
        opacity: 0,
        scale: 0.9,
        y: -10,
        },
        animate: {
        opacity: 1,
        scale: 1,
        y: 10,
        },
        exit: {
        opacity: 0,
        scale: 0.95,
        y: -10,
        },
        transition: {
        duration: 0.2,
        },
    },

    toast: {
        initial: {
        opacity: 0,
        scale: 0.8,
        y: 20,
        },
        animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        },
        exit: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        },
    },

    modal: {
        initial: {
        opacity: 0,
        scale: 0.8,
        },
        animate: {
        opacity: 1,
        scale: 1,
        },
        exit: {
        opacity: 0,
        scale: 0.8,
        },
    },

    card: {
        whileHover: {
        scale: 1.03,
        y: -6,
        },

        whileTap: {
        scale: 0.98,
        },

        transition: {
        type: "spring",
        stiffness: 300,
        damping: 18,
        },
    },
};