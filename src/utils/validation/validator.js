export const requiredField = value=> {
    if(value) return undefined
    return "Field is required"
}

export const maxLengthCreator = (maxLength)=> (value)=>{
    if(value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}
export const MaxLengthIs10 = maxLengthCreator(10)
export const MaxLengthIs100 = maxLengthCreator(100)