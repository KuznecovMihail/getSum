const array = [1, [2], [3, [4, [5, 6, [7]]]]]

const flatten = (array = [null], depth = Infinity) => {
    let flag = true
    if (depth == Infinity){
        while(flag){
            array.forEach((element) => {
                count = 0
                if (Array.isArray(element)){
                    array = array.concat(element)
                    array.splice(array.findIndex(i => i == element), 1)
                    count++
                }
            });
            if(count == 0) flag = false
        }
    }
    else if(depth < 0 || !Number.isInteger(depth)) return console.error("Incorrect number")
    else{
        for(let level = 1; level <= depth; level++){
            array.forEach((element) => {
                if (Array.isArray(element)){
                    array = array.concat(element)
                    array.splice(array.findIndex(index => index == element), 1)
                }
            });
        }
    }   
    return array
}

console.log(flatten(array, 1))

const str = 'brad100milk133.21chokolate100.100.09';

const getSum = (str) =>{
    let arr = str.split(/[^0-9, ^.]/)
    arr = arr.filter((value) => value != '')
    let parseArr = arr.map((value) => {
        let parse = value.split('.')
        if (value.length > 3 && value.indexOf('.') == -1) return NaN
        if(((parse[parse.length - 1].length != 2 || parse[parse.length - 1] == '00') || parse[0].length > 3) && parse.length > 1) return NaN
        if(value.indexOf('.') === 0) return NaN
        for (let i = 1; i < parse.length - 1; i++){
            if(parse[i].length !== 3) return NaN
        }
        if (value.length > 6 && value.includes('.')){
            value = value.split('.')
            value[value.length - 1] = '.' + value[value.length - 1]
            value = value.join('')
        }
        value = +value
        
        return value
    })
    let sum = parseArr.reduce((acc, value) => acc + value, 0)
    return sum
}



console.log(getSum(str))