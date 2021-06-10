import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Chien = () => {
    const { id } = useParams();
    const [chien, setChien] = useState(null)

    useEffect(() => {
        const fetchUnChien = async () => {
            const response = await fetch(`http://localhost:8080/chien/${id}`)
            const json = await response.json()

            setChien(json)
        }

        fetchUnChien()
    }, [])

    if (!chien)
        return <p>Chargement...</p>

    return (
        <div className="card">
            <div className="chien" key={chien.id}>
                <img className="chienPhoto" src={chien.photo} alt={chien.race} />
                <div>
                    <h1>{chien.race}</h1>
                    <p className="description"><span>Pays : </span>{chien.pays}</p>
                    <p className="description"><span>Taille : </span>{chien.taille}</p>
                    <p className="description"><span>Poile : </span>{chien.poile}</p>

                </div>
            </div>
        </div>
    )
}

export default Chien