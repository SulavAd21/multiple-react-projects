import { useEffect, useState } from "react";


export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000')

    useEffect(() => {
        if (typeOfColor === 'rgb') {
            randomRgb()
        } else {
            randomHex()
        }
    }, [typeOfColor])

    function randomHex() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, , 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)]
        }
        setColor(hexColor);
    }


    function randomRgb() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r},${g},${b})`);
        setTypeOfColor('rgb')
    }

    return <div style={{
        width: '100vw',
        height: "100vh",
        background: color,
    }}>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor === 'hex' ? randomHex : randomRgb}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            color: "fff",
            fontSize: '60px',
            marginTop: '50px',
            flexDirection:"column",
            gap:"20px",
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color' : "HEX color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>

};