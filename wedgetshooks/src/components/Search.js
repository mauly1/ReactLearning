import React, {useState, useEffect} from "react";
import Axios from "axios";
import "../CSS/Accordion.css"

const Search = () => {
    const [term, setTerm] = useState('google');
    const [results, setResults] = useState([]);

    console.log('------------>>>>> i run every time when components rerender <<<<<<<<<<<<<<<<<<------');
    useEffect(() => {
        // approach first
        /*const  search  = async ()=>{
            await Axios.get();
        }*/
        // Approach second
        /* (
             async ()=>{
                 await Axios.get();
             }
         )();*/

        // Third Approach by promise
        /*        Axios.get().then((response)=>{
                    console.log(response.data);¬
                })*/

        console.log(results);
        const search = async () => {
            const {data} = await Axios.get('Https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };
        if (term && !results.length) {
            search();
        } else {
            const clearTimeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 500);

            return (() => {
                clearTimeout(clearTimeoutId);
            });
        }

    }, [term]);

    const renderResults = results.map((result) => {
        return (
            <div key={result.pageid} className=" accordion-space item">
                <div className="right floated content">
                    <a
                        target="_blank"
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >GO</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* Approach first to convert response html in actual html
                    {result.snippet}*/}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    })
    return (
        <div>
            <div className=" accordion-space ui form">
                <div className="field">
                    <label> Enter Search Item:</label>
                    <input
                        className="input"
                        onChange={event => setTerm(event.target.value)}/>
                </div>

            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>
    );
}
export default Search;
