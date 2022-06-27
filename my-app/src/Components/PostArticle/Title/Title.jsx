import "./title.css"
// import { useState } from "react"

export default function Title() {
    // const [btnColor,setBtnColor] = useState("var(--red-color)")
    // const [btnBackColor,setBtnBackColor]= useState("var(--white-color)")
    // function handleChangeColor(){
    //     setBtnBackColor("var(--red-color)")
    //     setBtnColor("var(--white-color)")
    // }

    return (
        <>
            <div className='title-wrap'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <button className='btn-like'>Like</button>
            </div>
            <hr />
        </>
    )
}
