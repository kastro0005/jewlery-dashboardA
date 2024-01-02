import Layout from "hocs/layout/Layout";
import { useEffect } from "react";
import { get_anillosadmin, get_anillos } from "redux/actions/Anillos/anillos";
import { get_cadenasadmin, get_cadenas } from "redux/actions/Cadenas/cadenas";
import { get_aretesadmin, get_aretes } from "redux/actions/Aretes/aretes";
import {
  get_brazaletesadmin,
  get_brazaletes,
} from "redux/actions/Brazaletes/brazaletes";
import {
  get_tobillerasadmin,
  get_tobilleras,
} from "redux/actions/Tobilleras/tobilleras";
import {
  get_pircingsadmin,
  get_pircings,
} from "redux/actions/Pircings/pircings";
import { get_dijesadmin, get_dijes } from "redux/actions/Dijes/dijes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import Tabla from "components/Home/Tabla";
import Img from "components/Home/Img";

const Dashboard = ({
  get_anillosadmin,
  get_cadenasadmin,
  get_aretesadmin,
  get_brazaletesadmin,
  get_tobillerasadmin,
  get_pircingsadmin,
  get_dijesadmin,
  get_anillos,
  get_cadenas,
  get_aretes,
  get_brazaletes,
  get_tobilleras,
  get_pircings,
  get_dijes,
  countAn,
  countAr,
  countBr,
  countTo,
  countCa,
  countDi,
  countPi,
  countAdAn,
  countAdAr,
  countAdBr,
  countAdTo,
  countAdCa,
  countAdDi,
  countAdPi,
}) => {
  useEffect(() => {
    get_anillosadmin();
    get_cadenasadmin();
    get_aretesadmin();
    get_brazaletesadmin();
    get_tobillerasadmin();
    get_pircingsadmin();
    get_dijesadmin();
    get_anillos();
    get_cadenas();
    get_aretes();
    get_brazaletes();
    get_tobilleras();
    get_pircings();
    get_dijes();
  }, [
    get_anillosadmin,
    get_cadenasadmin,
    get_aretesadmin,
    get_brazaletesadmin,
    get_tobillerasadmin,
    get_pircingsadmin,
    get_dijesadmin,
    get_anillos,
    get_cadenas,
    get_aretes,
    get_brazaletes,
    get_tobilleras,
    get_pircings,
    get_dijes,
  ]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Jewelry Admin</title>
        </Helmet>
        <div className="bg-slate-300 ml-1 mr-1">
          <Img
            countAn={countAn}
            countAr={countAr}
            countBr={countBr}
            countTo={countTo}
            countCa={countCa}
            countDi={countDi}
            countPi={countPi}
          />
          <div>
            <Tabla
              countAn={countAn}
              countAr={countAr}
              countBr={countBr}
              countTo={countTo}
              countCa={countCa}
              countDi={countDi}
              countPi={countPi}
              countAdAn={countAdAn}
              countAdAr={countAdAr}
              countAdBr={countAdBr}
              countAdTo={countAdTo}
              countAdCa={countAdCa}
              countAdDi={countAdDi}
              countAdPi={countAdPi}
            />
          </div>
        </div>
      </HelmetProvider>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  countAn: state.anillos.count,
  countAr: state.aretes.count,
  countBr: state.brazaletes.count,
  countTo: state.tobilleras.count,
  countCa: state.cadenas.count,
  countDi: state.dijes.count,
  countPi: state.pircings.count,
  countAdAn: state.anillos.countadmin,
  countAdAr: state.aretes.countadmin,
  countAdBr: state.brazaletes.countadmin,
  countAdTo: state.tobilleras.countadmin,
  countAdCa: state.cadenas.countadmin,
  countAdDi: state.dijes.countadmin,
  countAdPi: state.pircings.countadmin,
  
});
export default connect(mapStateToProps, {
  get_anillosadmin,
  get_cadenasadmin,
  get_aretesadmin,
  get_brazaletesadmin,
  get_tobillerasadmin,
  get_pircingsadmin,
  get_dijesadmin,
  get_anillos,
  get_cadenas,
  get_aretes,
  get_brazaletes,
  get_tobilleras,
  get_pircings,
  get_dijes,
})(Dashboard);
