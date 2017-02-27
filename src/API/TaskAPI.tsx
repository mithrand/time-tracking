/**
 * Created by amunoz on 27/02/2017.
 */

import ITask from '../Model/ITask';

interface ICallBack {
    ( result?: ITask[] ) : ITask[];
}

export interface ITaskAPI {
    getTasks( onSucces: ICallBack ): Promise <any>;
}

export class TaskAPI implements ITaskAPI {

    public URL_GETTASK = '/api/timers';

    constructor() {
        this.URL_GETTASK = '/api/timers';
    };

    public getTasks = (onSucces: ICallBack): Promise <any> => {
        return  fetch(this.URL_GETTASK, {headers: {Accept: 'application/json'}})
                .then(this.checkStatus)
                .then(this.parseJSON)
                .then(onSucces);
    };

    public  checkStatus = (response: any): any  => {
        if (response && response.status >= 200 && response.status < 300) {
            return response;
        }else {
            const error = new Error(`HTTP Error ${response.request_seq} ${response.message}`);
            console.log(error);
            throw error;
        }
    };

    public parseJSON = (response: any): ITask[] => {
        let tasks: ITask[] = [];

        if (response && response.body ) {
            tasks = JSON.parse(response.body);
        }

        return tasks;
    };
}

export default ITaskAPI;
