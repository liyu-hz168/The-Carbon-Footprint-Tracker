// const getTodayDate = (): string => {
//     const today = new Date();
//     return `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
// };

const getTodayDate = (): string => {
    return new Date().toISOString().slice(0, 10);
}
export { getTodayDate };