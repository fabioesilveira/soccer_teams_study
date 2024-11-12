import { useParams } from "react-router-dom";
import { europeanSoccerTeams } from "../../data/data";

function Team() {

    const params = useParams();
    const team = europeanSoccerTeams.find((e) => e.id == params.id )

    return(
        <div>
          <h1>{team.name}</h1>
          <h4>{team.country}</h4>
          <h4>{team.stadium}</h4>
        </div>
    )
}

export default Team;