import { useContext, useState } from "react";
import {
  Container,
  ContainerData,
  Division,
  Location,
  SectionToday,
} from "./styles";
import { GlobalContext } from "../../contexts/global";
import {
  MdOutlineCoronavirus,
  MdOutlineScience,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { GiMedicalPackAlt } from "react-icons/gi";
import { ImHeartBroken } from "react-icons/im";
import { Summary } from "../../components/Summary";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export function Home() {
  const { list } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(0);

  const dataPie = {
    labels: ["Infectados", "Mortes", "Recuperados"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          list.length > 0 ? list[page]?.active : 0,
          list.length > 0 ? list[page]?.deaths : 0,
          list.length > 0 ? list[page]?.recovered : 0,
        ],
        backgroundColor: ["#FAC864", "#E52e54", "#96C8FA"],
        borderColor: ["#FFF"],
        borderWidth: 1,
      },
    ],
  };

  function nextPage() {
    if (page < list.length - 1) {
      return setPage((prev) => prev + 1);
    }
  }

  function backPage() {
    if (page > 0) {
      return setPage((prev) => prev - 1);
    }
  }

  console.log(list);
  return (
    <Container>
      <Location>
        <button type="button" onClick={backPage} disabled={page === 0}>
          <MdKeyboardArrowLeft />
        </button>
        <p>
          {list.length > 0 && list[page]?.continent
            ? list[page].continent
            : "Global"}
        </p>
        <button
          type="button"
          onClick={nextPage}
          disabled={list ? list.length - 1 === page : false}
        >
          <MdKeyboardArrowRight />
        </button>
      </Location>
      <ContainerData>
        <Division>
          <h1>Divisão dos casos</h1>
          <Pie data={dataPie} title="Divisão dos casos totais" />
        </Division>
        <SectionToday>
          <p>( Hoje )</p>
          <div>
            <Summary
              data={
                list.length > 0 ? list[page]?.todayCases : "sem informações"
              }
              icon={MdOutlineCoronavirus}
              description="casos confirmados"
            />
            <Summary
              data={
                list.length > 0 ? list[page]?.todayDeaths : "sem informações"
              }
              icon={ImHeartBroken}
              description="mortos"
            />
            <Summary
              data={
                list.length > 0 ? list[page]?.todayRecovered : "sem informações"
              }
              icon={GiMedicalPackAlt}
              description="recuperados"
            />
          </div>
        </SectionToday>
        <Division>
          <p>( Total )</p>
          <div>
            <Summary
              data={list.length > 0 ? list[page]?.cases : "sem informações"}
              icon={MdOutlineCoronavirus}
              description="casos confirmados"
            />
            <Summary
              data={list.length > 0 ? list[page]?.tests : "sem informações"}
              icon={MdOutlineScience}
              description="testes aplicados"
            />
            <Summary
              data={list.length > 0 ? list[page]?.recovered : "sem informações"}
              icon={GiMedicalPackAlt}
              description="recuperados"
            />
            <Summary
              data={list.length > 0 ? list[page]?.deaths : "sem informações"}
              icon={ImHeartBroken}
              description="mortos"
            />
          </div>
        </Division>
      </ContainerData>
    </Container>
  );
}
