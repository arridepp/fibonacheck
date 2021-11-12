import React from 'react'

const FibChecking = ({ fib }) => {
    if (fib.statusBool) {
        return (
            <div className="flex text-2xl">
                {fib.is ? (<strong className="font-bold pr-2">{fib.is}.</strong>) : null}
                <span>{fib.status}</span>
            </div>
        )
    } else if (!fib.statusBool && fib.status === "Fibonacci Değil") {
        return (
            <div className="flex text-2xl">
                <span>{fib.status}</span>
            </div>
        )
    }
    else {
        return null;
    }
}
export default FibChecking
