import { Link } from "react-router-dom";
import { europeanSoccerTeams } from "../../data/data";



function Teams() {
    return (

        <div>
            {europeanSoccerTeams.map((e, i) => (
                <div>
                    <h1>{e.name}</h1>
                    <h4>{e.country}</h4>
                    <h4>{e.stadium}</h4>
                    <Link to={`/team/${e.id}`}>Team Page</Link>
                </div>
            ))}
        </div>
    )
}

export default Teams;