import { Summary } from "../../components/Summary";
import {
  Container,
  ContainerData,
  Division,
  Location,
  SectionToday,
} from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";
import { MdOutlineCoronavirus, MdOutlineScience } from "react-icons/md";
import { FaSyringe } from "react-icons/fa";
import { GiMedicalPackAlt } from "react-icons/gi";
import { ImHeartBroken } from "react-icons/im";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export function Home() {
  const {
    active,
    cases,
    deaths,
    tests,
    recovered,
    vaccine,
    todayCases,
    todayDeaths,
    todayRecovered,
    loading,
  } = useContext(GlobalContext);

  const dataPie = {
    labels: ["Infectados", "Mortes", "Recuperados"],
    datasets: [
      {
        label: "# of Votes",
        data: [active, deaths, recovered],
        backgroundColor: ["#FAC864", "#E52e54", "#96C8FA"],
        borderColor: ["#FFF"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Location>
        <button type="button">
          <MdKeyboardArrowLeft />
        </button>
        <p>Global</p>
        <button type="button">
          <MdKeyboardArrowRight />
        </button>
      </Location>
      <ContainerData>
        <Division>
          <h1>Divisão dos casos</h1>
          <Pie data={dataPie} title="Divisão dos casos totais" />
        </Division>
        <Division>
          <p>( Total )</p>
          <Summary
            data={cases}
            icon={MdOutlineCoronavirus}
            description="casos confirmados"
          />
          <Summary
            data={tests}
            icon={MdOutlineScience}
            description="testes aplicados"
          />
          <Summary
            data={vaccine}
            icon={FaSyringe}
            description="doses de vacinas aplicadas"
          />
          <Summary
            data={recovered}
            icon={GiMedicalPackAlt}
            description="recuperados"
          />
          <Summary data={deaths} icon={ImHeartBroken} description="mortos" />
        </Division>
      </ContainerData>
    </Container>
  );
}
