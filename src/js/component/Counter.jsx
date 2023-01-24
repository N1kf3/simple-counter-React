import React from "react";




const Number =(props)=>{
    

    return (
        <div id="num">{props.contador}</div>
    )
}



const Counter = (props)=>{
// para poder dividir los segundos en sus unidades para actualizar el campo q se necesita
    let tiempo = props.contador;
    let unidad =0;
    let decena = 0;
    let centena =0;
    let miles= 0;
    if (tiempo >= 10 && tiempo <100){
        decena = Math.floor(tiempo/10);
        unidad = tiempo %10
    }else if (tiempo >=100 && tiempo <1000){
        centena = Math.floor(tiempo/100);
        decena = Math.floor((tiempo/10)%10) ;
        unidad = tiempo %10;
    }else if (tiempo >= 1000){
        miles=Math.floor(tiempo/1000);
        centena=Math.floor((tiempo/100)%10);
        decena=Math.floor((tiempo/10)%10) ;
        unidad = tiempo %10;

    } else unidad = tiempo;

    return (
        <div className="fondo">
            <div className="tarjeta">
            <i className="fa-regular fa-clock"></i>
            </div>
            <div className="tarjeta">
                <Number contador={0}/>
            </div>
            <div className="tarjeta">
                <Number contador={miles}/>
            </div>
            <div className="tarjeta">
                <Number contador={centena}/>
            </div>
            <div className="tarjeta">
                <Number contador={decena}/>
            </div>
            <div className="tarjeta">
                <Number contador={unidad}/>
            </div>
        </div>
    )
};

export default Counter;