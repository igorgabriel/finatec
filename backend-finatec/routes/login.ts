import { Request, Response } from 'express'
import User, { IUser } from '../model/user.model';
import { Signin } from '../model/signin.model';
import * as jwt from 'jsonwebtoken'

export const login = (req: Request, res: Response) => {
    const signin: Signin = req.body
    if(isValid(signin)) {
        const user: any = User.findOne({email: signin.username})
        const token = jwt.sign({sub: user.email, iss: 'finatec'}, 'finatec-password')
        res.status(200).json({name: user.name, email: user.email, accessToken: token})
    } else {
        res.status(403).json({message: 'Dados inválidos.'})
    }
}

function isValid(signin: Signin): boolean {
    if(!signin) {
        return false
    }
    const user = User.findOne({
        email: signin.username,
        password: signin.password
    })

    return user !== undefined
}