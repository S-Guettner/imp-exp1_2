export const firstElement = (input) => {
    return input[0]
}

export const excludeLastElement = (input) => {
    return input.slice(0,(input.length-1))
}

export const lastElement = (input) => {
    return input.slice((input.length-1) , input.length)
}

export const excludeFirstElement = (input) => {
    return input.slice(1 , input.length)
}

export const removeElement = (inputArr, valueToRemove) => {
    const indexValueToRemove = inputArr.indexOf(valueToRemove)
    inputArr.splice(indexValueToRemove,1)
    return inputArr
}

export const removeDuplicates = (input) => {
    return [...new Set(input)]
}

export const arraySum = (input) => {
    let sum = 0
    input.forEach((number) => sum = sum + number)
    return sum
}

export const randomNumberBetweenTwoInputs = (num1,num2) => {
    return Math.floor(Math.random() * num2) + num1
}

export const firstLetterUppercase = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1)
}

export const stringUppercase = (input) => {
    return input.toUpperCase()
}

export const compareLastChar = (string1,string2) => {
    if(string1.charAt(string1.length-1) === string2.charAt(string2.length-1)){
        return true
    }else {
        return false
    }
}