import { add,sub,mul,div } from "./action.type"
export const addition = (value)=>({type:add,payload:value})
export const substraction = (value)=>({type:sub,payload:value})
export const multiplication = (value)=>({type:mul,payload:value})
export const dividation = (value)=>({type:div,payload:value})
