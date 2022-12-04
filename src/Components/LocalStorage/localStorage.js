const addToLs = (time) =>{
    let breakeTime = {}
    breakeTime["time"] = time
    localStorage.setItem("breakTimes", JSON.stringify(breakeTime))
}

const getTime = () =>{
    let breakeTimeLs = {};

    const storedTime = localStorage.getItem('breakTimes');
    if(storedTime){
        breakeTimeLs = JSON.parse(storedTime);
    }
    return breakeTimeLs
}

export {addToLs, getTime}