import { useEffect, useState } from "react"

const useDoctors = ()=>{
    const [doctors, setDoctors] = useState();
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/OsmanRana/mydb/main/db')
            .then(res => res.json())
            .then(data => setDoctors(data))
    },[])
    return [doctors, setDoctors]
}

export default useDoctors;