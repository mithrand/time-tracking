/**
 * Created by Antonio on 26/02/2017.
 */

interface ITask {
    title: string;
    project: string;
    elapsed: number;
    id: string;
    runningSince?: number;
}

export default ITask;