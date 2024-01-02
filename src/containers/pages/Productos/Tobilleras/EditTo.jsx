import { get_tobillera } from "redux/actions/Tobilleras/tobilleras";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditTo({ get_tobillera, tobillera }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_tobillera(id);
  }, [get_tobillera, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Tobilleras</title>
        </Helmet>
        {tobillera ? (
          <>
           <Header element={tobillera} prod={"tobillera"} Prod={"Tobillera"}/>
           <Edit prod={tobillera} Prod={"Tobillera"} element={get_tobillera}/>
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
  tobillera: state.tobilleras.tobillera,
});
export default connect(mapStateToProps, {
  get_tobillera,
})(EditTo);
