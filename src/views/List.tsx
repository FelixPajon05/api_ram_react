import { useEffect, useState } from 'react';
import './List.css';
import Cards from './Components/Cards/Cards';
import { Character } from './models/Characters.interface';
import Loaders from './Components/loaders/Loaders';

function Pagination(props: any) {
    return (
        <header className='d-flex justify-content-between align-items-center mt-2'>
            <span className="bg-primary p-2 rounded" role="button"
                onClick={() => props.setPage(props.page-1)}>
                <i className="bi bi-arrow-left-circle-fill"></i>
            </span>
            <span className="bg-primary px-5 rounded">Page: {props.page}</span>
            <span className="bg-primary p-2 rounded" role="button"
                onClick={() => props.setPage(props.page+1)}>
                <i className="bi bi-arrow-right-circle-fill"></i>
            </span>
        </header>
    )
}

function Search(props: any) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className='d-flex justify-content-center'>
            <h5 className='text-white'>{props.search}</h5>
            <input 
                type="text"
                placeholder='Search...'
                value={searchTerm}
            />
        </div>
    );
}


function List() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState<Character[]>([]);
    const url: string = `https://rickandmortyapi.com/api/character?page=${page}`;

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(url);
                const data = await response.json();
                console.log(data.results);
                console.log(data.info.pages);
                if (page <= 0)
                    {setPage(1);}
                if (data.results == undefined)
                    location.reload();
                setCharacters(data.results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

    fetchData()
}, [page]);

    return (
        <>
            <div className="container">
                {
                    <Search search={search} setSearch={setSearch}/>
                }
                <Pagination page={page} setPage={setPage}/>
                {
                    loading? (
                        <Loaders />
                    ) : (
                        <div className="row">
                        {characters.map((character: Character) => (
                            <div className="col-md-4 col-sm-6 g-3" key={character.id}>
                                <Cards character={character}/>
                            </div>
                        ))}
                    </div>
                    )
                }
                <Pagination page={page} setPage={setPage}/>
            </div>
        </>
    );
}

export default List;