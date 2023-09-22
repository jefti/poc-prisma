import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export function errorHandler(error: Error, req:Request,res:Response,next:NextFunction){
    console.log(error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error: 'Erro interno no servidor'});
}