


export const reducer = (state,{type,payload})=>{
    switch(type)
    {
        case "add":{
            state.count=state.count+ Number(payload);
            return {...state};
        }
        case "sub":{
            state.count= state.count-Number(payload)
            return {...state};
        }
        case "mul":{
            state.count= state.count*Number(payload)
            return {...state};
        }
        case "div":{
            state.count= state.count/Number(payload)
            return {...state};
        }
        default :{
            if(payload){
                state.count = state.count+Number(payload);
                return {...state}
            }
            return state
        }
    }
    
}