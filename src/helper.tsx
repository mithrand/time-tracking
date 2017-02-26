/**
 * Created by Antonio on 26/02/2017.
 */

import * as moment from 'moment';

export class Helper {
    public static formatElapsedTime(elapsedTime: number): string {
        return moment().millisecond(elapsedTime).format('HH:mm:ss');
     }
}

export default Helper;