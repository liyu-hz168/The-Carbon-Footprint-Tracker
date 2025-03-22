const getTodayDate = (): string => {
    const today = new Date();
    return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
};

export { getTodayDate };