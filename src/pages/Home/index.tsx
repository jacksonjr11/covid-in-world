import { Summary } from "../../components/Summary";
import {
  Container,
  ContainerData,
  Division,
  Location,
  SectionToday,
} from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/global";
import { MdOutlineCoronavirus, MdOutlineScience } from "react-icons/md";
import { FaSyringe } from "react-icons/fa";
import { GiMedicalPackAlt } from "react-icons/gi";
import { ImHeartBroken } from "react-icons/im";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";

export function Home() {
  const { list, loading } = useContext(GlobalContext);
  const [page, setPage] = useState<number>(0);

  const dataPie = {
    labels: ["Infectados", "Mortes", "Recuperados"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          list ? list[page].active : 0,
          list ? list[page].deaths : 0,
          list ? list[page].recovered : 0,
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
      {loading && !list ? (
        <h1>Hello</h1>
      ) : (
        <>
          <Location>
            <button type="button" onClick={backPage} disabled={page === 0}>
              <MdKeyboardArrowLeft />
            </button>
            <p>
              {list && list[page].continent ? list[page].continent : "Global"}
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
                  data={list ? list[page].todayCases : "sem informações"}
                  icon={MdOutlineCoronavirus}
                  description="casos confirmados"
                />
                <Summary
                  data={list ? list[page].todayDeaths : "sem informações"}
                  icon={MdOutlineCoronavirus}
                  description="mortos"
                />
                <Summary
                  data={list ? list[page].todayRecovered : "sem informações"}
                  icon={MdOutlineCoronavirus}
                  description="recuperados"
                />
              </div>
            </SectionToday>
            <Division>
              <p>( Total )</p>
              <div>
                <Summary
                  data={list ? list[page].cases : "sem informações"}
                  icon={MdOutlineCoronavirus}
                  description="casos confirmados"
                />
                <Summary
                  data={list ? list[page].tests : "sem informações"}
                  icon={MdOutlineScience}
                  description="testes aplicados"
                />
                {list && list[page].vaccine ? (
                  <Summary
                    data={list[page].vaccine}
                    icon={FaSyringe}
                    description="doses de vacinas aplicadas"
                  />
                ) : (
                  <></>
                )}
                <Summary
                  data={list ? list[page].recovered : "sem informações"}
                  icon={GiMedicalPackAlt}
                  description="recuperados"
                />
                <Summary
                  data={list ? list[page].deaths : "sem informações"}
                  icon={ImHeartBroken}
                  description="mortos"
                />
              </div>
            </Division>
          </ContainerData>
        </>
      )}
    </Container>
  );
}
