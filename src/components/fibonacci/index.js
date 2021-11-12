import React, { useState } from 'react'
import Logo from '../../assets/images/logo.png'
import FibChecking from './FibChecking';

const Fibonacci = () => {

    const [list, setList] = useState([])
    const [error, setError] = useState("");
    const [fibcheck, setFibCheck] = useState([]);

    const validation = {
        isNumber: function (str) {
            var pattern = /^\d+$/;
            return pattern.test(str);
        }
    }

    const handelSubmitList = (e) => {
        e.preventDefault()

        const { value } = e.target.number

        if (validation.isNumber(value)) {
            if (value === "0") {
                setError("Please enter a number other than zero.")
            }
            else if (value === "1") {
                setList([0])
            }
            else {
                var fib = [0, 1];
                for (var i = fib.length; i < value; i++) {
                    fib[i] = fib[i - 2] + fib[i - 1];
                }
                setList(fib)
            }
        }
        else {
            setError("Only entering a number is allowed")
        }
    }

    const handelSubmitIsFib = (e) => {
        e.preventDefault()
        if (validation.isNumber(e.target.number.value)) {
            var isOK = "Fibonacci Sayısıdır";
            var isNot = "Fibonacci Değil";
            var num = parseInt(e.target.number.value)
            if (num === 0) { return setFibCheck({ is: [1], status: isOK, statusBool: true }) }
            if (num === 1) { return setFibCheck({ is: ['2 ve 3'], status: isOK, statusBool: true }) }
            var total;
            var fibSeq = [0, 1], i = 1, fibSeqL;
            for (i; i <= num; i = (fibSeq[fibSeqL - 1] + fibSeq[fibSeqL])) {
                fibSeq.push(i);
                fibSeqL = fibSeq.length - 1;
                total = fibSeq.length
            }
            var checkStatus = fibSeq[fibSeqL] === num ? isOK : isNot
            var statusBool = fibSeq[fibSeqL] === num
            setFibCheck({ is: [total], status: checkStatus, statusBool })
        } else {
            setError("Only entering a number is allowed")
        }
    }


    const renderList = list.map((item, index) => {
        var listNumber = index + 1
        return (
            <div key={listNumber}>
                <span className="text-xs">{listNumber}</span>
                <span>. {item}</span>
            </div>
        )
    })

    const renderError = error ? (
        <div className="w-full bg-red rounded-2xl p-3 mb-5 text-center text-white font-bold text-md shadow-3xl">
            <strong>Error: </strong> {error}
        </div>
    ) : null;

    return (
        <>
            <div className="flex justify-center mb-10 text-white text-3xl">
                <img src={Logo} alt="logo" className="w-48 sm:w-64 shadow-2xl" />
            </div>
            {renderError}
            <div className="flex flex-col sm:flex-col lg:flex-row space-y-5 sm:space-y-5 lg:space-y-0 lg:space-x-3 mb-5">

                <div className="w-full backdrop-filter backdrop-blur-md bg-glass-1 shadow-1 rounded-3xl p-5">
                    <div className="flex flex-col items-center">
                        <div className="border border-solid border-white px-2 py-2 rounded-2xl mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h1 className="uppercase text-base text-center sm:text-lg font-medium text-white">
                            Yazacağınız sayı fibonaccinin bir elemanı mı?
                        </h1>
                    </div>
                    <form
                        onSubmit={handelSubmitIsFib}
                        className="space-y-4 sm:space-y-0 flex justify-center flex-col sm:flex-row mt-5 mb-5" autoComplete="off">
                        <label>
                            <input className="focus:outline-none bg-glass-2 hover:bg-glass-3 shadow-2 w-full sm:w-80 text-white px-3 py-2 rounded-2xl"
                                type="text"
                                name="number"
                                placeholder="Please enter a number ..." />
                        </label>
                        <button type="submit" className="ml-0 sm:ml-2 shadow-2 text-white px-5 py-2 focus:outline-none bg-black2 hover:bg-black rounded-2xl">Submit</button>
                    </form>
                    <div className="p-3 bg-glass-2 shadow-3xl overflow-x-auto w-full text-white flex justify-center text-lg overflow-y-auto h-52 font-light rounded-3xl">
                        <div className="flex flex-col text-center">
                            <div className="uppercase font-light">r e s u l t</div>
                            <FibChecking fib={fibcheck} />
                        </div>
                    </div>
                </div>

                <div className="w-full backdrop-filter backdrop-blur-md bg-glass-1 shadow-1 rounded-3xl p-5">
                    <div className="flex flex-col items-center">
                        <div className="border border-solid border-white px-2 py-2 rounded-2xl mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white opacity-80" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h1 className="uppercase text-base text-center sm:text-lg font-medium text-white">
                            Kaçıncı fibonacci maddesine kadar gösterilsin?
                        </h1>
                    </div>
                    <form
                        onSubmit={handelSubmitList}
                        className="space-y-4 sm:space-y-0 flex justify-center flex-col sm:flex-row mt-5 mb-5" autoComplete="off">
                        <label>
                            <input className="focus:outline-none bg-glass-2 hover:bg-glass-3 shadow-2 w-full sm:w-80 text-white px-3 py-2 rounded-2xl"
                                type="text"
                                name="number"
                                placeholder="Please enter a number ..." />
                        </label>
                        <button type="submit" className="ml-0 sm:ml-2 shadow-2 text-white px-5 py-2 focus:outline-none bg-black2 hover:bg-black rounded-2xl">Submit</button>
                    </form>
                    <div className="p-3 bg-glass-2 shadow-3xl overflow-x-auto w-full text-white flex justify-center text-lg overflow-y-auto h-52 font-light rounded-3xl">
                        <div className="flex flex-col text-center">
                            <div className="uppercase font-light">r e s u l t</div>
                            {renderList}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fibonacci
