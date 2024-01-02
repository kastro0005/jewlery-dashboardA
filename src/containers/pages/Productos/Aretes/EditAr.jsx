import { get_arete } from "redux/actions/Aretes/aretes";
import Layout from "hocs/layout/Layout";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import React, { useEffect} from "react";
import Header from "components/Edicion/Header";
import Edit from "components/Edicion/Edit";
import Loading from "components/Edicion/Loading";

function EditAr({ get_arete, arete }) {
  //const
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    get_arete(id);
  }, [get_arete, id]);

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>Edit | Aretes</title>
        </Helmet>
        {arete ? (
          <>
           <Header element={arete} prod={"arete"} Prod={"Arete"}/>
           <Edit prod={arete} Prod={"Arete"} element={get_arete}/>
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
  arete: state.aretes.arete,
});
export default connect(mapStateToProps, {
  get_arete,
})(EditAr);
