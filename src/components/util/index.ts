
export const isDef = (val: any) => {
    return val !== undefined && val !== null;
}

export const isObject = (val: any) => {
   return isDef(val) && toString.call(val) == '[object Object]'
}

export const isPromise = (val: any) => {

   // return 
}

// export function isPromise(val) {
//     return isObject(val) && isFunction(val.then) && isFunction(val.catch);
//   }
