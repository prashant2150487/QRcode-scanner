import React, { useState } from 'react'
import "./style.css"
import QRCode from 'react-qr-code'
const Qrcodegenerator = () => {
    const [inputVal, setInputVal] = useState("");
    const [qr, setQr] = useState("");


    console.log(inputVal)
    function genrateQr() {

        setQr(inputVal)
        console.log(inputVal)
        console.log(qr)
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='Enter somthing' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <button onClick={genrateQr} >Genrate</button>
            </div>
            <QRCode value={qr} />
        </div>
    )
}

export default Qrcodegenerator