import { reactive, ref } from "vue"

type TStore = {
    tasks: TTasks
    addTask: (task: string) => void
    removeTask: (task: TTask) => void
}

export type TTasks = {
    task: TTask[]
    inWork: TTask[]
    expectation: TTask[]
    finish: TTask[]
}

export type TTask = {
    id: number
    nameTask: string
}

export const store: TStore = reactive({
    tasks: {
        task: [{ id: 1, nameTask: "taskOne" }] as TTask[],
        inWork: [{ id: 2, nameTask: "taskOne" }] as TTask[],
        expectation: [{ id: 3, nameTask: "taskOne" }] as TTask[],
        finish: [{ id: 4, nameTask: "taskOne" }] as TTask[],
    },

    addTask(task: string) {
        const currentTask: TTask = {
            id: task.length + 1,
            nameTask: task,
        }

        this.tasks.task.push(currentTask)
    },

    removeTask(task: TTask) {
        this.tasks.task.push(task)
    },
})
