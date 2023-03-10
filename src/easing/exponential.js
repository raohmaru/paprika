export const Exponential = {
    In(t) {
        return t === 0 ? 0 : Math.pow(1024, t - 1);
    },
    Out(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, - 10 * t);
    },
    InOut(t) {
        if (t === 0) {
            return 0;
        }
        if (t === 1) {
            return 1;
        }
        if ((t *= 2) < 1) {
            return 0.5 * Math.pow(1024, t - 1);
        }
        return 0.5 * (- Math.pow(2, - 10 * (t - 1)) + 2);
    }
};
