export default class Util {
    static intRandom(min: number, max: number): number {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    static setPageOverflow(value = true): void {
        document.getElementsByTagName('body')[0].style.overflow = value ? 'auto' : 'hidden';
        document.getElementsByTagName('html')[0].style.overflow = value ? 'auto' : 'hidden';
    }
}