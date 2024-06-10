import React from 'react'
import { Label } from '../types'
import { useGetData } from '../context/useGetData'

const useGetTotalCount = (key: Label) => {

    const { data } = useGetData();

    const rows = data?.AuthorWorklog?.rows;
    const total = rows?.reduce((acc, curr) => {
        const requiredObj = curr.totalActivity?.find(item => item.name === key)
        if (requiredObj && requiredObj.value) {
            return acc + Number(requiredObj.value)
        }
    }, 0) as number

    return total;
}

export default useGetTotalCount