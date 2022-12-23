import { black } from 'console-log-colors';

const printf = (...args: any) => console.log(...args);
printf.error = (...args: any) => printf(black.bgRed(args));
printf.warn = (...args: any) => printf(black.bgYellow(args));
printf.success = (...args: any) => printf(black.bgGreen(args));

global.printf = printf;

export default printf;