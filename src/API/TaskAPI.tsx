/**
 * Created by amunoz on 27/02/2017.
 */

import ITask from '../Model/ITask';
import 'whatwg-fetch';

export interface ITaskAPI {
    getTasks(): Promise <ITask[]>;
    deleteTask(data: string): Promise<Response>;
    updateTask(data: ITask): Promise<ITask[]>;
    createTask(data: ITask): Promise <ITask[]>;
}

export class TaskAPI implements ITaskAPI {

    public URL_API: string;

    constructor() {
        this.URL_API = '/api/timers';
    };

    public getTasks = (): Promise<ITask[]> => {
        return  fetch(this.URL_API, {headers: {Accept: 'application/json'}})
                .then(this.checkStatus)
                .then(this.parseJSON);

    };

    public deleteTask = (data: string ): Promise<Response> => {
        return  fetch(this.URL_API, {
            method: 'delete',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
                .then(this.checkStatus)
                .then(this.parseJSON);
    };

    public updateTask = (data: ITask ): Promise<ITask[]> => {
        return  fetch(this.URL_API, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
                .then(this.checkStatus)
                .then(this.parseJSON);
    };

    public createTask = (data: ITask ): Promise<ITask[]> => {
        return  fetch(this.URL_API, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(this.checkStatus)
            .then(this.parseJSON);
    };

    public checkStatus = (res: Response): Response => {
        const error = new Error(`HTTP Error ${res.status} ${res.statusText}`);
        if (res && res.status >= 200 && res.status < 300) {
            return res;
        }else {
            console.log(error);
            throw error;
        }
    };

    public parseJSON = (res: Response): any => {
        return res.json();
    };
}

export default ITaskAPI;
