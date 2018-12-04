import { Request, Response } from 'express'

import Project from "model/project.model";

export const project = (req: Request, res: Response) => {
    const projects = Project.find()

    res.status(200).json({projects: projects})
}