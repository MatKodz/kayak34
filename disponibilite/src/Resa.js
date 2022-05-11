import React from "react";
import listingDisponibilite from "./data.json"

let gears = [
    {"libelle" : 'Kayak Simple', "illustration" : "images/single_kayak.png"},
    {"libelle" : 'Kayak Double', "illustration" : "images/double_kayak.png"},
    {"libelle" : 'Paddle', "illustration" : "images/paddle.png"}
];


function FormResa() {
    const [gearsByAgency,setGearsByAgency] = React.useState([]); 
    const [agency,setAgency] = React.useState("");

    let listEquipements = document.querySelector("#listingEquipements");

    React.useEffect( () => {
        if(listEquipements) {
            for (let i = 0; i < listEquipements.children.length; i++) {
                setTimeout(function() {
                    listEquipements.children[i].className = "enter";
                },
                300*(i+1))
              }
        }    
    },[agency])

    const handleClickAgence = (e) => {
        const [newGearsByAgency] = listingDisponibilite.disponibilites.filter( elt => elt.idAgence == e.target.value)
        setGearsByAgency( prevState => [...newGearsByAgency.disponibiliteAgence]);
        setAgency(prevState => newGearsByAgency.nomAgence )
        if(agency) {
            for (let i = 0; i < listEquipements.children.length; i++) {
                listEquipements.children[i].className = "exit";
            }
        }
        
        

    }
    return <div className="wrapper-resa"> 
         <span className="close" onClick={ () => document.getElementById("app-resa").style.display = "none" }>X</span>
        <div className="wrapper-dispo">
                <h4 className="my-4">
            Disponibilité : 
            </h4>
            <input type="date" name="" id="" readOnly value="2022-05-24"/>
         </div>
        <div className="">
        {listingDisponibilite.maj}
        </div>
        <form className="">
        <div>
            <h4 className="my-4">
                Choisir un lieu : {agency}
            </h4>
        </div>
        <div className="agences d-flex justify-content-between">
            {
                listingDisponibilite.disponibilites.map( (agence,i) => 
                    <div key={i}>
                    <input className="btn-check" type="radio" name="agence" id={"ag" + agence.idAgence} onClick={handleClickAgence} value={agence.idAgence} />
                    <label className="btn btn-outline-primary" htmlFor={"ag" + agence.idAgence}>{agence.nomAgence}</label>    
                    </div>
                    )
            }  
        </div>
        <div className="equipements d-flex justify-content-between py-4" id="listingEquipements">
            {
            gearsByAgency.map( (nbGear,i) => 
            <div key={i}>
                <input className="" type="radio" name="eqt" disabled={nbGear ? false : true} id={"eq" + i} value={"eq" + i} />
                <label className="p-1" htmlFor={"eq" + i}> {gears[i].libelle} <span className="badge bg-primary ">{nbGear}</span> 
                <div className="media"><img src={gears[i].illustration} className="border" /></div>
                </label>
            </div>
            )
            }
        </div>
        <button className="btn-booking" type="submit">Réserver dès maintenant</button>
        </form>
    </div>;
}

export default FormResa