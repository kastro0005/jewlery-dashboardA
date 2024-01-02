import { get_anillo } from "redux/actions/Anillos/anillos";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditAn({ get_anillo, anillo }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_anillo(id);
  }, [get_anillo, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Anillos</title>
        </Helmet>
        {anillo ? (
          <>
           <Header element={anillo} prod={"anillo"} Prod={"Anillo"}/>
           <Edit prod={anillo} Prod={"Anillo"} element={get_anillo}/>
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
  anillo: state.anillos.anillo,
});
export default connect(mapStateToProps, {
  get_anillo,
})(EditAn);
