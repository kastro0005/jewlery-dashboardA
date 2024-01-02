import { get_cadena } from "redux/actions/Cadenas/cadenas";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditCa({ get_cadena, cadena }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_cadena(id);
  }, [get_cadena, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Cadenas</title>
        </Helmet>
        {cadena ? (
          <>
           <Header element={cadena} prod={"cadena"} Prod={"Cadena"}/>
           <Edit prod={cadena} Prod={"Cadena"} element={get_cadena}/>
          </>
        ) : (
          <>
          <Loading/>
          </>
        )}
      </HelmetProvider>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  cadena: state.cadenas.cadena,
});
export default connect(mapStateToProps, {
  get_cadena,
})(EditCa);
