// Cards.tsx
import React, { useState } from 'react';
import { Character } from "../../models/Characters.interface";

function Cards(props: {character: Character}) {
    const [modalOpen, setModalOpen] = useState(false);

    const selectColor = (status: string) => {
        const statusColor: { [key: string]: string } = {
            'Alive': 'Lime',
            'Dead': 'Black',
            'unknown': 'Gray',
            'Presumed dead': 'Red',
            'Alive, but transformed': 'Cyan',
            'Deceased': 'Brown',
            'Resurrected': 'Teal',
            'In a coma': 'Yellow',
        };
        return statusColor[status] || 'white';
    }

    return (
        <div>
            <div className="card bg-dark text-white">
                <div className="card-img d-flex justify-content-center pt-3">
                    <img className="border border-3 border-dark rounded-circle" src={props.character.image} alt={props.character.name} width={100}/>
                </div>
                <div className="card-body">
                    <p className="mb-0"><i className="bi bi-circle-fill" style={{ color: selectColor(props.character.status) }}></i> {props.character.status} {props.character.species}</p>
                    <p className="mb-0">Type: {props.character.type}</p>
                    <p className="mb-0">Gender: {props.character.gender}</p>
                    <p className="mb-0">Origin: {props.character.origin.name}</p>
                    <p className="mb-0">Location: {props.character.location.name}</p>
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" onClick={() => setModalOpen(true)}>
                            Open Modal
                        </button>
                    </div>
                </div>
                <div className="card-footer bg-secondary">
                    <p className="fw-bold mb-0 text-center">{props.character.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;
